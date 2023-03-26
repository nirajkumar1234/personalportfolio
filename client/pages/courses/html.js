import Image from 'next/image'
import React, { useEffect } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import Footer from '../../components/Footer'
import Gotop from '../../components/GOtop'
import Link from 'next/link'
const Html = () => {
    useEffect(() => {
        document.title = 'Introduction - HTML/Tutorial'
    }, [])
    return (
        <>
            <div className='mainsidebar'>
                <button className='text-xl btn-left-button mt-3'><AiOutlineMenu /></button>
                <ul className='grid border-b-2 sidebar' id='sidebar'>
                    <li><h2 className='text-gray-500 text-sm'>INTRODUCTION</h2></li>
                    <li><Link href='./htmlfiles/Intro' ><button style={{ color: "red" }} className="hover:bg-transparent sm:text-sm bg-transparent" >Introduction about HTML</button></Link> </li>
                    <li><Link href="./htmlfiles/Working"><button style={{ color: "white" }} className="hover:bg-transparent bg-transparent" > HTML Working</button></Link></li>
                    <li><Link href='./htmlfiles/Prerequisites'><button style={{ color: "white" }} className="hover:bg-transparent bg-transparent" > HTML Prerequisite</button></Link></li>
                    <li><Link href='./htmlfiles/DocumentStructure' ><button style={{ color: "white" }} className="hover:bg-transparent bg-transparent" > HTML Document Structure</button></Link></li>
                    <li><Link href='./htmlfiles/PageStructure'><button style={{ color: "white" }} className="hover:bg-transparent bg-transparent" >HTML Page Structure</button></Link></li>
                    <li><Link href="./htmlfiles/Editors"><button style={{ color: "white" }} className="hover:bg-transparent bg-transparent" > HTML Editors</button></Link></li>
                    <li><Link href="./htmlfiles/ViewSource"><button style={{ color: "white" }} className="hover:bg-transparent bg-transparent" > HTML View Source</button></Link></li>
                    <li><Link href="./htmlfiles/Tags"><button style={{ color: "white" }} className="hover:bg-transparent bg-transparent" > HTML Tags</button></Link></li>
                    <li><Link href='./htmlfiles/Elements' ><button style={{ color: "white" }} className="hover:bg-transparent bg-transparent" > HTML Elements</button></Link></li>
                    <li><Link href="./htmlfiles/GettingStarted" ><button style={{ color: "white" }} className="hover:bg-transparent bg-transparent" > Getting Started Of HTML</button></Link></li>
                    <li><Link href="./htmlfiles/Installation"><button style={{ color: "white" }} className="hover:bg-transparent bg-transparent" > VS Code Installation</button></Link></li>
                    <li className='border-t-2 border-t-slate-600 mb-1 py-3'><Link href='./htmlfiles/BasicTags'><button style={{ color: "white" }} className="hover:bg-transparent bg-transparent" >HTML Basic Tags</button></Link></li>

                </ul>

            </div>
            <div>
                <div className='content-toggle'>

                    <div className="content">
                        <div className="text-2xl font-bold">
                            <span className='text-2xl text-green-300 cursor-pointer'>#</span> HTML Introduction
                        </div>
                        <div className="questions mt-2">
                            <h2 className="text-xl font-semibold">
                                What is HTML?
                            </h2>
                            <div className="answer mt-1">
                                <li>HTML is an initialism for &quot;Hypertext Markup Language&quot;.</li>
                                <li>It is the language of web.</li>
                                <li>It is used to create website.</li>
                                <li>It is used to define a page layout.</li>
                                <li>HTML is used for making pages of the website also called webpages that we see on the internet.</li>
                                <li>It consists of tags.</li>
                                <li>This set of tags is written in HTML Document.</li>
                                <li>&quot;.html&quot; or &quot;.htm&quot; is the extension.</li>
                                <li>There are so many versions of HTML but HTML5 is the latest version.</li>
                            </div>
                        </div>

                        <div className="questions mt-16">
                            <h2 className="text-xl font-semibold">
                                Features of HTML
                            </h2>
                            <div className="answer mt-1">
                                <li>It is platform-independent.</li>
                                <li>Images, videos, and audio can be added to a web page.</li>
                                <li>Hypertext can be added to the text.</li>
                                <li>It is a markup language.</li>
                                <li>It is interpreted language.</li>
                                <li>It can be integrated with other languages like CSS, JavaScript etc.
                                    Semantic Structure.</li>
                                <li>This set of tags is written in HTML Document.</li>
                                <li>local Storage & Indexed DB – Client-side data storage.</li>
                                <li>Offline Capabilities (PWA) with Cache API & Service Workers.</li>
                            </div>
                        </div>

                        <div className="questions mt-16">
                            <h2 className="text-xl font-semibold">
                                Why the word HyperText & Markup Language
                            </h2>
                            <div className="answer mt-1">
                                <li>The word hypertext markup language comprises the words &quot;hypertext” and &quot;markup language&quot;. The term &quot;hypertext&quot; refers to the linking of text with other documents and &quot;markup language&quot; refers to a language that uses a set of tags.

                                    So, HTML is the linking of text with other documents using some set of tags.</li>
                            </div>
                            <div className="mt-12">
                                <span className='text-yellow-300'>Note:-</span> Tags refers to some meaningful texts enclosed in angle braces < ></>. For eg. . Each tag has a different meaning and importance in building an HTML page which can affect the web page in its own ways
                            </div>
                        </div>
                        <div className="mt-12">
                            <h2 className="font-extrabold text-xl">
                                A beautiful analogy to understand HTML:
                            </h2>
                            <Image className='mt-12 rounded-2xl' src='/postimage/Analogy.png' width={1000} height={1000} alt="image of car" />
                        </div>

                        <div className="mt-12">
                            Here in the explanation for the above analogy, the car skeleton refers to HTML with the page body. When that skeleton is painted it the car gets CSS and after all that car is provided with some functionalities like engine, etc (which refers to JavaScript), the car gets life and can run. Similarly, when we develop our websites we need HTML for the structure and if we want our website to look good and prettier we need CSS and if we want to add functionalities to our webpage we need JavaScript.
                        </div>


                        <div className="questions mt-16">
                            <h2 className="text-xl font-semibold">
                                History of HTML:
                            </h2>
                            <div className="answer mt-1">
                                <li>In 1989, Tim Berners Lee established www and created HTML in 1991. </li>
                                <li>From 1995 to 1997, he started working on versions of HTML.</li>

                                <li>In 1999, a committee was organized that made HTML4.0 a standard.</li>

                                <li>HTML4.0 is used by many, even today. However, the stable version of HTML is 5.0 also known as HTML5.
                                </li>
                            </div>
                        </div>


                    </div>

                </div>

            </div><Footer />
            <Gotop />


        </>

    )
}

export default Html
