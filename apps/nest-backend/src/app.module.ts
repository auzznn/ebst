import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { CommunicationModule } from './communication/communication.module';
import { UsersModule } from './users/users.module';
import { EncryptionService } from './encryption/encryption.service';
import { EncryptionModule } from './encryption/encryption.module';
import { AccountingModule } from './accounting/accounting.module';
import { FilesModule } from './files/files.module';
import { DocumentGenModule } from './document-gen/document-gen.module';
import { CustomersModule } from './customers/customers.module';

@Module({
  imports: [PrismaModule, CommunicationModule, UsersModule, EncryptionModule, AccountingModule, FilesModule, DocumentGenModule, CustomersModule],
  controllers: [AppController],
  providers: [AppService, EncryptionService],
})
export class AppModule { }