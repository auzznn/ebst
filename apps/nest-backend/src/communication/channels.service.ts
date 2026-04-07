import { Injectable, NotFoundException, ForbiddenException } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { CreateChannelDto } from './dto/create-channel.dto'
import { EncryptionService } from '../encryption/encryption.service'

@Injectable()
export class ChannelsService {
  constructor(private prisma: PrismaService, private encryption: EncryptionService) {}

  async create(dto: CreateChannelDto, creatorId: string) {

    const memberIds = [...new Set([creatorId, ...dto.memberIds])]
    return this.prisma.channel.create({
      data: {
        name: dto.name,
        isDM: dto.isDM,
        members: {
          create: memberIds.map((userId) => ({ userId })),
        },
      },
      include: { members: { include: { user: true } } },
    })
  }

  async findAllForUser(userId: string) {
    const channels = await this.prisma.channel.findMany({
      where: {
        members: { some: { userId } },
      },
      include: {
        members: { include: { user: true } },
        messages: {
          orderBy: { createdAt: 'desc' },
          take: 1,   // last message preview
        },
      },
      orderBy: { createdAt: 'desc' },
    })

    return channels.map((channel) => ({
      ...channel,
      messages: channel.messages.map((m) => ({
        ...m,
        content: this.encryption.decrypt(m.content),
      })),
    }))
  }

  async findOne(channelId: string, userId: string) {
    const channel = await this.prisma.channel.findUnique({
      where: { id: channelId },
      include: { members: { include: { user: true } } },
    })

    if (!channel) throw new NotFoundException('Channel not found')

    const isMember = channel.members.some((m) => m.userId === userId)
    if (!isMember) throw new ForbiddenException('Not a member of this channel')

    return channel
  }

  async addMember(channelId: string, userId: string) {
    return this.prisma.channelMember.create({
      data: { channelId, userId },
    })
  }
}