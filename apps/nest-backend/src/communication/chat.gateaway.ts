import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  MessageBody,
  ConnectedSocket,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets'
import { Server, Socket } from 'socket.io'
import { MessagesService } from './messages.service'
import { SendMessageDto } from './dto/send-message.dto'
import { UseGuards } from '@nestjs/common'
import { WsAuthGuard } from './guards/ws-auth.guard'

@UseGuards(WsAuthGuard)
@WebSocketGateway({
  cors: { origin: process.env.CLIENT_URL, credentials: true },
  namespace: '/chat',
})
export class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server

  constructor(private messagesService: MessagesService) {}

  handleConnection(client: Socket) {
    console.log(`Client connected: ${client.id}`)
    // TODO: validate better-auth session token from client handshake
    // const token = client.handshake.auth.token
  }

  handleDisconnect(client: Socket) {
    console.log(`Client disconnected: ${client.id}`)
  }

  @SubscribeMessage('join_room')
  handleJoinRoom(
    @MessageBody() channelId: string,
    @ConnectedSocket() client: Socket,
  ) {
    client.join(channelId)
    client.emit('joined_room', { channelId })
  }

  @SubscribeMessage('leave_room')
  handleLeaveRoom(
    @MessageBody() channelId: string,
    @ConnectedSocket() client: Socket,
  ) {
    client.leave(channelId)
  }

  @SubscribeMessage('send_message')
  async handleMessage(
    @MessageBody() dto: SendMessageDto,
    @ConnectedSocket() client: Socket,
  ) {
    // Pull senderId from the socket's auth context
    const senderId = client.data.userId

    // Persist to Postgres
    const message = await this.messagesService.create(senderId, dto)

    // Broadcast to everyone in the channel room (including sender)
    this.server.to(dto.channelId).emit('new_message', message)

    return message
  }

  @SubscribeMessage('typing')
  handleTyping(
    @MessageBody() data: { channelId: string; userId: string },
    @ConnectedSocket() client: Socket,
  ) {
    // Broadcast to room except the sender
    client.to(data.channelId).emit('user_typing', {
      userId: data.userId,
      channelId: data.channelId,
    })
  }
}