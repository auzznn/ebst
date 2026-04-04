import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common'
import { auth } from '../../../../ebst/lib/auth'

@Injectable()
export class HttpAuthGuard implements CanActivate {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest()
    const cookieHeader = request.headers.cookie

    if (!cookieHeader) throw new UnauthorizedException()

    const session = await auth.api.getSession({
      headers: new Headers({ cookie: cookieHeader }),
    })

    if (!session) throw new UnauthorizedException()

    request.user = session.user   // attach to req so controllers can use @Req()
    return true
  }
}