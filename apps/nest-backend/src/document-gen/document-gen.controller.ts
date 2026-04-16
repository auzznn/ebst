import { Controller, Post, Body, Req, UseGuards } from '@nestjs/common';
import { DocumentGenService } from './document-gen.service';
import { GenerateInvoiceDto } from './dto/generate-invoice.dto';
import { HttpAuthGuard } from '../communication/guards/http-auth.guard';
import { FilesService } from '../files/files.service';
import { Roles } from 'src/communication/decorators/roles.decorator';
import { RolesGuard } from 'src/communication/guards/roles.guard';

@Controller('document-gen')
@UseGuards(HttpAuthGuard, RolesGuard)
export class DocumentGenController {
  constructor(
    private readonly documentGenService: DocumentGenService,
    private readonly filesService: FilesService
  ) { }

  @Post('invoice')
  @Roles('FINANCE')
  async generateInvoice(@Body() dto: GenerateInvoiceDto, @Req() req: any) {
    const { document, key } = await this.documentGenService.generateInvoicePdf(
      dto,
      req.user.id,
    );

    // Auto generate presigned URL for convenience
    const url = await this.filesService.getDownloadUrl(key, req.user.id, req.user.role);

    return { document, url };
  }
}
