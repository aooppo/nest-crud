import { Controller, Get, Post, Body, Patch, Param, Delete } from "@nestjs/common";
import { ProductService } from "./product.service";
import { Product } from "./product.model";

@Controller('products')
export class ProductController {
    constructor(private readonly productService: ProductService) {
    }

    @Post()
    add(
        @Body("title") productTitle: string,
        @Body("desc") desc: string,
        @Body('price') price: number
    ): { id: string } {
        const id = this.productService.addProduct(productTitle, desc, price)
        return { id }
    }

    @Get()
    list() {
        return this.productService.getList()
    }

    @Get(":id")
    getProduct(@Param('id') productId: string) {
        console.log('get product by id', productId)
        return this.productService.getProductById(productId)
    }

    @Patch(":id")
    update(
        @Param('id') id: string,
        @Body("title") title: string,
        @Body("desc") desc: string,
        @Body('price') price: number) {
        this.productService.update(id, title, desc, price)
    }

    @Delete(":id")
    delete(@Param('id') id: string) {
        console.log('delete> ', id)
        this.productService.deleteById(id)
    }

}