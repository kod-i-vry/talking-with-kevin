import { Controller, Get, Post } from '@nestjs/common';

@Controller('user')
export class UserController {
  @Get()
  getUsers() {
    return 'getUsers';
  }

  @Post()
  signUp() {
    return 'createUser';
  }

  @Post('signIn')
  signIn() {
    return 'signIn';
  }

  @Post('signOut')
  signOut() {
    return 'signOut';
  }
}
