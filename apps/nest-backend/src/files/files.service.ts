import { Injectable, Inject } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { S3Client, PutObjectCommand, GetObjectCommand, DeleteObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { v4 as uuidv4 } from 'uuid';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class FilesService {
    constructor(
        @Inject('S3_CLIENT') private readonly s3: S3Client,
        private config: ConfigService,
        private prisma: PrismaService
    ) { }

    async uploadFileDirect(filename: string, contentType: string, buffer: Buffer) {
        const key = `business/${uuidv4()}/${filename}`;
        const command = new PutObjectCommand({
            Bucket: this.config.get('R2_BUCKET_NAME'),
            Key: key,
            ContentType: contentType,
            Body: buffer,
        });
        await this.s3.send(command);
        return { key };
    }

    /**
     * Generate a signed download URL directly from a key, without requiring
     * a BusinessDocument record. Used for internal assets like part drawing refs.
     */
    async getSignedUrlDirect(key: string) {
        const command = new GetObjectCommand({
            Bucket: this.config.get('R2_BUCKET_NAME'),
            Key: key,
        });
        return { url: await getSignedUrl(this.s3, command, { expiresIn: 3600 }) };
    }

    async registerDocument(data: {
        key: string;
        fileName: string;
        fileType: string;
        size: number;
        documentType: 'INVOICE' | 'PURCHASE_ORDER' | 'DELIVERY_NOTE' | 'OTHER';
        userId: string;
    }) {
        return this.prisma.businessDocument.create({
            data: {
                key: data.key,
                fileName: data.fileName,
                fileType: data.fileType,
                size: data.size,
                documentType: data.documentType,
                userId: data.userId,
            }
        });
    }

    async listDocuments(userId: string, role: string) {
        const isElevated = ['ADMIN', 'FINANCE', 'EXECUTIVE'].includes(role);
        
        return this.prisma.businessDocument.findMany({
            where: isElevated ? {} : { userId },
            include: {
                user: {
                    select: {
                        name: true,
                        role: true
                    }
                }
            },
            orderBy: { createdAt: 'desc' },
        });
    }

    async getDownloadUrl(key: string, userId: string, role: string) {
        const isElevated = ['ADMIN', 'FINANCE', 'EXECUTIVE'].includes(role);

        // Verify ownership or elevated role
        const doc = await this.prisma.businessDocument.findFirst({
            where: isElevated ? { key } : { key, userId }
        });

        if (!doc) {
            throw new Error('Document not found or access denied');
        }

        const command = new GetObjectCommand({
            Bucket: this.config.get('R2_BUCKET_NAME'),
            Key: key,
            ResponseContentDisposition: `attachment; filename="${doc.fileName}"`,
        });
        return await getSignedUrl(this.s3, command, { expiresIn: 3600 });
    }

    async deleteFile(key: string, userId: string) {
        // First verify ownership
        const doc = await this.prisma.businessDocument.findFirst({
            where: { key, userId }
        });

        if (!doc) {
            throw new Error('Document not found or access denied');
        }

        const command = new DeleteObjectCommand({
            Bucket: this.config.get('R2_BUCKET_NAME'),
            Key: key,
        });
        await this.s3.send(command);

        await this.prisma.businessDocument.delete({
            where: { key }
        });

        return { success: true };
    }
}