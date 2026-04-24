import { Controller, Post, Get, Delete, Body, Param, Req, UseGuards, UseInterceptors, UploadedFile } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { FilesService } from './files.service';
import { HttpAuthGuard } from '../communication/guards/http-auth.guard';
import { RegisterDocumentDto } from './dto/register-document.dto';
import type { Express } from 'express';

@Controller('files')
@UseGuards(HttpAuthGuard)
export class FilesController {
    constructor(private readonly filesService: FilesService) { }

    @Post('upload-direct')
    @UseInterceptors(FileInterceptor('file'))
    async uploadFileDirect(@UploadedFile() file: Express.Multer.File) {
        if (!file) {
            throw new Error('File upload failed or no file provided');
        }
        return this.filesService.uploadFileDirect(
            file.originalname,
            file.mimetype,
            file.buffer
        );
    }

    @Post('register')
    async registerDocument(@Body() dto: RegisterDocumentDto, @Req() req: any) {
        return this.filesService.registerDocument({
            ...dto,
            userId: req.user.id,
        });
    }

    @Get()
    async listDocuments(@Req() req: any) {
        return this.filesService.listDocuments(req.user.id, req.user.role);
    }

    @Get(':key/download')
    async getDownloadUrl(@Param('key') key: string, @Req() req: any) {
        const url = await this.filesService.getDownloadUrl(decodeURIComponent(key), req.user.id, req.user.role);
        return { url };
    }

    @Get('asset/:key')
    async getSignedUrlDirect(@Param('key') key: string) {
        return this.filesService.getSignedUrlDirect(decodeURIComponent(key));
    }

    @Delete(':key')
    async deleteFile(@Param('key') key: string, @Req() req: any) {
        return this.filesService.deleteFile(decodeURIComponent(key), req.user.id);
    }
}