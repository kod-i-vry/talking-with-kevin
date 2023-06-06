/* interceptor
 ** controller 실행 전후 특정 동작 할당
 ** 일종의 미들웨어
 */

import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';

import { Observable, map } from 'rxjs';

@Injectable()
export class UndefinedToNullInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<any> | Promise<Observable<any>> {
    // controller 실행 전
    console.log('Before...');

    // controller 실행
    return next.handle().pipe(
      map((data) => {
        data === undefined ? null : data;
      }),
    );
  }
}

//{data, code: 'success'}
