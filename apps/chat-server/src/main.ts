import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DatasourceModule } from './datasource/datasource.module';
import { DatasourceService } from './datasource/datasource.provider';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as cookieParser from 'cookie-parser';
import { Interceptor } from './config';

declare const module: any;

async function bootstrap() {
  // const datasourceModule = await NestFactory.create(DatasourceModule);

  // await datasourceModule.init();

  const app = await NestFactory.create(AppModule);

  const dataSourceService = app.get(DatasourceService);

  await dataSourceService.dataSourceInit();

  const configService = app.get(ConfigService);

  const port = configService.get<number>('CHAT_SERVER_PORT');

  const documentConfig = new DocumentBuilder()
    .setTitle('chat-server-api')
    .setDescription('chat-server api document')
    .setVersion('1.0')
    .addCookieAuth('connect.sid')
    .build();

  const document = SwaggerModule.createDocument(app, documentConfig);
  SwaggerModule.setup('api', app, document);

  app.use(cookieParser());
  app.useGlobalInterceptors(new Interceptor.WrapResponse());

  await app.listen(port);

  console.log(`Application is running on port ${port}`);

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}

bootstrap();
