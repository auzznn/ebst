import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as puppeteer from 'puppeteer-core';
import { FilesService } from '../files/files.service';
import { GenerateInvoiceDto } from './dto/generate-invoice.dto';
import { generateInvoiceHtml, InvoiceData } from './templates/invoice.template';
import { generatePlaceholderHtml } from './templates/placeholder.template';
import * as fs from 'fs';

@Injectable()
export class DocumentGenService {
  constructor(
    private configService: ConfigService,
    private filesService: FilesService,
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

    // 3. Launch Puppeteer
    const executablePath = this.getChromiumPath();
    const browser = await puppeteer.launch({
      executablePath,
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });

    const page = await browser.newPage();
    await page.setContent(html, { waitUntil: 'networkidle0' });

    // 4. Generate PDF
    const pdfBufferView = await page.pdf({
      format: 'A4',
      printBackground: true,
      margin: { top: '0', right: '0', bottom: '0', left: '0' },
    });

    // Convert Uint8Array to Buffer properly
    const pdfBuffer = Buffer.from(pdfBufferView);

    await browser.close();

    // 5. Upload to R2
    const filename = `Invoice_${dto.invoiceNo.replace(/[^a-z0-9]/gi, '_')}.pdf`;
    const { key } = await this.filesService.uploadFileDirect(
      filename,
      'application/pdf',
      pdfBuffer,
    );

    // 6. Register document
    const document = await this.filesService.registerDocument({
      key,
      fileName: filename,
      fileType: 'application/pdf',
      size: pdfBuffer.length,
      documentType: 'INVOICE',
      userId,
    });

    // 7. Get download URL (Since we need a role to view it, let's just return the doc and the user can fetch the URL from the list, or we provide a short-lived link)
    // To simplify, we return the document and a pre-signed download URL. For filesService.getDownloadUrl we need role.
    // Instead of passing role, we can fetch the user role or just assume they have access since they just created it.
    // Wait, let's just return the document object. The frontend can use `getDownloadUrl` mutation if needed, or we fetch role.

    return {
      document,
      key, // We return key and let frontend use getDownloadUrl mutation
    };
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
