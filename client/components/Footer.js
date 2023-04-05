import Image from 'next/image'
import React from 'react'
import { AiFillFacebook, AiFillLinkedin, AiOutlineGithub, AiOutlineTwitter } from 'react-icons/ai'

const Footer = () => {
    return (
        <div>
            <footer class="text-gray-600 body-font bg-black ">
                <div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col justify-around">
                    <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                        <Image height={9} width={35} src='/logo.jpg' alt="logo" />
                        <span class="ml-3 text-xl text-white">Niraj Chaurasiya</span>
                    </a>
                    <p class="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2023 —
                        <a href='https://nirajchaurasiya.netlify.app' class="text-gray-600 ml-1" rel="noopener noreferrer" ><span className='text-indigo-500 border-b'>My Site</span></a>
                    </p>
                    <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                        <a href='https://twitter.com/LoveForRobotics'><AiOutlineTwitter color='white' className='mx-3 hover:text-white hover:bg-slate-500 cursor-pointer' style={{ fontSize: "20px", color: "red" }} /></a>
                        <a href="https://www.facebook.com/niraj.chaurasiya0/" ><AiFillFacebook color='white' className='mx-3 hover:text-white hover:bg-slate-500 cursor-pointer' style={{ fontSize: "20px", color: "blue" }} /></a>
                        <a href="https://github.com/nirajkumar1234" ><AiOutlineGithub color='white' className='mx-3 hover:text-white hover:bg-slate-500 cursor-pointer' style={{ fontSize: "20px", color: "green" }} /></a>
                        <a href="https://www.linkedin.com/in/niraj-chaurasiya-094469213/"><AiFillLinkedin color='white' className='mx-3 hover:text-white hover:bg-slate-500 cursor-pointer' style={{ fontSize: "20px", color: "blue" }} /></a>
                    </span>

                </div>
            </footer>
        </div>
    )
}

export default Footer
