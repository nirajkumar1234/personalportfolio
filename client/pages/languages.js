
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Footer from '../components/Footer'
import Gotop from '../components/GOtop'
import SEO from '@bradgarropy/next-seo'
const languages = () => {
    const lang = [
        {
            name: 'HTML',
            url: '/html.png',
            urltopage: '/courses/html'
        },
        {
            name: 'CSS',
            url: '/css.png',
            urltopage: '/courses/css'
        },
        {
            name: 'JAVASCRIPT',
            url: '/js.png',
            urltopage: '/courses/js'
        },
        {
            name: 'REACT',
            url: '/react.png',
            urltopage: '/courses/reactjs'
        },
        {
            name: 'NODEJS',
            url: '/node.png',
            urltopage: '/courses/nodejs'
        },
        {
            name: 'EXPRESS',
            url: '/express.png',
            urltopage: '/courses/express'
        },
        {
            name: 'C',
            url: '/c.png',
            urltopage: '/courses/c'
        },
        {
            name: 'PHP',
            url: '/php.png',
            urltopage: '/courses/php'
        },
        {
            name: 'BOOSTRAP',
            url: '/boostrap.png',
            urltopage: '/courses/boostrap'
        },
        {
            name: 'TAILWIND',
            url: '/tailwind.jpg',
            urltopage: '/courses/tailwindcss'
        },
        {
            name: "NEXTJS",
            url: "/nextjs.png",
            urltopage: '/courses/nextjs'
        }
    ]
    return (
        <>      <SEO
            title="LANGUAGES - Niraj Chaurasiya"
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
            <div className='p-6'>
                <section className="text-gray-600 body-font py-16">
                    <h2 className='text-center pb-8'>Programming Languages</h2>
                    <div className="container  mx-auto">
                        <div className="flex flex-wrap -m-4">
                            {lang.map((e) => {
                                return (
                                    <div className="lg:w-1/4 md:w-1/2 cursor-pointer p-4 w-full border " key={e.name}>
                                        <Link href={e.urltopage} className="block relative m-auto rounded overflow-hidden">
                                            <Image height={150} width={150} className="object-contain object-top block m-auto" src={e.url} alt={`${e.name} image`} />
                                            <div className="mt-4">
                                                <h2 className="title-font text-lg font-medium text-center">{e.name}</h2>
                                            </div>
                                        </Link>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </section>

            </div>
            <Footer />
            <Gotop />
        </>
    )
}

export default languages