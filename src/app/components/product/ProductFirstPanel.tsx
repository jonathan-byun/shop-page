import Image from 'next/image'
import { FC } from 'react'
import { Instrument_Serif } from 'next/font/google'
import prisma from '@/app/api/prisma/prisma'

interface ProductFirstPanelProps {
    productId:string
}

const ISerif = Instrument_Serif({weight:'400', subsets:['latin']})

const ProductFirstPanel: FC<ProductFirstPanelProps> = async({ productId }) => {
    const panelDetails = await prisma.textAndImagePanel.findFirst({
        where:{
            productId:productId
        }
    })
    return panelDetails && <div className={`flex ${ISerif.className}`}>
        <div className='basis-2/5'>
            <h2 className='text-6xl my-5'>{panelDetails.title}</h2>
            {panelDetails.listItems.map((description, i) => {
                return (
                    <div key={description} className='flex gap-20 items-start my-5 px-5'>
                        {panelDetails.ordered &&
                            <div className='text-sm rounded-full border-[1px] px-[0.65rem] py-1 border-black'>{i + 1}</div>
                        }
                        <p className='text-3xl'>{description}</p>
                    </div>
                )
            })}
        </div>
        <div className='basis-3/5 h-[30rem] relative overflow-hidden'>
            <Image src={panelDetails.imageUrl} fill={true} sizes='33vw' alt='' className='object-cover'/>
        </div>
    </div>
    
}

export default ProductFirstPanel