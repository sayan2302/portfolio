import React from 'react'
import { FaGithub } from "react-icons/fa";
import { MdLiveTv } from "react-icons/md";
import ImgSplitwise from '../assets/splitwise.png'
import Carbuddy from '../assets/carbuddy.png'

const Project = () => {

    const projects = {
        splitwise: {
            img: ImgSplitwise,
            name: "SPLITWISE",
            desciption: "Lorem ipsum dolor sit amet consectetur adipisicing elit.In, reprehenderit tempore voluptas aspernatur porro possimusratione sed quaerat neque eaque quo dicta voluptate iste error,dolores ab provident ut.",
            skills: ['react','js','css'],
            github: "#project",
            demo: "#project"
        },
        carbuddy: {
            img: Carbuddy,
            name: "CAR-BUDDY",
            desciption: "Lorem ipsum dolor sit amet consectetur adipisicing elit.In, reprehenderit tempore voluptas aspernatur porro possimusratione sed quaerat neque eaque quo dicta voluptate iste error,dolores ab provident ut.",
            skills: ['js','css'],
            github: "#project",
            demo: "#project"
        }
    }

    return (
        <div className='font-Poppins w-full pt-20 '>
            <p className=' font-extrabold text-[#34b5ff]'>PROJECTS</p>
            <p className=' font-extrabold text-gray-600 font-Manrope mb-10'>Each project is a unique piece of development</p>

            {/* Project */}
            {Object.keys(projects).map((project, key) => {
                return (
                    <div className={`flex  min-w-full h-[400px] mb-28 hover:bg-gray-50 justify-center rounded-xl duration-150  ${key%2?"flex-row-reverse ":"flex-row"}`}>
                        {/* Project Image */}
                        <div className={`w-7/12 p-2 flex ${key%2?"justify-start":"justify-end"}`}>
                            <img src={projects[project].img} className='rounded-xl h-full object-contain shadow-lg' alt="" />
                        </div>
                        {/* Project Details */}
                        <div className="w-5/12 flex flex-col">
                            {/* Project Name */}
                            <div className="h-1/6  flex items-center justify-center">
                                <p className='text-2xl font-semibold font-Poppins'>{projects[project].name}</p>
                            </div>
                            {/* Project Description */}
                            <div className="h-3/6 ">
                                <p className={`text-gray-500 text-justify ${key%2?"pr-12 pl-2":"pl-12 pr-2"}`}>{projects[project].desciption}</p>
                            </div>
                            {/* Project Skills */}
                            <div className="h-1/6  flex items-center justify-center">
                                {projects[project].skills.map((skill, key) => {
                                    return (
                                        <img key={key} className='max-h-[30px] hover:scale-105 duration-150 mx-3' src={`https://skillicons.dev/icons?i=${skill}`} alt="" />
                                    )
                                })}
                            </div>
                            {/* Project Links */}
                            <div className="flex justify-center items-center h-1/6 ">
                                <a href={projects[project].github} >
                                    <div className='mx-1 group cursor-pointer hover:scale-105 duration-150'>
                                        <FaGithub className='text-3xl group-hover:text-purple-600' />
                                        <p className='text-xs text-gray-50 group-hover:text-gray-300 duration-200'>Code</p>
                                    </div>
                                </a>
                                <a href={projects[project].demo} >
                                    <div className='mx-1 group cursor-pointer hover:scale-105 duration-150'>
                                        <MdLiveTv className='text-3xl group-hover:text-red-600' />
                                        <p className='text-xs text-gray-50 group-hover:text-gray-300 duration-200'>Demo</p>
                                    </div>
                                </a>
                            </div>

                        </div>
                    </div>
                )
            })
            }



        </div>
    )
}

export default Project