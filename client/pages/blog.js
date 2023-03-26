import React from 'react'
import SEO from '@bradgarropy/next-seo'
import data from './blogpost/blog.json'
import Link from 'next/link'
const blog = () => {
    return (
        <div >
            <SEO
                title="BLOG - Niraj Chaurasiya"
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

            <div style={{ paddingTop: "3%" }} >
                {data.map((e) => {
                    return (
                        <Link key={e.desc} href={`/blog/chatgpt4`} className="mt-6 m-auto flex flex-col items-center bg-white border border-gray-300 rounded-lg shadow-md sm:flex-row sm:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 transition duration-300 ease-in-out">
                            <div className="flex flex-col justify-between p-4 leading-normal sm:p-6">
                                <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-2xl">{e.headlines.slice(0, 200)}...</h5>
                                <p className="mb-3 font-medium text-gray-700 dark:text-gray-400 sm:text-sm">{e.desc.slice(0, 200)}..</p>
                                <div className="flex items-center justify-between sm:text-lg">
                                    <div className="flex" style={{ display: "flex", justifyContent: "space-between" }}>
                                        <img className="object-cover w-10 h-10 rounded-full mr-2 transform transition duration-300 hover:scale-110" src="/profile.jpg" alt="Author" />
                                        <div>
                                            <p className="text-gray-300 text-sm font-sans">{e.authorname}</p>
                                            <p className="text-gray-300 font-sans text-sm">Posted on {e.date}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>

                    )
                })}
            </div>






        </div>
    )
}

export default blog