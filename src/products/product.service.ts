import { Injectable, NotFoundException } from "@nestjs/common";
import { Product } from "./product.model";

@Injectable()
export class ProductService {
    products: Product[] = [
        {
            "id": "0.08730393495292033",
            "title": "xiaomi",
            "description": "mi call",
            "price": 1000
        },
        {
            "id": "0.9490542767812193",
            "title": "iphone",
            "description": "ip call",
            "price": 2000
        },
        {
            "id": "0.9490542767812193",
            "title": "huawei",
            "description": "huawei call",
            "price": 6666
        }
    ];

    update(id: string, title: string, desc: string, price: number) {
        const [product, index] = this.findProduct(id);
        if(title) {
            product.title = title
        }
        if(desc) {
            product.description = desc
        }
        if(price) {
            product.price = price
        }
        this.products[index] = product
    }

    addProduct(title: string, desc: string, price: number): string {
        const id = Math.random().toString()
        const product = new Product(id, title, desc, price);
        this.products.push(product);
        return id;
    }
    private findProduct(id: string): [Product, number] {
        const productIndex = this.products.findIndex((p) => p.id === id)
        const product = this.products[productIndex]
        console.log('find in product by id method> ', id)
        if (!product) {
            throw new NotFoundException(`couldn't found product: ${id}.`)
        }
        return [product, productIndex]
    }
    getProductById(id: string) {
        const [product] = this.findProduct(id)
        return { ...product }
    }

    getList() {
        return [...this.products]
    }

    deleteById(id: string) {
        const [product, index] = this.findProduct(id)
        this.products.splice(index, 1)

    }
}