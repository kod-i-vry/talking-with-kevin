import { Global, Module } from '@nestjs/common';
// import { datasourceProvider } from './datasource.provider';
import { DatasourceService } from './datasource.provider';

@Global()
@Module({
  providers: [DatasourceService],
  exports: [DatasourceService],
})
export class DatasourceModule {}
