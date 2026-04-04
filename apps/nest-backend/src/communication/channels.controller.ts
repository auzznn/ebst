import { Controller, Post, Get, Param, Body, Req } from '@nestjs/common'
import { ChannelsService } from './channels.service'
import { CreateChannelDto } from './dto/create-channel.dto'

@Controller('channels')
export class ChannelsController {
  constructor(private channelsService: ChannelsService) {}

  // better-auth attaches the user to req — adjust to your session shape
  @Post()
  create(@Body() dto: CreateChannelDto, @Req() req: any) {
    return this.channelsService.create(dto)
  }

  @Get()
  findAll(@Req() req: any) {
    return this.channelsService.findAllForUser(req.user.id)
  }

  @Get(':id')
  findOne(@Param('id') id: string, @Req() req: any) {
    return this.channelsService.findOne(id, req.user.id)
  }

  @Post(':id/members/:userId')
  addMember(@Param('id') id: string, @Param('userId') userId: string) {
    return this.channelsService.addMember(id, userId)
  }
}