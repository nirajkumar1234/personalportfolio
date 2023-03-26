import SEO from '@bradgarropy/next-seo'
import React from 'react'

const project = () => {
    const project = [
        {
            "name": "Online Room Finder",
            "imgUrl": "https://nirajchaurasiya.com/onlineroom.png",
            "about": "We can guess through its name. Online Room Finder is an room finding app.",
            "url": "http://onlineroomfinder.epizy.com"
        },
        {
            "name": "Personal Tube App",
            "imgUrl": "https://nirajchaurasiya.com/personaltube.png",
            "about": "Personal Tube App lets you to watch your favourite videos which is available in YouTube.",
            "url": "https://personaltube.netlify.app/"
        },
        {
            "name": "Online Chat App",
            "imgUrl": "https://nirajchaurasiya.com/chat.png",
            "about": "Online Chat App is a social application where you can chat online with anyone you want. It can hold many friends at once.",
            "url": "https://oonlinechat.netlify.app/"
        },
        {
            "name": "Todos App",
            "imgUrl": "https://nirajchaurasiya.com/todos.png",
            "about": "Smart Todo App lets you to manages your time effectively and efficiently.",
            "url": "https://smarttodosapp.netlify.app/"
        },
        {
            "name": "Front-End Twitter App",
            "imgUrl": "https://nirajchaurasiya.com/twitter.png",
            "about": "The Twitter App is a clone of Twitter.",
            "url": "https://thetwitter.netlify.app/"
        },
        {
            "name": "Chat With AI - Codebot",
            "imgUrl": "https://nirajchaurasiya.com/codebot.png",
            "about": "Code-Bot is an AI based chat application where user make conversations with AI. It has many features like talk via MIC or Reader support.",
            "url": "https://codebot.netlify.app/"
        }
    ]
    return (
        <div>
            <SEO
                title="PROJECT - Niraj Chaurasiya"
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
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <p className='font-bold text-xl mb-2'>Projects Page</p>
                    <div className="flex flex-wrap -m-4">

                        {project.map((e) => {
                            return (
                                <div className="p-4 md:w-1/3" key={e}>
                                    <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                        <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={e.imgUrl} alt="blog" />
                                        <div className="p-6">
                                            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{e.name}</h1>
                                            <p className="leading-relaxed mb-3">{e.about}</p>
                                            <div className="flex items-center flex-wrap ">
                                                <a href={e.url} className="text-white inline-flex items-center md:mb-2 lg:mb-0 bg-indigo-500 p-2 w-full rounded-full justify-center">View Project

                                                    <svg className="w-4 h-4 ml-2" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                                        <circle cx="12" cy="12" r="3"></circle>
                                                    </svg>
                                                </a>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default project
