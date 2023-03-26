
import Image from 'next/image'
import React from 'react'
import { AiOutlineTwitter, AiFillFacebook, AiOutlineGithub, AiFillLinkedin } from 'react-icons/ai'
import Footer from '../components/Footer'
import Gotop from '../components/GOtop';
import SEO from '@bradgarropy/next-seo'
const contact = () => {
    return (
        <>
            <SEO
                title="CONTACT - Niraj Chaurasiya"
                description="Beyond web development, I am also deeply interested in the fields of AI and robotics. I believe that technology has the potential to transform our world in ways we can only imagine, and I am passionate about staying up-to-date with the latest advancements in these areas. From learning about AI and machine learning to exploring the latest trends in robotics, I am always seeking to expand my knowledge and push the boundaries of what is possible."
                keywords={["Niraj", "Niraj Chaurasiya", "Niraj Chaurasiya website", "Nextjs", "Niraj Chaurasia", "Niraj Kumar Chaurasiya", "Niraj Kumar", "Portfolio", "Personal Website"
                ]}
                icon="/logo.jpg"
                themeColor="#000000"
                colorScheme="light"
                facebook={{
                    image: "/logo.jpg",
                    url: "https://nirajchaurasiya.com",
                    type: "website",
                }}
                twitter={{
                    image: "/logo.jpg",
                    site: "https://nirajchaurasiya.com",
                    card: "summary",
                }}
            />
            <center>

                <div className='mt-52 mb-96'>
                    <div className="h2 ">
                        <h3 className='mt-28 text-white' style={{ fontSize: "30px" }}>CONTACT ME AROUND THE WEB</h3>
                        <Image className='mt-10 rounded-full' src="/logo.jpg" width={100} height={100} alt="" />
                    </div>
                    <div className="icon mt-10">
                        <center>
                            <div className="flex flex-row justify-center p-4">
                                <a href='https://twitter.com/LoveForRobotics'><AiOutlineTwitter color='white' className='mx-3 hover:text-white hover:bg-slate-500 cursor-pointer' style={{ fontSize: "35px", color: "red" }} /></a>
                                <a href="https://www.facebook.com/niraj.chaurasiya0/" ><AiFillFacebook color='white' className='mx-3 hover:text-white hover:bg-slate-500 cursor-pointer' style={{ fontSize: "35px", color: "red" }} /></a>
                                <a href="https://github.com/nirajkumar1234" ><AiOutlineGithub color='white' className='mx-3 hover:text-white hover:bg-slate-500 cursor-pointer' style={{ fontSize: "35px", color: "red" }} /></a>
                                <a href="https://www.linkedin.com/in/niraj-chaurasiya-094469213/"><AiFillLinkedin color='white' className='mx-3 hover:text-white hover:bg-slate-500 cursor-pointer' style={{ fontSize: "35px", color: "red" }} /></a>
                            </div>
                        </center>
                    </div>
                </div>
            </center>
            <Footer />
            <Gotop />
        </>
    )
}

export default contact