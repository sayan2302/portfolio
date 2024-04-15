import React from 'react'
import resume from './Files/resume.pdf'
import { CgMonday } from "react-icons/cg";

const Header = () => {
    return (
        <div className='flex items-center justify-between w-full h-14 pt-0.5 pl-1.5 fixed top-0 bg-white shadow-md select-none z-50'>
            <div>
                <a href={resume} download="Sayan's Resume">
                    <div className='flex group'>
                        <CgMonday className='text-5xl pb-1 cursor-default' />
                        <span className='font-Poppins font-extrabold text-3xl ml-1 pt-1 cursor-default'>Sayan.</span>
                        <span className='font-Poppins font-extrabold Dev text-3xl pt-1 group-hover:text-red-500 group-active:text-black duration-150 cursor-default'>dev</span>
                    </div>
                </a>
            </div>
            <div className='flex '>
                <a href="#intro"><p className="mx-4 text-lg hover:text-blue-400 active:text-black font-bold font-Poppins ">Home</p></a>
                <a href="#about"><p className="mx-4 text-lg hover:text-blue-400 active:text-black font-bold font-Poppins ">About</p></a>
                <a href="#project"><p className="mx-4 text-lg hover:text-blue-400 active:text-black font-bold font-Poppins ">Projects</p></a>
                <a href="#contact"><p className="mx-4 text-lg hover:text-blue-400 active:text-black font-bold font-Poppins ">Contact</p></a>
            </div>

        </div>
    )
}

export default Header