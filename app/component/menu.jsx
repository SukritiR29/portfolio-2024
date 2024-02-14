import React from 'react'
import { MdArrowDropDown } from "react-icons/md";


const Menu = () => {
  return (
    <div className='w-1/4 m-2 border-2 border-slate-900 bg-gradient-to-b from-slate-950  to-indigo-950 rounded-xl' style={{height: '96%'}}>
        <div className='p-2 m-2 rounded-lg bg-gray-900 flex gap-10'>
            <h2 className='text-sm flex flex-row'>Sukriti.dev </h2>
            <MdArrowDropDown className='flex justify-end ml-20 text-xl text-slate-400' />
        </div>
        
    </div>
  )
}

export default Menu