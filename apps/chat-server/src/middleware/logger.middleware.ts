import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction, response } from 'express';

@Injectable()
// di : provider 에 등록된것들을 의존성주입해준다.
// 실무에서 nest morgan 미들웨어를 사용하면 된다.
export class LoggerMiddleware implements NestMiddleware {
  // implements : 반드시 use() 메서드를 구현해야 한다. (정확히 타입검사까지 해줌)
  // context : 로그 메시지에 추가할 정보를 지정한다.
  private logger = new Logger('HTTP');

  use(req: Request, res: Response, next: NextFunction) {
    const { ip, method, originalUrl } = req;
    const userAgent = req.get('user-agent') ?? '';

    res.on('finish', () => {
      const { statusCode } = res;
      const contentLength = res.get('content-length');

      this.logger.log(
        `${method} ${originalUrl} ${statusCode} ${contentLength} - ${userAgent} ${ip}`,
      );
    });

    next();
  }
}
