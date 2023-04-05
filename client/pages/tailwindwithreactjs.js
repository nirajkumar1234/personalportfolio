import React, { useState } from 'react'
import SEO from '@bradgarropy/next-seo'
import Link from 'next/link'
import Image from 'next/image'
import axios from 'axios'
const Tailwindcss = (cmtListData) => {
    const [comment, setComment] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        if (localStorage.getItem('nkcwebsitedata')) {
            if (comment) {
                try {
                    const localstore = JSON.parse(localStorage.getItem('nkcwebsitedata'));
                    const name = localstore.name
                    axios.post(`/user/tailwindwithreactcomment`, {
                        name,
                        comment
                    })
                        .then((data) => {

                        })
                        .catch((err) => {
                        })
                } catch (error) { }
            }
            else { }
        }
        else {
            alert("Please login to comment")
        }
        setComment('');
    };
    function handleCopyClick(code) {
        navigator.clipboard.writeText(code);
    }

    return (
        <>
            <SEO
                title="TAILWINDCSS WITH REACTJS - Niraj Chaurasiya"
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
                        <Link href='/courses/tailwindcss' className='mb-5 border-b border-b-gray-500 hover:text-red-200'>NEXT ARTICLE ON - TAILWIND+NEXTJS</Link>
                    </div>
                    <h2 className='mb-4 text-xl text-yellow-50'>IMPLEMENTING TAILWIND CSS WITH REACTJS</h2>
                    <Image
                        src='/tailwindplusreactjs.png'
                        width={500}
                        height={500}
                        style={{ width: "100%", height: "450px" }}
                        className="object-cover"

                    />
                    <ul>
                        <li><h3 className='mb-5'>Why do we need Tailwind Css even we have boostrap?</h3></li>
                    </ul>
                    <p>
                        Tailwind CSS is a utility-first CSS framework that makes it easy to style HTML elements using pre-defined classes. ReactJS is a popular front-end JavaScript library used for building web applications. When used together, Tailwind CSS and ReactJS can create a powerful and efficient web development workflow.
                    </p>

                    <p className='mt-5'>
                        ReactJS is an open-source JavaScript library that was developed by Facebook for building user interfaces. It is a popular choice for building complex, dynamic, and high-performance web applications. ReactJS uses a component-based architecture, which allows developers to break down their application into smaller, reusable pieces of code, making it easier to build and maintain large-scale applications.
                    </p>
                    <p className='mt-5'>
                        In this tutorial, we will learn how to implement Tailwind CSS with React.js. We will start with a brief introduction to both technologies and then dive into the implementation process. By the end of this tutorial, you will have a solid understanding of how to use Tailwind CSS with React.js and be able to create stunning web pages with ease.
                    </p>
                    <p className='mt-5 mb-2 text-yellow-100'>1. Make sure you have nodejs installed in your device. </p>
                    <p className='mb-1 text-yellow-100'>2. Create a new ReactJS project or navigate to an existing one.</p>
                    <p className='text-green-200 text-lg mt-4'>Start your project. You are good to go.</p>
                    <p className='mt-5'>
                        First, open a terminal or command prompt and navigate to the project's root directory.
                        Install Tailwind CSS and its dependencies by running the following command::
                    </p>
                    <div className='mt-5' style={{ border: "1px solid #ccc", padding: "10px", overflowY: "scroll" }}>
                        <pre style={{ padding: "10px;" }}>
                            <code style={{ fontFamily: "'Courier New', Courier, monospace;", fontSize: "14px;", color: "white" }}>
                                npm install tailwindcss postcss autoprefixer
                            </code>
                        </pre>
                        <button
                            onClick={() => handleCopyClick('npm install tailwindcss postcss autoprefixer')}
                            className="px-2 py-1 rounded-lg bg-blue-500 hover:bg-gray-300 transition-colors"
                        >
                            Copy
                        </button>
                    </div>
                    <p className='mt-4 text-green-200'>Create a configuration file for Tailwind CSS by running the following command:</p>
                    <div className='mt-5' style={{ border: "1px solid #ccc", padding: "10px", overflowY: "scroll" }}>
                        <pre style={{ padding: "10px;" }}>
                            <code style={{ fontFamily: "'Courier New', Courier, monospace;", fontSize: "14px;", color: "white" }}>
                                npx tailwindcss init
                            </code>
                        </pre>
                        <button
                            onClick={() => handleCopyClick('npx tailwindcss init')}
                            className="px-2 py-1 rounded-lg bg-blue-500 hover:bg-gray-300 transition-colors"
                        >
                            Copy
                        </button>
                    </div>
                    <p className='mt-4 text-green-200'>This will create a tailwind.config.js file in the root directory of your project.</p>
                    <p className='mt-5'>
                        Paste the below code to your tailwind.config.js file
                    </p>

                    <div className='mt-5' style={{ border: "1px solid #ccc", padding: "10px", overflowY: "scroll" }}>
                        <pre style={{ padding: "10px;" }}>
                            <code style={{ fontFamily: "'Courier New', Courier, monospace;", fontSize: "14px;", color: "white" }}>
                                {`/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}`}
                            </code>
                        </pre>
                        <button
                            onClick={() => handleCopyClick(`/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}`)}
                            className="px-2 py-1 rounded-lg bg-blue-500 hover:bg-gray-300 transition-colors"
                        >
                            Copy
                        </button>
                    </div>

                    <p className='mt-5'>
                        Import the Tailwind CSS styles in your project's CSS file or add them as inline styles. You can do this by adding the following line to your CSS file:
                    </p>
                    <div className='mt-5' style={{ border: "1px solid #ccc", padding: "10px", overflowY: "scroll" }}>
                        <pre style={{ padding: "10px;" }}>
                            <code style={{ fontFamily: "'Courier New', Courier, monospace;", fontSize: "14px;", color: "white" }}>
                                {`@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';
`}
                            </code>
                        </pre>
                        <button
                            onClick={() => handleCopyClick(`@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';
`)}
                            className="px-2 py-1 rounded-lg bg-blue-500 hover:bg-gray-300 transition-colors"
                        >
                            Copy
                        </button>
                    </div>
                    <p className='mt-5 text-red-300'>
                        All done! Restart your development server.
                    </p>
                    <p className='mt-5'>
                        Alternatively, you can add Tailwind CSS as a class name in your React components using the className attribute. For example:
                    </p>
                    <p className='mt-5'>
                        Here's an example of how you might use some basic HTML tags in your React.js project with Tailwind CSS:
                    </p>
                    <div className='mt-5' style={{ border: "1px solid #ccc", padding: "10px", overflowY: "scroll" }}>
                        <pre style={{ padding: "10px;" }}>
                            <code style={{ fontFamily: "'Courier New', Courier, monospace;", fontSize: "14px;", color: "white" }}>
                                {`import React from 'react';

function MyComponent() {
  return (
    <div className="bg-blue-500 text-white p-4">
      This component is styled with Tailwind CSS!
    </div>
  );
}

export default MyComponent;
`}
                            </code>
                        </pre>
                        <button
                            onClick={() => handleCopyClick(`import React from 'react';

function MyComponent() {
  return (
    <div className="bg-blue-500 text-white p-4">
      This component is styled with Tailwind CSS!
    </div>
  );
}

export default MyComponent;
`)}
                            className="px-2 py-1 rounded-lg bg-blue-500 hover:bg-gray-300 transition-colors"
                        >
                            Copy
                        </button>
                    </div>
                    <p className='mt-5'>That's it! Tailwind CSS is now installed and ready to use in your ReactJS project. You can start using the utility classes to style your components and create a consistent design across your application.</p>

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
                            {cmtListData ? cmtListData.cmtListData?.map(e => (
                                <div key={e?._id} className="flex items-start mb-4 border border-gray-900 p-2">
                                    <Image
                                        src="/userimage.png"
                                        alt="Profile"
                                        width={20}
                                        height={20}
                                        className="w-10 h-10 rounded-full mr-3 mt-4 object-cover"
                                        loading='lazy'
                                    />
                                    <div className="bg-transparent rounded-md p-1 flex-1">
                                        <p className="text-sm font-medium mb-2 text-white">{e?.name}</p>
                                        <p className="text-sm font-medium mb-2 text-green-500">{e?.comment}</p>
                                        <p className="text-gray-500 text-sm">Posted on {e?.createdAt?.slice(0, 10)}</p>
                                    </div>
                                </div>
                            )) : ''}
                        </div>
                    </form>
                </div>

            </div>
        </>
    )
}


export async function getStaticProps() {
    const cmtList = await axios.get('https://backend.nirajchaurasiya.com/user/tailwindwithreactcomment')
    const cmtListData = cmtList.data;
    return {
        props: {
            cmtListData,
        },
    }
}

export default Tailwindcss