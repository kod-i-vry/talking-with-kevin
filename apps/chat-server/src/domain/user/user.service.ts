import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';

import { User } from '../../entity';

@Injectable()
export class UserService {
  constructor() // @InjectRepository(User)
  // private userRepository: Repository<User>,
  // private dataSource: DataSource,
  {}
  async signUp(data) {
    console.log(data);
  }
}
