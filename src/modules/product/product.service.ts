import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  create(dto: CreateProductDto): Promise<Product> {
    const product = this.productRepository.save({
      ...dto,
      id: undefined,
      siteId: 'DOGI',
    });
    return product;
  }

  findAll() {
    const products = this.productRepository.find();
    return products;
  }
}
