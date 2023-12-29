import { FC } from 'react'
import Appbar from '../components/Appbar'

interface pageProps {
  
}

const page: FC<pageProps> = ({}) => {
  return <div className='bg-black'>
  <Appbar />
  </div>
}

export default page