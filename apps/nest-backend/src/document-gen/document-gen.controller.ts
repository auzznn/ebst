import { Controller, Post, Get, Patch, Body, Param, Req, UseGuards } from '@nestjs/common';
import { DocumentGenService } from './document-gen.service';
import { GenerateInvoiceDto } from './dto/generate-invoice.dto';
import { HttpAuthGuard } from '../communication/guards/http-auth.guard';
import { FilesService } from '../files/files.service';
import { Roles } from 'src/communication/decorators/roles.decorator';
import { RolesGuard } from 'src/communication/guards/roles.guard';
import { IsIn } from 'class-validator';

class UpdateInvoiceStatusDto {
  @IsIn(['UNPAID', 'PAID', 'PARTIAL', 'CANCELLED'])
  status: 'UNPAID' | 'PAID' | 'PARTIAL' | 'CANCELLED';
}

@Controller('document-gen')
@UseGuards(HttpAuthGuard, RolesGuard)
export class DocumentGenController {
  constructor(
    private readonly documentGenService: DocumentGenService,
    private readonly filesService: FilesService,
  ) { }

  // ─── Generate Invoice PDF + save to DB ─────────────────────────
  @Post('invoice')
  @Roles('FINANCE', 'EXECUTIVE')
  async generateInvoice(@Body() dto: GenerateInvoiceDto, @Req() req: any) {
    const { invoice, key } = await this.documentGenService.generateInvoicePdf(
      dto,
      req.user.id,
    );

    // Return a pre-signed URL to the PDF for immediate preview
    const url = await this.filesService.getDownloadUrl(key, req.user.id, req.user.role);

    return { invoice, url };
  }

  // ─── List all invoices ──────────────────────────────────────────
  @Get('invoice')
  @Roles('FINANCE', 'EXECUTIVE', 'ADMIN')
  async listInvoices() {
    return this.documentGenService.findAllInvoices();
  }

  // ─── Update invoice status ──────────────────────────────────────
  @Patch('invoice/:id/status')
  @Roles('FINANCE')
  async updateStatus(
    @Param('id') id: string,
    @Body() dto: UpdateInvoiceStatusDto,
  ) {
    return this.documentGenService.updateInvoiceStatus(id, dto.status);
  }
}
