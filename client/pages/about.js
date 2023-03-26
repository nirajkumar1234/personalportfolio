import React from 'react'
import SEO from '@bradgarropy/next-seo'

const about = () => {
    return (
        <div>
            <SEO
                title="ABOUT - Niraj Chaurasiya"
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
            <section className="text-gray-600 body-font ">
                <div className="container px-5 py-24 mx-auto flex flex-wrap">
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
                            </div>
                        </div>
                    </div>
                    <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
                        <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                            <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                        </div>
                        <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">2</div>
                        <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">

                            <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                                <h2 className="font-medium title-font text-gray-100 mb-1 text-xl">As A Web Developer</h2>
                                <p className="leading-relaxed text-white">I pay close attention to my code’s readability.I am a full stack web developer, with a deep passion for creating dynamic and functional web applications. With expertise in both front-end and back-end development, I am able to bring a holistic approach to building websites that not only look great but also provide a seamless user experience.</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
                        <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                            <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                        </div>
                        <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">3</div>
                        <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">

                            <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                                <h2 className="font-medium title-font text-gray-100 mb-1 text-xl">As A Person</h2>
                                <p className="leading-relaxed text-gray-300">I am an adventurous person who loves to travel, meet new people, and explore the world around me. Whenever I get the chance to travel, I am eager to immerse myself in new experiences and break out of my daily routine. I enjoy discovering new cultures, learning about the history and traditions of different places, and forming connections with individuals from all walks of life. Whether it&apos;s hiking through a forest, exploring an ancient temple, or wandering through a bustling city, I am always excited to explore and learn something new.</p>

                                <p className="leading-relaxed text-gray-300 mt-2">In addition to my love for travel and adventure, I am deeply interested in the fields of AI and robotics. I believe that technology has the potential to transform our world in unimaginable ways, and I am passionate about keeping up-to-date with the latest developments in these areas. From studying AI and machine learning to exploring the latest trends in robotics, I am always seeking to expand my knowledge and push the limits of what&apos;s possible.</p>
                                <p className="leading-relaxed text-gray-300 mt-2">Finally, I am someone who is always looking for new challenges and opportunities to grow both personally and professionally. Whether it&apos;s taking on a new project at work or learning a new skill, I am always eager to step outside of my comfort zone and push myself to the next level. I believe that growth and progress are essential to living a fulfilling life, and I am constantly seeking out ways to challenge myself and achieve my goals.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default about
