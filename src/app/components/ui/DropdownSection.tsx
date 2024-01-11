'use client'

import { FC, useState } from 'react'
import { IoMdArrowDropdown } from "react-icons/io";


interface DropdownSectionProps {
    dropdownText: string[],
    title: string,
    title2: string | null,
    descriptionList: string | null,
    ordered: boolean
}

const DropdownSection: FC<DropdownSectionProps> = ({ dropdownText, title, title2, descriptionList, ordered }) => {
    const [expanded, setExpanded] = useState(false)

    function handleClick() {
        setExpanded(!expanded)
        console.log(expanded)
    }
    return (
        <div className={'border-b-[1px] border-black w-full overscroll-none overflow-y-hidden transition-all duration-500 ' + (expanded ? 'max-h-60' : 'max-h-11')}>
            <button onClick={() => handleClick()} className='w-full flex justify-between items-center py-3'>
                <p>{title}</p>
                <IoMdArrowDropdown />
            </button>
            {descriptionList && <p className='mb-5 text-sm'>{descriptionList}</p>}
            {title2 && <p className='my-2'>{title2}</p>}
            <div className={ordered ? '' : 'flex flex-wrap justify-between'}>
             {dropdownText.map((text, i) => {
                return (
                    <p className='text-sm basis-1/2' key={text}>{ ordered ? i + 1 +'.' : 'X'} {text}</p>
                )
            })}   
            </div>
            
        </div>
    )

}

export default DropdownSection