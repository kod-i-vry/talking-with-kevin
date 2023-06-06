// // export const config = () => {
// //   return {
// //     port: parseInt(process.env.PORT, 10) || 3000,
// //     database: {
// //       host: process.env.DATABASE_HOST,
// //       port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
// //     },
// //   };
// // };

// import { Inject, Injectable } from '@nestjs/common';
// import { ConfigService } from '@nestjs/config';

// // @Injectable()
// // export class AppConfigService {
// //   constructor(private configService: ConfigService) {}

// //   port = this.configService.get<number>('PORT');
// //   database = {
// //     host: this.configService.get<string>('DB_HOST'),
// //     port: this.configService.get<number>('DB_PORT'),
// //     user: this.configService.get<string>('DB_USER'),
// //     password: this.configService.get<string>('DB_PASSWORD'),
// //     name: this.configService.get<string>('DB_NAME'),
// //   };
// // }

// const configService = new ConfigService();

// export const CHAT_SERVER_PORT = configService.get<number>('CHAT_SERVER_PORT');
// console.log('@@@@@@@@@@@@@@@@', CHAT_SERVER_PORT);
// export const DB_HOST = configService.get<string>('DB_HOST');
// export const DB_PORT = configService.get<number>('DB_PORT');
// export const DB_USER = configService.get<string>('DB_USER');
// export const DB_PASSWORD = configService.get<string>('DB_PASSWORD');
// export const DB_NAME = configService.get<string>('DB_NAME');
