import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { FilesController } from './files.controller';
import { FilesService } from './files.service';
import { createR2Client } from '../r2.config';

@Module({
    imports: [ConfigModule.forRoot()],
    controllers: [FilesController],
    providers: [
        FilesService,
        {
            provide: 'S3_CLIENT',
            inject: [ConfigService],
            useFactory: createR2Client,
        },
    ],
    exports: [FilesService]
})
export class FilesModule { }