import React from 'react'
import Link from 'next/link'
import { AiOutlineArrowDown } from 'react-icons/ai'
import Footer from '../components/Footer'
import Gotop from '../components/GOtop';
import data from './blogpost/blog.json'
import SEO from '@bradgarropy/next-seo'
const index = () => {
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
      <>
        <SEO
          title="HOME - Niraj Chaurasiya"
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
        <div className={`flex z-10 bg-black h-[80vh] mx-auto w-full scroll-smooth shadow-sm shadow-lime-100`}>
          <div className="flex items-center text-center lg:text-left px-8 md:px-12 lg:w-1/2 w-full">
            <div className='w-full'>
              <h2 className="text-3xl font-semibold md:text-4xl text-white">Welcome to <span className="text-purple-700 ">Niraj Chaurasiya</span>
              </h2>
              <div className=''>
                <p className="mt-4 text-sm text-gray-500 md:text-base lg:w-[76%]">
                  Measuring programming progress by lines of code is like measuring <br /> aircraft building progress by weight.
                  <br />
                  I am a full stack web developer, with a deep passion for creating dynamic and functional web applications. With expertise in both front-end and back-end development, I am able to bring a holistic approach to building websites that not only look great but also provide a seamless user experience.</p>
              </div>
              <div className="flex justify-center lg:justify-start mt-6">
                <Link href="/project"><button className="px-3 md:w-[30vw] py-2 lg:px-4 lg:py-3  ring-2 ring-yellow-50 text-sm font-semibold rounded  active:bg-gray-800  text-gray-600 bg-black hover:bg-gray-800"> See my work
                </button></Link>
              </div>
            </div></div>
          <hr color="white" />
          <div className="hidden lg:block lg:w-1/2" style={{ clipPath: "polygon(10% 0px, 100% 0%, 100% 100%, 0px 100%)" }}><div className="h-full object-cover"
            style={{ backgroundImage: "url(/image.jpg)" }}>
            <div className="h-full bg-black opacity-25">
            </div>
          </div>
          </div>
        </div>
        <center>
          <div className='mt-4 animate-bounce'>
            <a href="#2nd"><AiOutlineArrowDown color='white' fontSize="35px" /></a>
          </div>
        </center>

        <section className="text-gray-600 body-font" id="2nd">
          <div className="container px-5 py-24 mx-auto">
            <h1 className="text-3xl font-medium title-font mb-12 text-center text-white">MY <span className='text-indigo-700'>PROJECTS</span></h1>
            <div className="flex flex-wrap -m-4">

              {project.map((e) => {
                return (
                  <div className="p-4 md:w-1/3" key={e}>
                    <div className="h-full border-2 border-gray-500 border-opacity-60 rounded-lg overflow-hidden">
                      <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={e.imgUrl} alt="blog" />
                      <div className="p-6">
                        <h1 className="title-font text-lg font-medium text-gray-100 mb-3">{e.name}</h1>
                        <p className="leading-relaxed mb-3 text-gray-300">{e.about}</p>
                        <div className="flex items-center flex-wrap ">
                          <Link passHref href={e.url} rel="noreferrer" className="text-white inline-flex items-center md:mb-2 lg:mb-0 bg-indigo-500 p-2 w-full rounded-full justify-center hover:text-indigo-100">
                            View Project
                            <svg className="w-4 h-4 ml-2" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                              <circle cx="12" cy="12" r="3"></circle>
                            </svg>
                          </Link>

                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
        <h1 className="text-3xl font-medium title-font mb-12 text-center text-white">MY <span className='text-indigo-700'>SKILLS</span></h1>
        <div className="flex flex-wrap gap-4 lg:justify-evenly mb-12">
          <div className=" rounded-lg p-4">
            <h2 className="text-lg font-bold mb-2 text-white">Frontend</h2>
            <ul>
              <li className="mb-1 text-white">HTML</li>
              <li className="mb-1 text-white">CSS</li>
              <li className="mb-1 text-white">JavaScript</li>
              <li className="mb-1 text-white">jQuery</li>
              <li className="mb-1 text-white">React</li>
              <li className="mb-1 text-white">Next.js</li>
              <li className="mb-1 text-white">Tailwind CSS</li>
            </ul>
          </div>

          <div className=" rounded-lg p-4">
            <h2 className="text-lg font-bold mb-2 text-white">Backend</h2>
            <ul>
              <li className="mb-1 text-white">Node.js</li>
              <li className="mb-1 text-white">Express</li>
              <li className="mb-1 text-white">Mongoose</li>
              <li className="mb-1 text-white">MongoDB</li>
              <li className="mb-1 text-white">PHP</li>
            </ul>
          </div>
          <div className=" rounded-lg p-4">
            <h2 className="text-lg font-bold mb-2 text-white">Other Tools</h2>
            <ul>
              <li className="mb-1 text-white">Git</li>
              <li className="mb-1 text-white">GitHub</li>
              <li className="mb-1 text-white">Deployment</li>
            </ul>
          </div>

        </div>


        <div className='border-t mb-12 w-[80vw] m-auto border-t-gray-600'>

        </div>
        <section className="text-gray-600 body-font">
          <h1 className="text-3xl font-medium title-font mb-12 text-center text-white">ABOUT <span className='text-indigo-700'>ME</span></h1>
          <div className="container px-5 mx-auto flex flex-wrap">

            <div className="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">

              <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
              </div>
              <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">1</div>
              <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">

                <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                  <h2 className="font-medium title-font text-gray-100 mb-1 text-xl">My Quick Story</h2>
                  <p className="font-sans text-white">I was an accomplished web developer, having completed a plethora of web development projects. One particular project I worked on during my college years in 2021 which involved building an online room finder, which was aimed at solving the problem of finding rooms.</p>
                  <p className="font-sans text-white mt-2">Initially, I was tasked with designing the user interface of the website as a front-end developer. However, my colleagues had to leave the project midway due to board exams, leaving me alone to handle both front-end and back-end development.</p>
                  <p className="font-sans text-white mt-2">To tackle the challenge, I had to teach myself PHP, the programming language needed for back-end development. Despite encountering difficulties in debugging and coding, I persevered and eventually succeeded in developing a fully functional website.</p>
                  <p className="font-sans text-white mt-2">
                    Overall, the experience taught me valuable lessons in adaptability and problem-solving, and solidified my passion for web development.
                  </p>
                  <Link href='/about' className="text-white inline-flex items-center md:mb-2 lg:mb-0 bg-indigo-500 p-2 mt-12 rounded-sm justify-center hover:text-white">Read More..
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className='border-t mb-12 mt-12 w-[80vw] m-auto border-t-gray-600'>

        </div>

        <div className='p-3' style={{ paddingTop: "1%", paddingBottom: "6%" }} >
          <h1 className="text-3xl font-medium title-font mb-12 text-center text-white">MY <span className='text-indigo-700'>BLOGS</span></h1>
          {data.map((e) => {
            return (
              <Link key={e.desc} href={`/blog/chatgpt4`} className="mt-6 m-auto flex flex-col items-center bg-white border border-gray-300 rounded-lg shadow-md sm:flex-row sm:max-w-2xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 transition duration-300 ease-in-out">
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
      </>
      <Footer />
      <Gotop />
    </div>
  )
}

export default index
