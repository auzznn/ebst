import { S3Client } from '@aws-sdk/client-s3';
import { ConfigService } from '@nestjs/config';

export const createR2Client = (config: ConfigService) => {
    return new S3Client({
        region: 'auto',
        endpoint: `https://${config.get('R2_ACCOUNT_ID')}.r2.cloudflarestorage.com`,
        credentials: {
            accessKeyId: config.get('R2_ACCESS_KEY_ID')!,
            secretAccessKey: config.get('R2_SECRET_ACCESS_KEY')!,
        },
        forcePathStyle: true, // Required for R2
    });
};