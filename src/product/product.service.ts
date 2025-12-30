import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductService {


  products:CreateProductDto[]=[];

  create(createProductDto: CreateProductDto) {
    this.products.push(createProductDto)
    return createProductDto;
  }

  findAll() {
    return this.products;
  }

  findOne(id: number) {
    const product=this.products.find(u => u.id===id)
    if(!product){
      throw new NotFoundException("Not found")
    }

    return product
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    const product=this.products.find(u => u.id===id)
    const productIndex = this.products.findIndex(u => u.id === id);
    if(!product){
      throw new NotFoundException("Not found")
    }
    const updatedProduct={
      ...this.products[productIndex],
      ...updateProductDto,
      id
    }
    this.products[productIndex]=updatedProduct
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}


// const a = { name: 'Phone', price: 100 };
// const b = { ...a };
//b = { name: 'Phone', price: 100 }

// const oldProduct = { id: 1, name: 'Phone' };
// const updateDto  = { name: 'iPhone' };

// const updatedProduct = {
//   ...oldProduct,
//   ...updateDto,
// };


