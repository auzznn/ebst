import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as puppeteer from 'puppeteer-core';
import { FilesService } from '../files/files.service';
import { PrismaService } from '../prisma/prisma.service';
import { GenerateInvoiceDto } from './dto/generate-invoice.dto';
import { generateInvoiceHtml, InvoiceData } from './templates/invoice.template';
import { generatePlaceholderHtml } from './templates/placeholder.template';
import * as fs from 'fs';

@Injectable()
export class DocumentGenService {
  constructor(
    private configService: ConfigService,
    private filesService: FilesService,
    private prisma: PrismaService,
  ) { }

  private getChromiumPath(): string {
    const envPath = this.configService.get<string>('CHROMIUM_PATH');
    if (envPath && fs.existsSync(envPath)) {
      return envPath;
    }

    // Common macOS paths
    const macPaths = [
      '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
      '/Applications/Brave Browser.app/Contents/MacOS/Brave Browser',
      '/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge',
    ];

    for (const p of macPaths) {
      if (fs.existsSync(p)) return p;
    }

    // Linux paths
    const linuxPaths = [
      '/usr/bin/google-chrome',
      '/usr/bin/chromium-browser',
      '/usr/bin/chromium',
    ];

    for (const p of linuxPaths) {
      if (fs.existsSync(p)) return p;
    }

    throw new InternalServerErrorException(
      'Chromium executable not found. Please set CHROMIUM_PATH in .env',
    );
  }

  async generateInvoicePdf(dto: GenerateInvoiceDto, userId: string) {
    // 1. Calculate derived fields
    const items = dto.items.map((item) => ({
      ...item,
      amount: item.unitPrice * item.qty,
    }));

    const dppHargaJual = items.reduce((sum, item) => sum + item.amount, 0);
    const dppNilaiLain = Math.round((dppHargaJual * 11) / 12);
    const ppn = Math.round(dppNilaiLain * 0.12);
    const total = dppHargaJual + ppn;

    const data: InvoiceData = {
      invoiceNo: dto.invoiceNo,
      to: dto.to,
      poNo: dto.poNo,
      date: dto.date,
      items,
      dppHargaJual,
      dppNilaiLain,
      ppn,
      total,
    };

    // 2. Render HTML
    const html = generateInvoiceHtml(data);

    // 3. Launch Puppeteer and generate PDF
    const executablePath = this.getChromiumPath();
    const browser = await puppeteer.launch({
      executablePath,
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });

    const page = await browser.newPage();
    await page.setContent(html, { waitUntil: 'networkidle0' });

    const pdfBufferView = await page.pdf({
      format: 'A4',
      printBackground: true,
      margin: { top: '0', right: '0', bottom: '0', left: '0' },
    });

    const pdfBuffer = Buffer.from(pdfBufferView);
    await browser.close();

    // 4. Upload PDF to R2
    const filename = `Invoice_${dto.invoiceNo.replace(/[^a-z0-9]/gi, '_')}.pdf`;
    const { key } = await this.filesService.uploadFileDirect(
      filename,
      'application/pdf',
      pdfBuffer,
    );

    // 5. In a single transaction: create BusinessDocument + Invoice + InvoiceItems
    const invoice = await this.prisma.$transaction(async (tx) => {
      // 5a. Register the PDF snapshot in BusinessDocument
      const businessDoc = await tx.businessDocument.create({
        data: {
          key,
          fileName: filename,
          fileType: 'application/pdf',
          size: pdfBuffer.length,
          documentType: 'INVOICE',
          userId,
        },
      });

      // 5b. Create the Invoice record (source of truth)
      const createdInvoice = await tx.invoice.create({
        data: {
          invoiceNo: dto.invoiceNo,
          date: new Date(dto.date),
          poNo: dto.poNo || null,
          status: 'UNPAID',
          dppHargaJual,
          dppNilaiLain,
          ppn,
          total,
          customerId: dto.customerId,
          createdById: userId,
          documentId: businessDoc.id,
          items: {
            create: items.map((item) => ({
              no: item.no,
              partNo: item.partNo || null,
              description: item.description,
              unitPrice: item.unitPrice,
              qty: item.qty,
              qtyUnit: item.qtyUnit,
              amount: item.amount,
            })),
          },
        },
        include: {
          customer: true,
          items: { orderBy: { no: 'asc' } },
          document: true,
          createdBy: { select: { id: true, name: true, role: true } },
        },
      });

      return createdInvoice;
    });

    return { invoice, key };
  }

  async findAllInvoices() {
    return this.prisma.invoice.findMany({
      orderBy: { createdAt: 'desc' },
      include: {
        customer: { select: { id: true, name: true, email: true } },
        items: { orderBy: { no: 'asc' } },
        document: { select: { id: true, key: true, fileName: true } },
        createdBy: { select: { id: true, name: true, role: true } },
      },
    });
  }

  async updateInvoiceStatus(invoiceId: string, status: 'UNPAID' | 'PAID' | 'PARTIAL' | 'CANCELLED') {
    return this.prisma.invoice.update({
      where: { id: invoiceId },
      data: { status },
    });
  }

  // Future templating method
  async getTemplate(type: string, data: any) {
    const registry = {
      INVOICE: generateInvoiceHtml,
      OTHER: generatePlaceholderHtml,
    };
    const fn = registry[type] || registry.OTHER;
    return fn(data);
  }
}
