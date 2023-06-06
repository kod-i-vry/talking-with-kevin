import { createParamDecorator, ExecutionContext } from '@nestjs/common';

// @User() 데코레이터
export const User = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();

    return request.user;
  },
);
