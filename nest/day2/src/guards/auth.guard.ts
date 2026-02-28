import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { Request } from 'express';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest<Request>();
    const token = this.extractTokenFromHeader(request);
    
    if (token){
    
      try {
        const payload = jwt.verify(token, '7ady_pady_shaloy_we_7ato_fe_el_7awashy');
        request['user'] = payload;
      } catch {
        throw new UnauthorizedException('Invalid token');
      }
      
      return true;
    }
    return false;
  }

  private extractTokenFromHeader(request: Request): string | undefined {
    return request.headers.token as string | undefined;
  }
}
