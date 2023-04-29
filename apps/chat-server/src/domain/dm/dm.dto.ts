import { IsString, IsDefined } from 'class-validator';
import { Transform, Type } from 'class-transformer';

export class PagingDto {
  @IsDefined()
  page: string;

  @IsDefined()
  perPage: string;
}
