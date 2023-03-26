import React, { useEffect, useState } from 'react'
import { FaBlogger } from 'react-icons/fa'
import dynamic from 'next/dynamic'
const ReactQuill = dynamic(import('react-quill'), { ssr: false })
import Link from 'next/link'
import Image from 'next/image'
import '../../node_modules/react-quill/dist/quill.snow.css'
const Adminpage = () => {
   const [text, setText] = useState('');

   function handleChange(value) {
      setText(value);
   }
   const formats = [
      'bold',
      'italic',
      'underline',
      'strike',
      'color',
      'background',
      'font',
      'size',
      'script',
      'blockquote',
      'header',
      'list',
      'align',
      'link',
      'image',
      'video',
   ];
   const modules = {
      toolbar: [
         ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
         ['blockquote', 'code-block'],
         [{ 'header': 1 }, { 'header': 2 }],               // custom button values
         [{ 'list': 'ordered' }, { 'list': 'bullet' }],
         [{ 'script': 'sub' }, { 'script': 'super' }],     // superscript/subscript
         [{ 'indent': '-1' }, { 'indent': '+1' }],         // outdent/indent
         [{ 'direction': 'rtl' }],                         // text direction
         [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
         [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
         [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
         [{ 'font': [] }],
         [{ 'align': [] }],
         ['clean'],                                        // remove formatting button
         ['link', 'image', 'video'],                       // link and image, video
      ],
   };
   useEffect(() => {
      if (localStorage.getItem('admindata')) { }
      else {
         window.location.href = '/admin'
      }
   }, [])
   return (
      <>
         <div className='flex'>
            <aside id="logo-sidebar" className="fixed h-[100vh] transition-transform -translate-x-full lg:translate-x-0 w-[16vw]" aria-label="Sidebar">
               <div className="h-full px-3 py-4 overflow-y-auto bg-gray-800">
                  <p className="flex items-center pl-2.5 mb-5">
                     <Image width={7} height={7} src="/profile.jpg" className="h-7 w-7 object-cover rounded-full mt-1 mr-3 lg:h-7" alt="logo" />
                     <span className="self-center text-xl font-semibold whitespace-nowrap text-white">Admin Panel</span>
                  </p>
                  <ul className="space-y-2">
                     <li>
                        <Link href='/adminpage/Adminpage' className="flex items-center p-2 text-base font-normal rounded-lg text-white hover:bg-gray-600 hover:text-white border border-gray-300">
                           <FaBlogger className="w-6 h-6 text-red-400" />
                           <><span className="ml-3">Post blog</span></>
                        </Link>
                     </li>
                  </ul>
               </div>
            </aside>

            <div className="lg:ml-64 w-full border-2 border-dashed border-gray-700 h-[85vh] p-2 mt-5">
               <div className="rounded-lg ">
                  <ReactQuill value={text} onChange={handleChange} modules={modules} formats={formats} className="my-editor" />
               </div>
            </div>
         </div>





      </>
   )
}

export default Adminpage
