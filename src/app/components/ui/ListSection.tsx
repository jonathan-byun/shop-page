import { FC } from 'react'

interface ListSectionProps {
  list:string[],
  title:string
}

const ListSection: FC<ListSectionProps> = ({list,title}) => {
  return <div className='py-5 border-b-[1px] border-black'>
  <p className='text-lg my-3'>{title}</p>
  <div className='flex flex-wrap'>
      {list.map((item) => {
          return (
              <p key={item} className='basis-1/2 text-sm'>{item}</p>
          )
      })}
  </div>
</div>
}

export default ListSection