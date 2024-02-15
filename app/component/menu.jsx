"use client"

import React from 'react';
import { MdArrowDropDown } from "react-icons/md";
import { MdOutlineOpenInNew } from "react-icons/md";


const Menu = () => {

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };


  return (
    <div className='w-1/4 m-2 border-2 border-slate-900 bg-gradient-to-b from-slate-950  to-indigo-950 rounded-xl' style={{height: '96%'}}>
        <div className='p-4 m-2 rounded-lg bg-gradient-to-r  from-pink-500 to-orange-500 flex gap-10'>
            <h2 className='text-sm flex flex-row'>Sukriti.dev </h2>
            <MdArrowDropDown className='flex justify-end ml-20 text-xl text-slate-100' />
        </div>
        <a href="http://resume-sukritir29.vercel.app/">
        <div className='p-3 m-4 lg:mr-6 rounded-lg border-lime-700 flex gap-20  border gap-10 cursor-pointer hover:bg-gray-900'>
        <button className='text-xs flex flex-row'>Open Resume</button>
        <MdOutlineOpenInNew className='justify-end text-xs ml-4' />

        </div>
        </a>
        <div className='p-3 m-4 lg:mr-6 rounded-lg border-slate-700 border gap-10 cursor-pointer hover:bg-gray-900' onClick={() => scrollToSection("about")}>
        <button className='text-xs flex flex-row'>About</button>
        </div>
        <div className='p-3 m-4 lg:mr-6 rounded-lg border-slate-700 border gap-10 cursor-pointer hover:bg-gray-900' onClick={() => scrollToSection("experience")}>
        <button className='text-xs flex flex-row' >Experience</button>

        </div>
        <div className='p-3 m-4 lg:mr-6 rounded-lg border-slate-700 border gap-10 cursor-pointer hover:bg-gray-900' onClick={() => scrollToSection("skills")}>
        <button className='text-xs flex flex-row' >Skills</button>
        </div>
        <div className='p-3 m-4 lg:mr-6 rounded-lg border-slate-700 border gap-10 cursor-pointer hover:bg-gray-900' onClick={() => scrollToSection("doing")}>
        <button className='text-xs flex flex-row' >Investing Time In</button>
        </div>
        <div className='p-3 m-4 lg:mr-6 rounded-lg border-slate-700 border gap-10 cursor-pointer hover:bg-gray-900' onClick={() => scrollToSection("contact")}>
        <button className='text-xs flex flex-row' >Contact</button>
        </div>
        
    </div>
  )
}

export default Menu