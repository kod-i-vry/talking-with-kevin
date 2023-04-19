import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppConfigService } from './config/config';
import { LoggerMiddleware } from './middleware';
import { UserModule } from './domain/user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    UserModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    ConfigService,
    {
      provide: 'CUSTOM_KEY',
      useValue: 'CUSTOM_VALUE',
    },
  ],
  // {
  //   provide: AppService(고유한 키, injectable일 때 고유한 키로 인식),
  //   useClass: AppService(클래스),
  //   useValue: AppService(값),
  //   useFactory: AppService(함수),
  //   Class, Value, Factory 로 의존성 주입할 값을 지정할 수 있다.
  // },
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
