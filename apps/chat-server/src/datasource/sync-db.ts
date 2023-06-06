import 'dotenv/config';
import { DatasourceService } from './datasource.provider';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const configService = new ConfigService();

  const datasourceService = new DatasourceService(configService);
  await datasourceService.syncDatabase();
}

bootstrap();
