'use client'

import { FC, useRef, useState } from 'react'
import { IoMdArrowDropdown } from "react-icons/io";
import { CSSTransition } from 'react-transition-group';

interface DropdownSectionProps {

}

const DropdownSection: FC<DropdownSectionProps> = ({ }) => {
    const [expanded, setExpanded] = useState(false)

    function handleClick() {
        setExpanded(!expanded)
        console.log(expanded)
    }
    return (
        <div className='border-b-[1px] border-black w-full'>
            <button onClick={() => handleClick()} className='w-full flex justify-between items-center py-3'>
                <p>SUSTAINABLE MATERIALS</p>
                <IoMdArrowDropdown />
            </button>

        </div>
    )

}

export default DropdownSection