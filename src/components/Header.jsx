import React from 'react'
import resume from './Files/resume.pdf'
import { CgMonday } from "react-icons/cg";

const Header = () => {
    return (
        <div className='w-full h-12 pt-0.5 pl-1.5 fixed top-0 bg-white flex shadow-md select-none z-50'>
            <a href={resume} download="Sayan's Resume">
                <div className='flex group'>
                    <CgMonday className='text-5xl pb-1 cursor-default' />
                    <span className='font-BioRhyme font-extrabold text-3xl ml-1 pt-1 cursor-default'>Sayan.</span>
                    <span className='font-BioRhyme font-extrabold Dev text-3xl pt-1 group-hover:text-red-500 group-active:text-black duration-150 cursor-default'>dev</span>
                </div>
            </a>
        </div>
    )
}

export default Header