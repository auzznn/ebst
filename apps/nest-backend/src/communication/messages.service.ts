import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { SendMessageDto } from './dto/send-message.dto';
import { EncryptionService } from 'src/encryption/encryption.service';

@Injectable()
export class MessagesService {
  constructor(
    private prisma: PrismaService,
    private encryption: EncryptionService,
  ) {}

  async create(senderId: string, dto: SendMessageDto) {
    // 1. Run both queries in a transaction
    const [createdMessage] = await this.prisma.$transaction([
      this.prisma.message.create({
        data: {
          content: this.encryption.encrypt(dto.content),
          type: dto.type ?? 'text',
          fileUrl: dto.fileUrl,
          senderId,
          channelId: dto.channelId,
        },
        include: { sender: true }, // This works perfectly inside a transaction!
      }),

      this.prisma.channel.update({
        where: {
          id: dto.channelId, // FIXED: Schema uses 'id', not 'channelId'
        },
        data: {
          lastMessage: new Date(),
        },
      }),
    ]);

    // 2. Decrypt the content and return the message from the transaction
    return {
      ...createdMessage,
      content: this.encryption.decrypt(createdMessage.content),
    };
  }

  async findByChannel(channelId: string, cursor?: string, take = 30) {
    // Cursor-based pagination — loads older messages on scroll
    const message = await this.prisma.message.findMany({
      where: { channelId },
      orderBy: { createdAt: 'desc' },
      take: take + 1, // Fetch one extra to check if there are more messages
      ...(cursor && {
        skip: 1,
        cursor: { id: cursor },
      }),
      include: { sender: true },
    });

    let nextCursor: string | null = null;
    if (message.length === take + 1) {
      const nextItem = message.pop(); // Remove the extra item
      nextCursor = nextItem?.id ?? null;
    }

    const decryptedMessages = message.map((m) => ({
      ...m,
      content: this.encryption.decrypt(m.content),
    }));

    return {
      messages: decryptedMessages,
      nextCursor,
    };
  }

  async delete(messageId: string, userId: string) {
    return this.prisma.message.deleteMany({
      where: { id: messageId, senderId: userId }, // only owner can delete
    });
  }
}
