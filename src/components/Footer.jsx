import React from 'react'

const Footer = () => {
  return (
    <div className='h-32  z-50 bg-gray-800 flex items-center '>
        <p className='text-white ml-64 font-bold text-xl font-Poppins'>Copyright © {new Date().getFullYear()}. All rights are reserved</p>
    </div>
  )
}

export default Footer