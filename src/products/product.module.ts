import { Module } from "@nestjs/common";
import { ProductController } from "./product.controller";
import { ProductService } from "./product.service";
import { UserService } from "../user/user.service";

@Module({
    imports: [UserService],
    controllers: [ProductController],
    providers: [ProductService, UserService]
})
export class ProductModule {

}