import { ConfigModule } from '@nestjs/config';
ConfigModule.forRoot();
import { DataSource, DataSourceOptions } from 'typeorm';

export const dbOptions: DataSourceOptions = {
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: +process.env.POSTGRES_PORT,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
};

const dbDatasource = new DataSource({
  ...dbOptions,
  migrations: ['src/migrations/*.ts'],
  entities: ['src/modules/**/entities/*.entity.ts'],
});

export default dbDatasource;
