import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ProductModule } from './modules/product/product.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dbOptions } from './constants/typeorm/db-datasource';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({ ...dbOptions, autoLoadEntities: true }),
    ProductModule,
  ],
})
export class AppModule {}
