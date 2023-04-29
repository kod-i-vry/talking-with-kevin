import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  async signUp(data) {
    console.log(data);
  }
}
