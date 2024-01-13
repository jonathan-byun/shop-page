import { Cart, ProductInCart } from "@prisma/client";

type CartWithProducts = Cart & {
    products: ProductInCart[]
}