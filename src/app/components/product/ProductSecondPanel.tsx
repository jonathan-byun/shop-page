import prisma from '@/app/api/prisma/prisma';
import Image from 'next/image'
import { FC } from 'react'
import { FaPlus, FaMinus } from "react-icons/fa";

interface ProductSecondPanelProps {
    productId:string
}

const ProductSecondPanel: FC<ProductSecondPanelProps> = async({productId }) => {
    const panelDetails=await prisma.fadingImageCard.findMany({
        take:3,
        where:{
            productId:productId
        }
    })
    return <>
        {panelDetails.map((panel) => {
            return (
                <div className='basis-[30%] mx-auto relative group h-[30rem] overflow-hidden' key={panel.caption}>
                    <Image src={panel.imageUrl} fill={true} sizes='25vw' alt='' className='object-cover group-hover:blur-sm transition-all duration-500' />
                    <div className='absolute w-full h-full bg-black opacity-0 group-hover:opacity-55 transition-all duration-500'></div>
                    <div className='absolute w-full h-full flex flex-col justify-between'>
                        <p className='text-white m-5 opacity-0 group-hover:opacity-100 transition-opacity duration-500'>
                            {panel.description}
                        </p>
                        <div className=' m-5 flex items-center bg-white bg-opacity-80 py-2 px-2 text-xl border-[1px] border-black group-hover:bg-opacity-0 group-hover:border-transparent transition-all duration-500'>
                            <div className='absolute opacity-100 group-hover:opacity-0 transition-opacity duration-500'>
                                <FaPlus />
                            </div>
                            <div className='absolute text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500'>
                                <FaMinus />
                            </div>
                            <div className='ml-8 group-hover:text-white transition-colors duration-500'>
                                {panel.caption}
                            </div>

                        </div>
                    </div>

                </div>
            )
        })}
    </>
}

export default ProductSecondPanel