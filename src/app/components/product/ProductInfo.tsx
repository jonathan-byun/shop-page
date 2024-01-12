import { FC } from 'react'
import ListSection from '../ui/ListSection'
import DropdownSection from '../ui/DropdownSection'
import prisma from '@/app/api/prisma/prisma'

interface ProductInfoProps {
    name:string,
    description:string,
    price:number,
    productId:string
}

const includedSample = ['headphones', 'box', 'charger', 'cleaning towel']
const sampleDropdownText = ['zinc', 'flouride', 'water']

const ProductInfo: FC<ProductInfoProps> = async({name,description,price,productId }) => {
    const listSections = await prisma.listSection.findMany({
        where:{
            productId:productId
        }
    })
    const dropdownSections = await prisma.dropdownSection.findMany({
        where:{
            productId:productId
        }
    })
    return (
        <div className='overflow-y-auto max-h-[45rem] w-full no-scrollbar'>
            <div className='flex flex-col w-full pb-10'>
            <div className='w-full border-b-[1px] border-black py-10'>
                <p className='text-5xl font-bold'>{name}</p>
                <p className='my-5'>{description}</p>
                <button className='w-full bg-gray-900 text-white py-5 my-3 hover:bg-blue-200 transition-colors hover:text-black duration-500'>ADD TO BAG | {price}</button>
                <p className='text-xs text-center'>Money-back Guarantee | Free shipping over $30</p>
            </div>
            {listSections.map((section)=>{
                return(
                    <ListSection key={section.id} list={section.listItems} title={section.title}/>
                )
            })}
            {
                dropdownSections.map((section)=>{
                    return(
                        <DropdownSection key={section.id} title={section.title} ordered={section.ordered} dropdownText={section.listItems} title2={section.title2} descriptionList={section.description}/>
                    )
                })
            }
        </div></div>
    )
}

export default ProductInfo