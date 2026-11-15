import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  async register(body: any) {
    const hashedPassword = await bcrypt.hash(
      body.password,
      10,
    );

    return {
      ...body,
      password: hashedPassword,
    };
  }

  async login(body: any) {
    const mockUser = {
      password: await bcrypt.hash('password', 10),
      role: 'LIBRARIAN',
    };

    const valid = await bcrypt.compare(
      body.password,
      mockUser.password,
    );

    if (!valid) {
      throw new UnauthorizedException();
    }

    return {
      access_token: 'jwt-token',
    };
  }
}