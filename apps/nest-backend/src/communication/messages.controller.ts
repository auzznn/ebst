import { Controller, Get, Delete, Param, Query, Req } from '@nestjs/common'
import { MessagesService } from './messages.service'

@Controller('messages')
export class MessagesController {
  constructor(private messagesService: MessagesService) {}

  @Get(':channelId')
  findByChannel(
    @Param('channelId') channelId: string,
    @Query('cursor') cursor?: string,
  ) {
    return this.messagesService.findByChannel(channelId, cursor)
  }

  @Delete(':id')
  delete(@Param('id') id: string, @Req() req: any) {
    return this.messagesService.delete(id, req.user.id)
  }
}