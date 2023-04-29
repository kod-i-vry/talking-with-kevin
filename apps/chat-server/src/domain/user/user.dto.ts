import { IsNumber, IsString } from 'class-validator';

export class SignUpDto {
  @IsString()
  email: string;

  @IsString()
  password: string;

  @IsString()
  nickname: string;
}
