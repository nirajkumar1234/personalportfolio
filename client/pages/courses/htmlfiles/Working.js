import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import Footer from '../../../components/Footer'
import Gotop from '../../../components/GOtop'
import DocumentStructure from './DocumentStructure'
import Editors from './Editors'
import Elements from './Elements'
import GettingStarted from './GettingStarted'
import Installation from './Installation'
import Intro from './Intro'
import PageStructure from './PageStructure'
import Prerequisites from './Prerequisites'
import Tags from './Tags'
import ViewSource from './ViewSource'
const Working = () => {
    const [intro, setIntro] = useState(false);
    const [prereq, setPrereq] = useState(false)
    const [docstruc, setDocstruc] = useState(false)
    const [pagestruc, setPagestruc] = useState(false)
    const [editors, setEditors] = useState(false)
    const [viewsource, setViewsource] = useState(false)
    const [tags, setTags] = useState(false);
    const [element, setElement] = useState(false)
    const [gettingstarted, setGettingstarted] = useState(false)
    const [installation, setInstallation] = useState(false)
    const [basictags, setBasictags] = useState(false)
    useEffect(() => {
        document.title = 'Working - HTML/Tutorial'
    }, [])
    const html = (props) => {
        if (props == 'intro') {
            setIntro(true)
        }
        else if (props == 'prereq') {
            setPrereq(true)
        }
        // Start
        else if (props == 'docstruc') {
            setDocstruc(true);
        }
        else if (props == 'pagestruc') {
            setPagestruc(true)
        }
        else if (props == 'editors') {
            setEditors(true)
        }
        else if (props == 'viewsource') {
            setViewsource(true)
        }
        else if (props == 'tags') {
            setTags(true)
        }
        else if (props == 'element') {
            setElement(true)
        }
        else if (props == 'gettingstarted') {
            setGettingstarted(true)
        }
        else if (props == 'installation') {
            setInstallation(true)
        }
        else if (props == 'basictags') {
            setBasictags(true);
        }
    }
    if (intro) {
        return (
            <Intro />
        )
    }
    if (prereq) {
        return (
            <Prerequisites />
        )
    }
    if (docstruc) {
        return (
            <DocumentStructure />
        )
    }
    if (pagestruc) {
        return (<PageStructure />
        )
    }
    if (editors) {
        return (
            <Editors />
        )
    }
    if (viewsource) {
        return (
            <ViewSource />
        )
    }
    if (tags) {
        return (
            <Tags />
        )
    }
    if (element) {
        return (
            <Elements />
        )
    }
    if (gettingstarted) {
        return (
            <GettingStarted />
        )
    }
    if (installation) {
        return (
            <Installation />
        )
    }

    return (
        <>
            <div className='mainsidebar'>
                <button className='text-xl btn-left-button mt-3'><AiOutlineMenu /></button>
                <ul className='grid border-b-2 sidebar' id='sidebar'>
                    <li><h2 className='text-gray-500 text-sm'>INTRODUCTION</h2></li>
                    <li><Link href='./Intro' ><button style={{ color: "white" }} className="hover:bg-transparent sm:text-sm bg-transparent" >Introduction about HTML</button></Link> </li>
                    <li><Link href="./Working"><button style={{ color: "white" }} className="hover:bg-transparent bg-transparent" > HTML Working</button></Link></li>
                    <li><Link href='./Prerequisites'><button style={{ color: "white" }} className="hover:bg-transparent bg-transparent" > HTML Prerequisite</button></Link></li>
                    <li><Link href='./DocumentStructure' ><button style={{ color: "white" }} className="hover:bg-transparent bg-transparent" > HTML Document Structure</button></Link></li>
                    <li><Link href='./PageStructure'><button style={{ color: "white" }} className="hover:bg-transparent bg-transparent" >HTML Page Structure</button></Link></li>
                    <li><Link href="./Editors"><button style={{ color: "white" }} className="hover:bg-transparent bg-transparent" > HTML Editors</button></Link></li>
                    <li><Link href="./ViewSource"><button style={{ color: "white" }} className="hover:bg-transparent bg-transparent" > HTML View Source</button></Link></li>
                    <li><Link href="./Tags"><button style={{ color: "white" }} className="hover:bg-transparent bg-transparent" > HTML Tags</button></Link></li>
                    <li><Link href='./Elements' ><button style={{ color: "white" }} className="hover:bg-transparent bg-transparent" > HTML Elements</button></Link></li>
                    <li><Link href="./GettingStarted" ><button style={{ color: "white" }} className="hover:bg-transparent bg-transparent" > Getting Started Of HTML</button></Link></li>
                    <li><Link href="./Installation"><button style={{ color: "white" }} className="hover:bg-transparent bg-transparent" > VS Code Installation</button></Link></li>
                    <li className='border-t-2 border-t-slate-600 mb-1 py-3'><Link href='./BasicTags'><button style={{ color: "white" }} className="hover:bg-transparent bg-transparent" >HTML Basic Tags</button></Link></li>

                </ul>

            </div>
            <div>
                <div className='content-toggle'>

                    <div className="content">
                        <div className="text-2xl font-bold">
                            <span className='text-2xl text-green-300 cursor-pointer'>#</span> HTML Working
                        </div>
                        <div className="coming-soon text-xl font-bold mt-5 ml-4">
                            Coming Soon...
                        </div>
                    </div>


                </div>
            </div>


        </>

    )
}

export default Working
