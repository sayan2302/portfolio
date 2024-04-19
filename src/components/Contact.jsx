import React from 'react'
import { FaMapLocationDot } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";


const About = () => {
  return (
    <div className='font-Poppins w-full h-[68vh] mt-[15vh] mb-8  '>
      <p className=' font-extrabold text-[#34b5ff]'>CONTACT</p>
      <p className=' text-gray-600 font-bold text-4xl mt-16'>Don't be shy! Hit me up! 👇</p>
      <div className='flex justify-around gap-20 mt-28 cursor-default'>
        {/* Location */}
        <div className="w-1/3 justify-center flex items-center group rounded-xl p-2">
          <FaMapLocationDot className='text-4xl text-[#4f9efc] group-hover:text-red-400 duration-150' />
          <div className='ml-3'>
            <p className="text-xl font-bold">Location</p>
            <p className="text-gray-600">Bangalore, India</p>
          </div>
        </div>
        {/* Email */}
        <div className="w-1/3 justify-center flex items-center group rounded-xl p-2">
          <IoIosMail className='text-5xl text-[#4f9efc] group-hover:text-red-400 duration-150' />
          <div className='ml-3'>
            <p className="text-xl font-bold">Mail</p>
            <p className="text-gray-600">sayan.pro.id@gmail.com</p>
          </div>
        </div>
        {/* Phone */}
        <div className="w-1/3 justify-center flex items-center group rounded-xl p-2">
          <FaPhoneAlt className='text-3xl text-[#4f9efc] group-hover:text-red-400 duration-150' />
          <div className='ml-3'>
            <p className="text-xl font-bold">Phone</p>
            <p className="text-gray-600">+91-8837657497</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About