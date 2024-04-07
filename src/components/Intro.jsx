import React from 'react'
import { TbBrandLinkedin } from "react-icons/tb";
import { TbBrandGithub } from "react-icons/tb";
import { LiaHackerrank } from "react-icons/lia";
import { FaMedium } from "react-icons/fa6";

const Intro = () => {
  return (
    <div className='font-Poppins w-full h-[85vh] border border-red-500'>
      {/* top half */}
      <div className='h-2/3 flex'>
        {/* Photo */}
        <div className='h-full w-1/3 bg-gray-300'></div>
        {/* description container */}
        <div className='h-full w-2/3 '>
          {/* description */}
          <div className='h-5/6 w-full p-3 flex flex-col justify-center'>
            <p className='text-5xl font-extrabold font-BioRhyme'>Full Stack Developer</p>
            <p className='w-5/6 mt-7 text-[#566573] text-lg'>Hi, I'm Sayan Pramanick. A passionate Full-Stack Developer based in Bengaluru, India. </p>
          </div>
          {/* links */}
          <div className='h-1/6 w-full  flex flex-row-reverse'>
            <LiaHackerrank className='stroke-1 text-3xl m-2 hover:text-[#08eb69]' />
            <FaMedium className='text-3xl m-2 hover:text-[#D35400]' />
            <TbBrandGithub className='text-3xl m-2 hover:text-[#8E44AD]' />
            <TbBrandLinkedin className='text-3xl m-2 hover:text-[#0a66c2]' />
          </div>
        </div>
      </div>

      {/* bottom half */}
      <div className='h-1/3 flex'>
        {/* <p> skills */}
        <div className='h-full w-1/6 flex'>
          <p className='m-auto font-BioRhyme text-2xl'>Skills|</p>
        </div>
        {/* skill icons */}
        <div className='h-full w-5/6 flex'>
          <div className="h-full w-1/3 flex flex-col p-5 relative justify-center">
            <img className='p-3 hover:scale-105 duration-150' src="https://skillicons.dev/icons?i=js,ts,python,cpp&theme=light" alt="" />
            <img className='p-3 hover:scale-105 duration-150' src="https://skillicons.dev/icons?i=html,css,sass,redux" alt="" />
          </div>
          <div className="h-full w-1/3 flex flex-col p-5 relative justify-center">
            <img className='p-3 hover:scale-105 duration-150' src="https://skillicons.dev/icons?i=mongodb,express,react,nodejs" alt="" />
            <img className='p-3 hover:scale-105 duration-150' src="https://skillicons.dev/icons?i=git,gitlab,bitbucket,postman&theme=light" alt="" />
          </div>
          <div className="h-full w-1/3 flex flex-col p-5 relative justify-center">
            <img className='p-3 hover:scale-105 duration-150' src="https://skillicons.dev/icons?i=materialui,tailwind,bootstrap,d3" alt="" />
            <img className='p-3 hover:scale-105 duration-150' src="https://skillicons.dev/icons?i=mysql,sqlite,postgres,aws" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Intro