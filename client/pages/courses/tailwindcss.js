import React, { useEffect, useState } from 'react'
import SEO from '@bradgarropy/next-seo'
import Link from 'next/link'
import Image from 'next/image'
import axios from 'axios'
import ReactMarkdown from 'react-markdown';
const Tailwindcss = () => {
    const [comment, setComment] = useState('');
    const [commentList, setCommentList] = useState([])
    const handleSubmit = (event) => {
        event.preventDefault();
        if (localStorage.getItem('nkcwebsitedata')) {
            if (comment) {
                try {
                    const localstore = JSON.parse(localStorage.getItem('nkcwebsitedata'));
                    const name = localstore.name
                    axios.post(`/user/tailwindwithnextjs`, {
                        name,
                        comment
                    })
                        .then((data) => {
                        })
                        .catch((err) => {
                        })
                } catch (error) {
                }
            }
            else { }
        }
        else {
            alert("Please login to comment");
        }
        getComments()
        setComment('');
    };
    function handleCopyClick(code) {
        navigator.clipboard.writeText(code);
    }
    function getComments() {
        axios.get('/user/tailwindwithnextjs')
            .then((data) => {
                setCommentList(data.data);
            })
            .catch((err) => {
            })
    }
    useEffect(() => {
        getComments()
    }, [])
    return (
        <>
            <SEO
                title="TAILWINDCSS WITH NEXTJS - Niraj Chaurasiya"
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

            <div className='m-auto justify-center  flex mt-10 mb-10 p-4'>
                <div className='w-[70vw] tailwindplusnextjs'>
                    <div style={{ display: "flex", justifyContent: "right" }}>
                        <Link href='/tailwindwithreactjs' className='mb-5 border-b border-b-gray-500 hover:text-red-200'>NEXT ARTICLE ON - TAILWIND+REACTJS</Link>
                    </div>
                    <h2 className='mb-4 text-xl text-yellow-50'>IMPLEMENTING TAILWIND CSS WITH NEXTJS</h2>
                    <Image
                        src='/tailwindplusnextjs.png'
                        width={500}
                        height={500}
                        style={{ width: "100%", height: "400px" }}
                        className="object-cover"

                    />
                    <ul>
                        <li><h3 className='mb-5'>Why do we need Tailwind Css even we have boostrap?</h3></li>
                    </ul>
                    <p>In today's digital landscape, web developers are always on the lookout for tools and technologies that can help them create beautiful and responsive websites quickly and efficiently. Tailwind CSS is one such tool that has gained popularity in recent years due to its ability to simplify the process of styling and designing web pages.</p>

                    <p className='mt-5'>
                        Next.js, on the other hand, is a popular React-based framework that allows developers to build server-side rendered (SSR) web applications with ease. When combined with Tailwind CSS, it can help developers create fast, responsive, and visually appealing web pages in a short amount of time.
                    </p>
                    <p className='mt-5'>
                        In this tutorial, we will learn how to implement Tailwind CSS with Next.js. We will start with a brief introduction to both technologies and then dive into the implementation process. By the end of this tutorial, you will have a solid understanding of how to use Tailwind CSS with Next.js and be able to create stunning web pages with ease.
                    </p>
                    <p className='mt-5'>
                        First, you'll need to install Tailwind CSS and its dependencies. You can do this by running the following command in your terminal:
                    </p>
                    <div className='mt-5' style={{ border: "1px solid #ccc", padding: "10px", overflowY: "scroll" }}>
                        <pre style={{ padding: "10px;" }}>
                            <p style={{ fontFamily: "'Courier New', Courier, monospace;", fontSize: "14px;", color: "white" }}>
                                <ReactMarkdown>*npm install tailwindcss postcss autoprefixer*</ReactMarkdown>
                            </p>
                        </pre>
                        <button
                            onClick={() => handleCopyClick('npm install tailwindcss postcss autoprefixer')}
                            className="px-2 py-1 rounded-lg bg-blue-400 hover:bg-gray-300 transition-colors"
                        >
                            Copy
                        </button>
                    </div>

                    <p className='mt-5'>
                        Once Tailwind CSS is installed, you'll need to create a tailwind.config.js file in your project's root directory. This file will contain your custom configuration for Tailwind CSS. Here's an example of what that file might look like:
                    </p>

                    <div className='mt-5' style={{ border: "1px solid #ccc", padding: "10px", overflowY: "scroll" }}>
                        <pre style={{ padding: "10px;" }}>
                            <code style={{ fontFamily: "'Courier New', Courier, monospace;", fontSize: "14px;", color: "white" }}>
                                {`/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
                                "./src/**/*.{js, ts, jsx, tsx}",
                                ],
                                theme: {
                                    extend: { },
  },
                                plugins: [],
}`}

                            </code>
                        </pre>
                        <button
                            onClick={() => handleCopyClick(`/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}`)}
                            className="px-2 py-1 rounded-lg bg-blue-400 hover:bg-gray-300 transition-colors"
                        >
                            Copy
                        </button>
                    </div>

                    <p className='mt-5'>
                        Next, you'll need to create a postcss.config.js file in your project's root directory. This file will contain the configuration for PostCSS, which is required by Tailwind CSS. Here's an example of what that file might look like:
                    </p>
                    <div className='mt-5' style={{ border: "1px solid #ccc", padding: "10px", overflowY: "scroll" }}>
                        <pre style={{ padding: "10px;" }}>
                            <code style={{ fontFamily: "'Courier New', Courier, monospace;", fontSize: "14px;", color: "white" }}>
                                {`module.exports = {
plugins: {
tailwindcss: { },
autoprefixer: { },
  },
}`}

                            </code>
                        </pre>
                        <button
                            onClick={() => handleCopyClick(`module.exports = {
                                plugins: {
                                    tailwindcss: {},
                                    autoprefixer: {},
                                },
                            }`)}
                            className="px-2 py-1 rounded-lg bg-blue-400 hover:bg-gray-300 transition-colors"
                        >
                            Copy
                        </button>
                    </div>

                    <p className='mt-5'>
                        Next, you'll need to go inside styles folder. Now, paste the below code inside it.
                    </p>
                    <div className='mt-5' style={{ border: "1px solid #ccc", padding: "10px", overflowY: "scroll" }}>
                        <pre style={{ padding: "10px;" }}>
                            <code style={{ fontFamily: "'Courier New', Courier, monospace;", fontSize: "14px;", color: "white" }}>
                                {`@tailwind base;
@tailwind components;
@tailwind utilities;`}

                            </code>
                        </pre>
                        <button
                            onClick={() => handleCopyClick(`@tailwind base;
@tailwind components;
@tailwind utilities;`)}
                            className="px-2 py-1 rounded-lg bg-blue-400 hover:bg-gray-300 transition-colors"
                        >
                            Copy
                        </button>
                    </div>
                    <p className='mt-5 text-red-300'>
                        All done! Restart your development server.
                    </p>
                    <p className='mt-5'>
                        Now you're ready to start using Tailwind CSS in your Next.js project!
                    </p>
                    <p className='mt-5'>
                        Here's an example of how you might use some basic HTML tags in your Next.js project with Tailwind CSS:
                    </p>
                    <div className='mt-5' style={{ border: "1px solid #ccc", padding: "10px", overflowY: "scroll" }}>
                        <pre style={{ padding: "10px;" }}>
                            <code style={{ fontFamily: "'Courier New', Courier, monospace;", fontSize: "14px;", color: "white" }}>
                                {`
import React from 'react'
const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold text-gray-900">Welcome to my Next.js + Tailwind CSS project!</h1>
      <p className="mt-4 text-xl text-gray-600">This project demonstrates how to use basic HTML tags with Tailwind CSS in a Next.js project.</p>
      <a href="#" className="mt-8 px-4 py-2 text-lg font-medium text-white bg-blue-500 rounded hover:bg-blue-600">Get started</a>
    </div>
  )
}

export default HomePage

                               `}
                            </code>
                        </pre>
                        <button
                            onClick={() => handleCopyClick(`
import React from 'react'
const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold text-gray-900">Welcome to my Next.js + Tailwind CSS project!</h1>
      <p className="mt-4 text-xl text-gray-600">This project demonstrates how to use basic HTML tags with Tailwind CSS in a Next.js project.</p>
      <a href="#" className="mt-8 px-4 py-2 text-lg font-medium text-white bg-blue-500 rounded hover:bg-blue-600">Get started</a>
    </div>
  )
}

export default HomePage

                               `)}
                            className="px-2 py-1 rounded-lg bg-blue-400 hover:bg-gray-300 transition-colors"
                        >
                            Copy
                        </button>
                    </div>
                    <p className='mt-5'>In this example, we're using the following HTML tags:</p>
                    <p className='mt-5'>
                        1.{`<div>`}: This is a container element that we're using to group our other HTML elements together. We're using the <span className='font-thin text-yellow-200'>flex, flex-col, items-center, and justify-center</span> classes from Tailwind CSS to center our content vertically and horizontally on the page.
                    </p>
                    <p className='mt-5'>
                        2.{`<h1>`}: This is a heading element that we're using to display the main heading of our page. We're using the <span className='font-thin text-yellow-200'>text-3xl, font-bold, and text-gray-900</span> classes from Tailwind CSS to style the heading.
                    </p>
                    <p className='mt-5'>
                        {`<p>`}: This is a paragraph element that we're using to display some text content on our page. We're using the <span className='font-thin text-yellow-200'>mt-4, text-xl, and text-gray-600</span> classes from Tailwind CSS to add some spacing and style to the paragraph.
                    </p>
                    <p className='mt-5'>
                        {`<a>`}: This is a link element that we're using to create a button. We're using the <span className='font-thin text-yellow-200'>mt-8, px-4, py-2, text-lg, font-medium, text-white, bg-blue-500, rounded, and hover:bg-blue-600</span> classes from Tailwind CSS to style the button.
                    </p>
                    <div style={{ display: "flex", justifyContent: "right", marginTop: "5%" }}>
                        <Link href='/tailwindwithreactjs' className='mb-5 border-b border-b-gray-500 hover:text-red-200'>NEXT ARTICLE ON - TAILWIND+REACTJS</Link>
                    </div>
                    <form onSubmit={handleSubmit} className="space-y-4 border border-gray-700 rounded-lg p-2">
                        <div className="flex flex-col space-y-2">
                            <label htmlFor="comment" className="text-gray-700 font-medium">
                                Leave a comment
                            </label>
                            <textarea
                                id="comment"
                                name="comment"
                                rows="2"
                                value={comment}
                                onChange={(event) => setComment(event.target.value)}
                                required
                                className="border text-white bg-transparent border-gray-800 rounded-md p-2 focus:outline-none focus:ring-primary-500 focus:border-primary-500 resize-none"
                                placeholder="Write your comment here..."
                            />
                        </div>
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 text-white font-medium py-2 px-4 rounded-md"
                        >
                            Post
                        </button>
                        <div className="mt-4">
                            {commentList.map(e => (
                                <div key={e?._id} className="flex items-start mb-4 border border-gray-900 p-2">
                                    <img
                                        src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"
                                        alt="Profile"
                                        className="w-10 h-10 rounded-full mr-3 mt-4"
                                    />
                                    <div className="bg-transparent rounded-md p-1 flex-1">
                                        <p className="text-sm font-medium mb-2 text-white">{e?.name}</p>
                                        <p className="text-sm font-medium mb-2 text-green-500">{e?.comment}</p>
                                        <p className="text-gray-500 text-sm">Posted on {e?.createdAt?.slice(0, 10)}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </form>
                </div>

            </div>
        </>
    )
}

export default Tailwindcss