'use client'
import { signIn, signOut } from 'next-auth/react'
import { FC } from 'react'

interface UserOptionsProps {
  
}

const UserOptions: FC<UserOptionsProps> = ({}) => {
  return <div className='text-white text-sm'>
    <button onClick={()=>signIn()}>Sign In</button>
    <button onClick={()=>signOut()}>Sign Out</button>
  </div>
}

export default UserOptions