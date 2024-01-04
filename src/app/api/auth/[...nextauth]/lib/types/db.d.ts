import { Decimal } from "@prisma/client/runtime/library"

interface Product {
    id:string
    name: string
    category:string[]
    quantity: number
    price: Decimal
    url: string
}