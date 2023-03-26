import React from 'react'
import { AiOutlineMenu } from 'react-icons/ai'

const Sidebar = () => {
    const html = () => {

    }
    return (
        <div>
            <div className='mainsidebar'>
                <button className='text-xl btn-left-button mt-3'><AiOutlineMenu /></button>
                <ul className='grid border-b-2 sidebar' id='sidebar'>
                    <li><h2 className='text-gray-500 text-sm'>INTRODUCTION</h2></li>
                    <li><button onClick={() => { html('intro') }} style={{ color: "red" }} className="hover:bg-transparent sm:text-sm bg-transparent" >Introduction about HTML</button></li>
                    <li><button onClick={() => { html('work') }} style={{ color: "white" }} className="hover:bg-transparent bg-transparent" > HTML Working</button></li>
                    <li><button onClick={() => { html('prereq') }} style={{ color: "white" }} className="hover:bg-transparent bg-transparent" > HTML Prerequisite</button></li>
                    <li><button onClick={() => { html('docstruc') }} style={{ color: "white" }} className="hover:bg-transparent bg-transparent" > HTML Document Structure</button></li>
                    <li><button onClick={() => { html('pagestruc') }} style={{ color: "white" }} className="hover:bg-transparent bg-transparent" >HTML Page Structure</button></li>
                    <li><button onClick={() => { html('editors') }} style={{ color: "white" }} className="hover:bg-transparent bg-transparent" > HTML Editors</button></li>
                    <li><button onClick={() => { html('viewsource') }} style={{ color: "white" }} className="hover:bg-transparent bg-transparent" > HTML View Source</button></li>
                    <li><button onClick={() => { html('tags') }} style={{ color: "white" }} className="hover:bg-transparent bg-transparent" > HTML Tags</button></li>
                    <li><button onClick={() => { html('element') }} style={{ color: "white" }} className="hover:bg-transparent bg-transparent" > HTML Elements</button></li>
                    <li><button onClick={() => { html('gettingstarted') }} style={{ color: "white" }} className="hover:bg-transparent bg-transparent" > Getting Started Of HTML</button></li>
                    <li><button onClick={() => { html('installation') }} style={{ color: "white" }} className="hover:bg-transparent bg-transparent" > VS Code Installation</button></li>
                    <li className='border-t-2 border-t-slate-600 mb-1 py-3'><button onClick={() => { html('basictags') }} style={{ color: "white" }} className="hover:bg-transparent bg-transparent" >HTML Basic Tags</button></li>

                </ul>

            </div>
        </div>
    )
}

export default Sidebar
