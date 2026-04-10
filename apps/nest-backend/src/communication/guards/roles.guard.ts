import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ROLES_KEY } from '../decorators/roles.decorator';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<string[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (!requiredRoles) {
      return true;
    }
    
    const contextType = context.getType();
    let user;
    
    if (contextType === 'http') {
      const request = context.switchToHttp().getRequest();
      user = request.user;
    } else if (contextType === 'ws') {
      const client = context.switchToWs().getClient();
      user = client.data?.user;
    } else {
      return true;
    }

    if (!user || !user.role) {
      return false;
    }

    return requiredRoles.includes(user.role);
  }
}
