
import Image from 'next/image'
import React from 'react'
import Footer from '../components/Footer'
import Gotop from '../components/GOtop'
import SEO from '@bradgarropy/next-seo'
const project = () => {
    return (

        <>
            <SEO
                title="WINDOWS APP - Niraj Chaurasiya"
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

                <div className='mt-20 mb-52'>
                    <h2 className='text-white mb-32 text-xl'>WELCOME TO DESKTOP PROJECT PAGE</h2>
                    <div className=''>

                        <a href="https://mega.nz/file/Nmh0ALxL#fU4ybSNyQEmiipLJ6NbU5AopkCWaNue57yLsdhuYrm0" class="flex flex-col items-center bg-white border rounded-lg shadow-md md:flex-row md:max-w-xl hover:bg-gray-200 active:bg-gray-400 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                            <Image height={200} width={200} class="object-cover w-full rounded-t-lg h-full md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="/tic.png" alt="" />
                            <div class="flex flex-col justify-between p-4 leading-normal">
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">The Tic Tac Toe game ( Using PYTHON famous library TKINTER) <span className=' text-yellow-500'>( NEW )</span> </h5>
                                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Welcome to Every One&apos;s favourite, The Tic-Tac-Toe game for desktop. You can download the game by clicking on Tic-Tac-Toe image.</p>
                            </div>
                        </a>
                        <br />
                        {/* <h3></h3> */}
                    </div>
                </div>

            </center>
            <Footer />
            <Gotop />
        </>
    )
}

export default project