import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common'
import { WsException } from '@nestjs/websockets'
import { auth } from '@ebst/auth'

@Injectable()
export class WsAuthGuard implements CanActivate {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const client = context.switchToWs().getClient()
    const cookieHeader = client.handshake.headers.cookie

    if (!cookieHeader) throw new WsException('Unauthorized')

    try {
      const session = await auth.api.getSession({
        headers: new Headers({ cookie: cookieHeader }),
      })

      if (!session) throw new WsException('Unauthorized')

      // Attach user to socket so handlers can access it
      client.data.userId = session.user.id
      client.data.user = session.user

      return true
    } catch {
      throw new WsException('Unauthorized')
    }
  }
}