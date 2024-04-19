import React from 'react'
import { TbBrandLinkedin } from "react-icons/tb";
import { TbBrandGithub } from "react-icons/tb";
import { LiaHackerrank } from "react-icons/lia";
import { FaMedium } from "react-icons/fa6";
import { Tooltip } from '@mui/material';

const Intro = () => {
  return (
    <div className='font-Poppins w-full h-[85vh]  mt-20 '>
      {/* top half */}
      <div className='h-2/3 flex'>
        {/* Photo */}
        <div className='h-full w-1/3 bg-gray-300'></div>
        {/* description container */}
        <div className='h-full w-2/3 '>
          {/* description */}
          <div className='h-5/6  w-full p-3 flex flex-col justify-center cursor-default'>
            <div className='group'>
              <p className='text-7xl font-extrabold font-Poppins'>Full Stack</p>
              <div><span className='text-6xl group-hover:text-red-400 duration-200 font-extrabold font-Poppins'>MERN </span><span className='text-6xl font-extrabold font-Poppins'>Developer </span></div>
            </div>
            <p className='w-5/6 mt-7 text-[#85929E] text-xl'>Hi, I'm Sayan Pramanick. A passionate Full-Stack Developer based in Bengaluru, India. </p>
          </div>
          {/* links */}
          <div className='h-1/6 w-full  flex flex-row-reverse'>
            <LiaHackerrank className='stroke-1 text-3xl m-2 hover:text-[#10aa50]' />
            <FaMedium className='text-3xl m-2 hover:text-[#D35400]' />
            <TbBrandGithub className='text-3xl m-2 hover:text-[#9333ea]' />
            <TbBrandLinkedin className='text-3xl m-2 hover:text-[#0a66c2]' />
          </div>
        </div>
      </div>

      {/* bottom half */}
      <div className='h-1/3 flex max-h-[250px] justify-center '>
        {/* <p> skills */}
        <div className='h-full w-1/6 flex'>
          <p className='m-auto font-Poppins text-2xl'>Skills|</p>
        </div>
        {/* skill icons */}
        <div className='h-full w-5/6 max-w-[850px] flex '>
          <div className="h-full w-1/3 flex flex-col p-5 relative justify-center">
            <Tooltip title="JavaScript TypeScript Python C++" arrow placement='top'><img className='p-3 max-h-[72px] hover:scale-105 duration-200' src="https://skillicons.dev/icons?i=js,ts,python,cpp&theme=light" alt="" /></Tooltip>
            <Tooltip title="" arrow ><img className='p-3 max-h-[72px] hover:scale-105 duration-200' src="https://skillicons.dev/icons?i=html,css,sass,redux" alt="" /></Tooltip>
          </div>
          <div className="h-full w-1/3 flex flex-col p-5 relative justify-center">
            <Tooltip title="" arrow ><img className='p-3 max-h-[72px] hover:scale-105 duration-200' src="https://skillicons.dev/icons?i=mongodb,express,react,nodejs" alt="" /></Tooltip>
            <Tooltip title="" arrow ><img className='p-3 max-h-[72px] hover:scale-105 duration-200' src="https://skillicons.dev/icons?i=git,gitlab,bitbucket,postman&theme=light" alt="" /></Tooltip>
          </div>
          <div className="h-full w-1/3 flex flex-col p-5 relative justify-center">
            <Tooltip title="" arrow ><img className='p-3 max-h-[72px] hover:scale-105 duration-200' src="https://skillicons.dev/icons?i=materialui,tailwind,bootstrap,d3" alt="" /></Tooltip>
            <Tooltip title="" arrow ><img className='p-3 max-h-[72px] hover:scale-105 duration-200' src="https://skillicons.dev/icons?i=mysql,sqlite,postgres,aws" alt="" /></Tooltip>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Intro