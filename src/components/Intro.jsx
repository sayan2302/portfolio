import React, { useState } from 'react'
import { TbBrandLinkedin } from "react-icons/tb";
import { TbBrandGithub } from "react-icons/tb";
import { LiaHackerrank } from "react-icons/lia";
import { FaMedium } from "react-icons/fa6";
import { Tooltip } from '@mui/material';
import { CgDetailsMore } from "react-icons/cg";
import Modal from 'react-modal';
import { IoCloseCircleSharp } from 'react-icons/io5';

const skills = {
  "technical": ['Python', 'C++', 'JavaScript', 'Node.js', 'HTML', 'CSS', 'Bash', 'AWS', 'TypeScript', 'REST Api'],
  "frameworks": ['React', 'Material UI', 'React Native', 'Express', 'Expo', 'Redux', 'Tailwind'],
  "databases": ['MySQL', 'MongoDB', 'PostgreSQL', 'OracleDb', 'SQLite3'],
  "version": ['GIT', 'GitLab', 'BitBucket']
}

const Intro = () => {
  const [modalOpen, setModalOpen] = useState(false)

  const openModal = () => {
    setModalOpen(true)
  }
  const closeModal = () => {
    setModalOpen(false)
  }

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
              <div><span className='text-6xl group-hover:text-red-400 duration-150 font-extrabold font-Poppins'>MERN </span><span className='text-6xl font-extrabold font-Poppins'>Developer </span></div>
            </div>
            <p className='w-5/6 mt-7 text-[#85929E] text-xl'>Hi, I'm Sayan Pramanick. A passionate Full-Stack Developer based in Bengaluru, India. </p>
          </div>
          {/* links */}
          <div className='h-1/6 w-full  flex flex-row-reverse'>
            <Tooltip title="hello"><div><LiaHackerrank className='stroke-1 text-3xl m-2 hover:text-[#10aa50]' /></div></Tooltip>
            
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
          <p className='m-auto font-Poppins text-2xl'>Skills |</p>
        </div>
        {/* skill icons */}
        <div className='h-full w-5/6 max-w-[850px] flex '>
          <div className="h-full w-2/3 flex flex-col p-5 relative justify-center">
            <Tooltip title="" arrow ><img className='p-3 max-h-[72px] hover:scale-105 duration-200' src="https://skillicons.dev/icons?i=html,css,js,mongodb,express,react,nodejs" alt="" /></Tooltip>
          </div>
          <div className="h-full w-1/3 flex p-5 relative items-center justify-center ">
            <button className="px-4 py-2 flex items-center border border-blue-500 rounded-lg text-blue-500 hover:bg-blue-500 hover:text-white transition duration-200 ease-in-out" onClick={openModal}>
              <p>View all &nbsp;</p>
              <CgDetailsMore />
            </button>
          </div>
          {/* Modal */}
          <Modal
            isOpen={modalOpen}
            onRequestClose={closeModal}
            contentLabel="All Skills"
            ariaHideApp={false}
            style={{
              overlay: {
                zIndex: '9999',
              },
              content: {
                width: 'fit-content',
                maxHeight: 'auto',
              },
            }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg"
            overlayClassName="fixed inset-0 bg-black bg-opacity-50"
          >
            <button className="absolute -top-3 -right-3 m-4 text-[#e81123] text-3xl" onClick={closeModal}><IoCloseCircleSharp /></button>
            <div className="rounded-lg h-[70vh] bg-gray-50 w-[70vw] flex items-center cursor-default">
              <table className="w-full h-full rounded-lg flex items-center select-none">
                <tbody className='h-[80%] w-full flex flex-col justify-around'>
                  <tr  className='flex items-center'>
                    <td className="w-1/6  px-4 py-2 font-bold text-lg">Technical :</td>
                    <td className="w-5/6  px-4 py-2 ">
                      <div className='flex'>
                        {skills.technical.map((item, key) => {
                          return (
                            <span key={key} className='mx-1 px-2 border border-gray-600 rounded-full bg-gray-600 text-white font-semibold hover:bg-blue-500 hover:border-blue-500 duration-100'>{item}</span>
                          )
                        })
                        }
                      </div>
                    </td>
                  </tr>
                  <tr className='flex items-center'>
                    <td className="w-1/6 px-4 py-2 font-bold text-lg">Frameworks & Libraries :</td>
                    <td className="w-5/6 px-4 py-2 ">
                      <div className='flex'>
                        {skills.frameworks.map((item, key) => {
                          return (
                            <span key={key} className='mx-1 px-2 border border-gray-600 rounded-full bg-gray-600 text-white font-semibold hover:bg-blue-500 hover:border-blue-500 duration-100'>{item}</span>
                          )
                        })
                        }
                      </div>
                    </td>
                  </tr>
                  <tr className='flex items-center'>
                    <td className="w-1/6 px-4 py-2 font-bold text-lg">RDBMS :</td>
                    <td className="w-5/6 px-4 py-2 ">
                      <div className='flex'>
                        {skills.databases.map((item, key) => {
                          return (
                            <span key={key} className='mx-1 px-2 border border-gray-600 rounded-full bg-gray-600 text-white font-semibold hover:bg-blue-500 hover:border-blue-500 duration-100'>{item}</span>
                          )
                        })
                        }
                      </div></td>
                  </tr>
                  <tr className='flex items-center'>
                    <td className="w-1/6 px-4 py-2 font-bold text-lg">Version Control :</td>
                    <td className="w-5/6 px-4 py-2 ">
                      <div className='flex'>
                        {skills.version.map((item, key) => {
                          return (
                            <span key={key} className='mx-1 px-2 border border-gray-600 rounded-full bg-gray-600 text-white font-semibold hover:bg-blue-500 hover:border-blue-500 duration-100'>{item}</span>
                          )
                        })
                        }
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Modal>


        </div>
      </div>
    </div>
  )
}

export default Intro