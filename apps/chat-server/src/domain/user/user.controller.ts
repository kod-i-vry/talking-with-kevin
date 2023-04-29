import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { SignUpDto } from './user.dto';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @Get()
  getUsers() {
    return 'getUsers';
  }

  @Post()
  signUp(@Body() data: SignUpDto) {
    this.userService.signUp(data);
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
