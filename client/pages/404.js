
import Link from 'next/link'
import React from 'react'
import Footer from '../components/Footer'
import Gotop from '../components/GOtop';
import SEO from '@bradgarropy/next-seo'
const ErrorPage = () => {
    return (
        <>
            <SEO
                title="404 - Niraj Chaurasiya"
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
            <div className='mt-44 mb-96 text-center' >
                <h1 className='text-white animate-bounce' style={{ fontSize: "60px", color: "red" }}>404</h1>
                <h3 className='text-white mt-3 animate-bounce' style={{ fontSize: "30px" }}>Opps !! This page could not be found on this server.</h3>
                <center>
                    <Link href='/'>
                        <button className='bg-indigo-300 p-4 mt-5 rounded-lg hover:bg-indigo-500 active:bg-indigo-700 ring-3 ring-white animate-bounce '>GOTO HOME</button>
                    </Link>
                </center>

            </div>
            <Footer />
            <Gotop />
        </>
    )
}

export default ErrorPage