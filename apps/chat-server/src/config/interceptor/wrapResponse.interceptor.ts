import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';

import { Observable, map } from 'rxjs';

@Injectable()
export class WrapResponse implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<any> | Promise<Observable<any>> {
    // controller 실행 전
    console.log('Before...');

    // controller 실행
    return next.handle().pipe(
      map((data) => {
        return { data, code: 'success' };
      }),
    );
  }
}

//{data, code: 'success'}
