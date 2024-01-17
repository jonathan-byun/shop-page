import { Cart, Product, ProductInCart } from "@prisma/client";

type CartWithProducts = Cart & {
    products: ProductInCart[]
}