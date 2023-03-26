import Link from 'next/link'
import React from 'react'
import { AiOutlineArrowUp } from 'react-icons/ai'

const Gotop = () => {
    const scrollToTop = () => {
        window.scrollTo(0, 0)
    }
    return (
        <div className='bg-indigo-400'>
            <center>
                <div className='p-1'>
                    <button className='mx-auto p-2 bg-black text-white m-1 shadow-2xl shadow-white rounded-md ring-2 active:ring-white hover:bg-slate-800 flex flex-row ' onClick={scrollToTop} >GOTO TOP<AiOutlineArrowUp className='m-auto ml-2 animate-bounce active:animate-ping' /> </button>
                </div>
            </center>
        </div>
    )
}

export default Gotop