import React, { useState, useEffect } from 'react'
import Footer from '../components/Footer'
import Gotop from '../components/GOtop'
import axios from 'axios'
import SEO from '@bradgarropy/next-seo'

const Login = () => {
    const [loginEmail, setLoginEmail] = useState('')
    const [loginPassword, setLoginPassword] = useState('')
    const [fullname, setFullname] = useState('')
    const [registerEmail, setRegisterEmail] = useState('')
    const [registerPassword, setRegisterPassword] = useState('')
    const [confirmRegisterPassword, setConfirmRegisterPassword] = useState('')
    const [msg, setMsg] = useState('')
    const [showForm, setShowForm] = useState(true);
    const handleLogin = () => {
        try {
            if (!loginEmail || !loginPassword) {
                setMsg('Please fill up all data!')
            }
            else {
                try {
                    setShowForm(false)
                    axios.post('/user/login', {
                        email: loginEmail,
                        password: loginPassword,
                    })
                        .then((data) => {
                            if (data.data.status == 1) {
                                // console.log(data.data);
                                localStorage.setItem('nkcwebsitedata', JSON.stringify(data.data.userData));
                                window.location.href = '/';
                            }
                            else {
                                alert("Invalid Credentials!!");
                                setShowForm(true);

                            }
                        })
                        .catch((err) => {
                            console.log("Something went wrong! Please try again later");
                        })
                } catch (error) {

                }
            }
        } catch (error) {

        }
    }

    const handleRegister = () => {
        try {
            if (!registerEmail || !registerPassword || !confirmRegisterPassword || !fullname) {
                alert("Can't be empty field")
            }
            else if (registerPassword !== confirmRegisterPassword) {
                setMsg("Both password must be equal.")
            }
            else {
                try {
                    setShowForm(false)
                    axios.post('/user/signup', {
                        name: fullname,
                        email: registerEmail,
                        password: registerPassword,
                    })
                        .then((data) => {
                            console.log(data.data);
                            if (confirm(data.data.msg)) {
                                window.location.reload();
                            }
                            else {
                                window.location.reload();
                            }
                        })
                        .catch((err) => {
                            console.log("Something went wrong! Please try again later");
                        })
                } catch (error) {
                    setMsg("Please try again later")

                }
            }
        } catch (error) {
            setMsg("Please try again later.")

        }
    }
    useEffect(() => {
        if (localStorage.getItem('nkcwebsitedata'))
            window.location.href = '/'
    }, [])
    if (!showForm) {
        return (
            <div className="rotate-spinner">
                <div className="rotate-spinner-mid animate-spin">
                </div>
                <br />
                <h3 className='text-center text-gray-500'>Please wait while we check your credentials.</h3>
            </div>
        )
    }
    return (
        <div>
            <SEO
                title="LOGIN/REGISTER - Niraj Chaurasiya"
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
            {showForm && <div className='lg:flex mb-[20vh] p-10'>
                <section className="text-gray-600 body-font relative">
                    <div className=" py-24 mx-auto">
                        <div className="flex flex-col text-center w-full mb-12">
                            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-100">Login Now</h1>
                            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Get connected now!!</p>
                        </div>
                        <div className="lg:w-1/1 md:w-2/3 mx-auto">
                            <div className="flex flex-wrap -m-2" id="abId0.35303499164289387" abineguid="593EA90BD3874E59805112775E26ABCB">
                                <div className="p-2 w-full" id="abId0.9550781223319937">
                                    <div className="relative" id="abId0.32950253414537456">
                                        <label for="email" className="leading-7 text-sm text-gray-600">Email</label>
                                        <input type="email" id="email" placeholder='Enter Email' name="email" value={loginEmail} onChange={(e) => { setLoginEmail(e.target.value) }} className=" bg-gray-100  rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out w-full" />
                                    </div>
                                </div>
                                <div className="p-2 w-full">
                                    <div className="relative">
                                        <label for="loginpassword" className="leading-7 text-sm text-gray-600">Password</label>
                                        <input type="password" id="loginpassword" name="loginpassword" placeholder='Enter Password' value={loginPassword} onChange={(e) => { setLoginPassword(e.target.value) }} className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-11 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" />
                                    </div>
                                </div>
                                <div className="p-2 w-full">
                                    <div className="relative">
                                        <label for="loginpassword" className="leading-7 text-sm text-black">Disabled</label>
                                        <input id="loginpassword" name="loginpassword" placeholder='' value={msg} className="border-none w-full bg-gray-900 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-11 text-base outline-none text-red-500 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" disabled />
                                    </div>
                                </div>

                                <div className="p-2 w-full">
                                    <button onClick={handleLogin} className=" flex w-full justify-center mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Login</button>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>
                <section className="text-gray-600 body-font relative">
                    <div className=" py-24">
                        <div className="flex flex-col text-center w-full mb-12">
                            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-100">Sign Up</h1>
                            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Don't have an account? Sign Up Now</p>
                        </div>
                        <div className="lg:w-1/2 md:w-2/3 mx-auto">
                            <div className="flex flex-wrap -m-2" id="abId0.35303499164289387" abineguid="593EA90BD3874E59805112775E26ABCB">
                                <div className="p-2 w-full" id="abId0.9550781223319937">
                                    <div className="relative" id="abId0.32950253414537456">
                                        <label for="name" className="leading-7 text-sm text-gray-600">Full Name</label>
                                        <input type="name" placeholder='Enter Fullname' id="name" name="name" value={fullname} onChange={(e) => { setFullname(e.target.value) }} className=" bg-gray-100  rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out w-full" />
                                    </div>
                                </div>
                                <div className="p-2 w-full" id="abId0.9550781223319937">
                                    <div className="relative" id="abId0.32950253414537456">
                                        <label for="email" className="leading-7 text-sm text-gray-600">Email</label>
                                        <input type="email" id="email" name="email" placeholder='Enter Email' value={registerEmail} onChange={(e) => { setRegisterEmail(e.target.value) }} className="w-full bg-gray-100  rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                </div>
                                <div className="p-2 w-full">
                                    <div className="relative">
                                        <label for="password" className="leading-7 text-sm text-gray-600">Password</label>
                                        <input type="password" id="password" placeholder='Enter Password' name="password" value={registerPassword} onChange={(e) => { setRegisterPassword(e.target.value) }} className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-11 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" />
                                    </div>
                                </div>
                                <div className="p-2 w-full">
                                    <div className="relative">
                                        <label for="confirmPassword" className="leading-7 text-sm text-gray-600">Confirm Password</label>
                                        <input type="password" id="confirmPassword" placeholder='Confirm Your Password' name="confirmPassword" value={confirmRegisterPassword} onChange={(e) => { setConfirmRegisterPassword(e.target.value) }} className=" w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-11 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" />
                                    </div>
                                </div>
                                <div className="p-2 w-full">
                                    <button onClick={handleRegister} className="flex w-full justify-center mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Register</button>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>

            </div>}
            <Footer />
            <Gotop />
        </div>
    )
}

export default Login
