import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { SendMessageDto } from './dto/send-message.dto'

@Injectable()
export class MessagesService {
  constructor(private prisma: PrismaService) {}

  async create(senderId: string, dto: SendMessageDto) {
    return this.prisma.message.create({
      data: {
        content: dto.content,
        type: dto.type ?? 'text',
        fileUrl: dto.fileUrl,
        senderId,
        channelId: dto.channelId,
      },
      include: { sender: true },
    })
  }

  async findByChannel(channelId: string, cursor?: string, take = 30) {
    // Cursor-based pagination — loads older messages on scroll
    return this.prisma.message.findMany({
      where: { channelId },
      orderBy: { createdAt: 'desc' },
      take,
      ...(cursor && {
        skip: 1,
        cursor: { id: cursor },
      }),
      include: { sender: true },
    })
  }

  async delete(messageId: string, userId: string) {
    return this.prisma.message.deleteMany({
      where: { id: messageId, senderId: userId },  // only owner can delete
    })
  }
}