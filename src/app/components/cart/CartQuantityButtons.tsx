import { FC } from 'react'

interface CartQuantityButtonsProps {
  
}

const CartQuantityButtons: FC<CartQuantityButtonsProps> = () => {
  async function increment() {

  }

async function decrement() {
  
}

  return <div className='flex w-24 border-gray-300 border-[1px] mt-4 justify-between items-center'>
  <button className=' hover:bg-gray-200' onClick={()=>{decrement}}>
      <div className='hover:-translate-y-1 px-3 py-1'>-</div>
  </button>
  <p >2</p>
  <button className=' hover:bg-gray-200' onClick={()=>{increment}}>
      <div className='hover:-translate-y-1 px-3 py-1'>+</div>
  </button>
</div>
}

export default CartQuantityButtons