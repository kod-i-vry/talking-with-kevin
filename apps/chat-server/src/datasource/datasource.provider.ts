import { Injectable, Inject } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import * as entities from '../entity';

@Injectable()
export class DatasourceService {
  constructor(private configService: ConfigService) {}

  async getDataSource() {
    const dataSource = new DataSource({
      type: 'mysql',
      host: this.configService.get<string>('DB_HOST'),
      port: this.configService.get<number>('DB_PORT'),
      username: this.configService.get<string>('DB_USER'),
      password: this.configService.get<string>('DB_PASSWORD'),
      database: this.configService.get<string>('DB_NAME'),
      entities: Object.values(entities),
    });

    return dataSource;
  }

  async dataSourceInit() {
    const dataSource = await this.getDataSource();
    await dataSource.initialize();
    console.log('database connected');
  }

  async syncDatabase() {
    const dataSource = await this.getDataSource();

    await dataSource.initialize();
    await dataSource.synchronize();
    await dataSource.destroy();
    console.log('database synced');
  }
}

// import { DataSource } from 'typeorm';
// // import { Config } from '../config';
// import { ConfigService } from '@nestjs/config';
// import * as entities from '../entity';

// export const datasourceProvider = [
//   {
//     provide: 'DATA_SOURCE',
//     useFactory: async () => {
//       const configService = new ConfigService();

//       console.log('@@@@@@@1', configService.get<string>('DB_HOST'));
//       const dataSource = new DataSource({
//         type: 'mysql',
//         host: configService.get<string>('DB_HOST'),
//         port: configService.get<number>('DB_PORT'),
//         username: configService.get<string>('DB_USER'),
//         password: configService.get<string>('DB_PASSWORD'),
//         database: configService.get<string>('DB_NAME'),
//         entities: Object.values(entities),
//       });

//       return dataSource.initialize();
//     },
//   },
// ];
