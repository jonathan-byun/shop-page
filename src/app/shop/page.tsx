import { FC } from 'react'

interface pageProps {
  
}

const options=[
    'HEADPHONES',
    'EARBUDS',
    'SPEAKERS',
    'GAMING'
]

const page: FC<pageProps> = ({}) => {
  return <div>
    <div className='flex flex-col items-center mt-12'>
        <p className='text-6xl font-bold my-10'>SHOP ALL</p>
        <div className='flex'>
            {options.map((option)=>{
                return(
                    <button key={option}>{option}</button>
                )
            })}
        </div>
    </div>
  </div>
}

export default page