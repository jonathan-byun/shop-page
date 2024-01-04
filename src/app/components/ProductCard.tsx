import { FC } from 'react'
import { Product } from '../api/auth/[...nextauth]/lib/types/db'
import ProductModal from './ProductModal'

interface ProductCardProps {
    product: Product
}

const ProductCard: FC<ProductCardProps> = ({ product }) => {
    return (
        <ProductModal>
                <div className='overflow-hidden'>
                    <img src={product.url} alt="product img" className='object-cover hover:scale-110 transition-transform duration-500' />
                </div>
                <div className='flex items-center flex-col'>
                    <p className='font-bold'>{product.name}</p>
                    <p>${Number(product.price)}</p>
                </div>
        </ProductModal>

    )
}

export default ProductCard