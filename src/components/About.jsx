import React from 'react'
import aboutImage from './Files/about.png'

const About = () => {
  return (
    <div className='font-Poppins w-full h-[85vh] mt-[15vh] mb-8  flex'>
      <div className="h-1/2 w-5/12  my-auto flex flex-col justify-center">
        <img className='object-contain rounded-xl shadow-md' src={aboutImage} alt="" />
      </div>

      <div className="h-1/2 w-7/12  my-auto pl-[2%] flex flex-col justify-center ">
        <div className="w-full h-1/12 ">
          <p className=' font-extrabold text-[#34b5ff]'>ABOUT ME</p>
        </div>
        <div className="w-full h-11/12 ">
          <p className='text-3xl font-extrabold my-2'>A dedicated Full-stack Developer based in Bangalore, India.</p>
          <p className='text-[#85929E] text-justify'>
            As a Junior Front-End Developer, I possess an impressive
            arsenal of skills in HTML, CSS, JavaScript, React, Tailwind,
            and SCSS. I excel in designing and maintaining responsive
            websites that offer a smooth user experience. My expertise
            lies in crafting dynamic, engaging interfaces through writing
            clean and optimized code and utilizing cutting-edge
            development tools and techniques. I am also a team player
            who thrives in collaborating with cross-functional teams to
            produce outstanding web applications.
          </p>
        </div>


      </div>
    </div>
  )
}

export default About