import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DocumentGenController } from './document-gen.controller';
import { DocumentGenService } from './document-gen.service';
import { FilesModule } from '../files/files.module';

@Module({
  imports: [ConfigModule, FilesModule],
  controllers: [DocumentGenController],
  providers: [DocumentGenService],
})
export class DocumentGenModule {}
