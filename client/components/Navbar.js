import Image from 'next/image'
import Link from 'next/link'
import { GoThreeBars, GoSearch } from 'react-icons/go'

import { useEffect, useState } from 'react'
const Navbar = () => {
    const [profileData, setProfileData] = useState()
    const [mbleicon, setMbleicon] = useState(false)
    const [pcicon, setPcicon] = useState(true)
    useEffect(() => {

        if (localStorage.getItem('nkcwebsitedata')) {
            const localstoreData = localStorage.getItem('nkcwebsitedata')
            const userData = JSON.parse(localstoreData);
            setProfileData(userData);
        }
    }, [])
    const openMbleMenu = () => {
        if (mbleicon) {
            setMbleicon(false)
        }
        else {
            setMbleicon(true)
        }
    }
    const Logout = () => {
        if (confirm("Are you sure , You want to Logout?")) {
            localStorage.clear();
            window.location.href = '/';
        }
        else {
        }
    }
    return (
        <>
            <div className="sticky top-0 z-10 shadow-md bg-black" style={{ zIndex: "100" }}>
                <header className="text-gray-600 body-font ">
                    <div className="justify-between flex p-4">
                        <Link href='/' className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                            <Image height={6} width={30} src='/logo.jpg' alt="logo" className='animate-pulse' />
                            <span className="ml-3 text-xl text-white hover:text-cyan-600">Niraj Chaurasiya</span>
                        </Link>

                        <div className="">
                            {pcicon && <><div className='computer gap-4 flex'>
                                <Link id="links" className="text-white mt-1 cursor-pointer" href='/' >Home</Link>
                                <Link id="links" className="text-white mt-1 cursor-pointer" href='/contact' >Contact</Link>
                                <Link id="links" className="text-white mt-1 cursor-pointer" href='/about'>About</Link>
                                <Link id="links" className="text-white mt-1 cursor-pointer" href='/project' >Project</Link>
                                <Link id="links" className="text-white mt-1 cursor-pointer" href='/wapp' >W-App</Link>
                                <Link id="links" className="text-white mt-1 cursor-pointer" href='/blog' >Blog</Link>
                                <Link id="links" className="text-white mt-1 cursor-pointer" href='/languages' >Languages</Link>
                                {profileData ? <span className='bg-white rounded-full w-7 text-center cursor-pointer select-none' onClick={Logout} style={{ alignItems: "center" }}>{profileData?.name?.slice(0, 1)}</span>

                                    : <Link href='/login'><button className='w-20'>Login</button></Link>}
                            </div>
                                <div className='text-white text-2xl flex gap-2 cursor-pointer' id="mbleicon" >
                                    <GoThreeBars onClick={openMbleMenu} />
                                    {profileData ? <span className='bg-white text-black text-base rounded-full w-6 h-6 text-center cursor-pointer select-none mbleProfile' onClick={Logout} style={{ alignItems: "center" }}>{profileData?.name?.slice(0, 1)}</span> : ""}
                                </div></>}
                            {mbleicon &&
                                <div className="mble-icon flex gap-1 " >



                                    <div id='mble' className="grid absolute right-0 bg-black p-10 border-b-2 top-0 h-[100vh]" style={{ zIndex: 100 }}>
                                        <div className='text-white text-2xl absolute right-0 p-4 cursor-pointer' onClick={openMbleMenu}>
                                            <GoThreeBars />
                                        </div>
                                        <div className='grid gap-0 items-center mble-menu' style={{ zIndex: 1 }}>
                                            <Link id="links" className="text-white cursor-pointer" href='/' >Home</Link>
                                            <Link id="links" className="text-white cursor-pointer" href='/contact' >Contact</Link>
                                            <Link id="links" className="text-white cursor-pointer" href='/about'>About</Link>
                                            <Link id="links" className="text-white cursor-pointer" href='/project' >Project</Link>
                                            <Link id="links" className="text-white cursor-pointer" href='/wapp' >W-App</Link>
                                            <Link id="links" className="text-white cursor-pointer" href='/blog' >Blog</Link>
                                            <Link id="links" className="text-white cursor-pointer" href='/languages' >Languages</Link>
                                            {!profileData ? <Link href='/login'><button className='w-24 mbleProfile'>Login</button></Link> : <div><button onClick={Logout} className='w-24'>Logout</button></div>}
                                        </div>


                                    </div>
                                    {profileData ? <span className='bg-white rounded-full w-6 text-center cursor-pointer select-none mbleProfile' onClick={Logout} style={{ alignItems: "center" }}>{profileData?.name?.slice(0, 1)}</span> : ""}

                                </div>}

                        </div>

                    </div>

                </header>
                <div id="searchInput" className="search">
                    <center>
                        <div className="relative rounded-md w-[70vw]">
                            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                                <GoSearch className="w-5 h-5  text-gray-400" />
                            </div>
                            <input
                                type="text"
                                placeholder="Search"
                                className="w-full px-4 py-2 pr-10 text-gray-700 placeholder-gray-500 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />

                        </div>

                    </center>
                </div>


            </div>

        </>
    )
}

export default Navbar