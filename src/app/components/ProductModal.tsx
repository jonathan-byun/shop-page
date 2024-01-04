'use client'

import { FC, ReactNode } from 'react'

interface ProductModalProps {
    children: ReactNode
}

const ProductModal: FC<ProductModalProps> = ({ children }) => {
    return (
        <>
            <div className='basis-[32%] flex flex-col'>
                <button onClick={()=>{}}>
                    {children}
                </button>
            </div>
            <div>

            </div>
        </>

    )
}

export default ProductModal