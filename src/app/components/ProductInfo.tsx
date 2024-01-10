import { FC } from 'react'
import ListSection from './ui/ListSection'
import DropdownSection from './ui/DropdownSection'

interface ProductInfoProps {

}

const includedSample = ['headphones', 'box', 'charger', 'cleaning towel']

const ProductInfo: FC<ProductInfoProps> = ({ }) => {
    return <div className='flex flex-col w-full overflow-hidden h-screen ml-7'>
        <div className='w-full border-b-[1px] border-black py-10'>
            <p className='text-5xl font-bold'>Name</p>
            <p className='my-5'>Description oasdufhaohfoasehfoasheoiashfioasheofiahseiofhaseiohasoefhio</p>
            <p>Option: option type</p>
            <button className='w-full bg-gray-900 text-white py-5 my-3 hover:bg-blue-200 transition-colors hover:text-black duration-500'>ADD TO BAG | Price</button>
            <p className='text-xs text-center'>Money-back Guarantee | Free shipping over $30</p>
        </div>
        <ListSection list={includedSample} title='INCLUDED' />
        <ListSection list={includedSample} title='INCLUDED' />
        <DropdownSection />

    </div>
}

export default ProductInfo