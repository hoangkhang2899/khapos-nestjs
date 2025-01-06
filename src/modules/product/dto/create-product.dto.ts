import { PickType } from '@nestjs/swagger';
import { Product } from '../entities/product.entity';
import { IsNotEmpty, IsNumber, IsString, Max, Min } from 'class-validator';

export class CreateProductDto extends PickType(Product, ['name', 'price']) {
  @IsString()
  @IsNotEmpty()
  name: string;

  @Max(2000000000)
  @Min(0)
  @IsNumber()
  price: number;
}
