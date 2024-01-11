import { FC } from 'react'
import ListSection from '../ui/ListSection'
import DropdownSection from '../ui/DropdownSection'

interface ProductInfoProps {

}

const includedSample = ['headphones', 'box', 'charger', 'cleaning towel']
const sampleDropdownText=['zinc', 'flouride', 'water']

const ProductInfo: FC<ProductInfoProps> = ({ }) => {
    return <div className='flex flex-col w-full ml-7 pb-10'>
        <div className='w-full border-b-[1px] border-black py-10'>
            <p className='text-5xl font-bold'>Name</p>
            <p className='my-5'>Description oasdufhaohfoasehfoasheoiashfioasheofiahseiofhaseiohasoefhio</p>
            <p>Option: option type</p>
            <button className='w-full bg-gray-900 text-white py-5 my-3 hover:bg-blue-200 transition-colors hover:text-black duration-500'>ADD TO BAG | Price</button>
            <p className='text-xs text-center'>Money-back Guarantee | Free shipping over $30</p>
        </div>
        <ListSection list={includedSample} title='INCLUDED' />
        <ListSection list={includedSample} title='INCLUDED' />
        <DropdownSection dropdownText={sampleDropdownText} ordered={true} title='SUSTAINABLE MATERIALS' title2={null} descriptionList={null}/>
        <DropdownSection dropdownText={sampleDropdownText} ordered={false} title='DOES NOT CONTAIN' title2={'REMOVED'} descriptionList={'dhf, sdhfih, ishfei, hsfui, sfueh'}/>
        
        

    </div>
}

export default ProductInfo