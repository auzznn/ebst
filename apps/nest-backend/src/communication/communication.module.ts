import { Module } from '@nestjs/common';
import { ChannelsService } from './channels.service';
import { MessagesService } from './messages.service';
import { ChannelsController } from './channels.controller';
import { MessagesController } from './messages.controller';
import { ChatGateway } from './chat.gateaway';

@Module({
  providers: [ChannelsService, MessagesService, ChatGateway],
  controllers: [ChannelsController, MessagesController]
})
export class CommunicationModule {}
