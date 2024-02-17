"use client"

import React, {useState} from 'react';
import { MdArrowDropDown } from "react-icons/md";
import { MdOutlineOpenInNew } from "react-icons/md";


const Menu = () => {

  const [isOpen, setIsOpen] = useState(true); 

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={` lg:w-1/4 lg:m-2 w-4/5 ml-2 lg:border-2 border-slate-900 lg:bg-gradient-to-b from-slate-950  to-indigo-950 rounded-md lg:rounded-xl`}> {/* Adjust height based on isOpen state */}
    <div className='hidden lg:flex p-4 m-2 rounded-lg bg-gradient-to-r  from-pink-500 to-orange-500 flex gap-10' onClick={() => setIsOpen(!isOpen)}>
      <h2 className='text-sm flex flex-row'>Sukriti.dev</h2>
      <MdArrowDropDown className={`flex justify-end ml-20 text-xl text-slate-100 ${isOpen ? 'transform rotate-180' : ''}`} /> {/* Rotate arrow if menu is open */}
    </div>
    {isOpen && ( 
      <div className='relative flex-col'>
        <a href="http://resume-sukritir29.vercel.app/">
          <div className='lg:p-3 p-3 lg:m-4 lg:mr-6 rounded-lg border-lime-700 flex gap-20 border gap-10 cursor-pointer hover:bg-lime-700 '>
            <button className='text-xs flex flex-row'>Open Resume</button>
            <MdOutlineOpenInNew className='justify-end text-xs lg:ml-4 ml-20' />
          </div>
        </a>
        <div className='hidden lg:block p-3 m-4 lg:mr-6 rounded-lg border-slate-700 border gap-10 cursor-pointer hover:bg-gray-900' onClick={() => scrollToSection("about")}>
          <button className='text-xs flex flex-row'>About</button>
        </div>
        <div className='hidden lg:block p-3 m-4 lg:mr-6 rounded-lg border-slate-700 border gap-10 cursor-pointer hover:bg-gray-900' onClick={() => scrollToSection("experience")}>
          <button className='text-xs flex flex-row' >Experience</button>
        </div>
        <div className='hidden lg:block p-3 m-4 lg:mr-6 rounded-lg border-slate-700 border gap-10 cursor-pointer hover:bg-gray-900' onClick={() => scrollToSection("skills")}>
          <button className='text-xs flex flex-row' >Skills</button>
        </div>
        <div className='hidden lg:block p-3 m-4 lg:mr-6 rounded-lg border-slate-700 border gap-10 cursor-pointer hover:bg-gray-900' onClick={() => scrollToSection("doing")}>
          <button className='text-xs flex flex-row' >Investing Time In</button>
        </div>
        <div className='hidden lg:block p-3 m-4 lg:mr-6 rounded-lg border-slate-700 border gap-10 cursor-pointer hover:bg-gray-900' onClick={() => scrollToSection("contact")}>
          <button className='text-xs flex flex-row' >Contact</button>
        </div>
      </div>
    )}
  </div>
);
}

export default Menu