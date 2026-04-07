import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { SendMessageDto } from './dto/send-message.dto'
import { EncryptionService } from 'src/encryption/encryption.service'

@Injectable()
export class MessagesService {
  constructor(private prisma: PrismaService, private encryption: EncryptionService) {}

  async create(senderId: string, dto: SendMessageDto) {
    const message = await this.prisma.message.create({
      data: {
        content: this.encryption.encrypt(dto.content),
        type: dto.type ?? 'text',
        fileUrl: dto.fileUrl,
        senderId,
        channelId: dto.channelId,
      },
      include: { sender: true },
    })

    return {
      ...message,
      content: this.encryption.decrypt(message.content)
    }
  }

  async findByChannel(channelId: string, cursor?: string, take = 30) {
    // Cursor-based pagination — loads older messages on scroll
    const message = await this.prisma.message.findMany({
      where: { channelId },
      orderBy: { createdAt: 'desc' },
      take,
      ...(cursor && {
        skip: 1,
        cursor: { id: cursor },
      }),
      include: { sender: true },
    })

    return message.map((m) => ({
      ...m,
      content: this.encryption.decrypt(m.content)
    }))
  }

  async delete(messageId: string, userId: string) {
    return this.prisma.message.deleteMany({
      where: { id: messageId, senderId: userId },  // only owner can delete
    })
  }
}