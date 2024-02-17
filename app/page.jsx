import React from 'react'
import Holder from './component/Holder'
import { FiFigma, FiGithub, FiLinkedin, FiMail, FiMapPin, FiPhone, FiMenu} from "react-icons/fi";


const page = () => {
  return (
    <div className='bg-slate-950 h-screen lg:flex lg:flex-col lg:p-0 flex flex-col  '>
      <div className='lg:pt-7 lg:pb-5 lg:pl-20 pt-10 pl-20 '>
      <h1 className='text-2xl w-fit font-bold bg-gradient-to-r  from-pink-500  to-yellow-500  text-transparent bg-clip-text'>SUKRITI RAJORA</h1>
      <div className='lg:flex lg:flex-row lg:gap-5 lg:ml-1 lg:mb-0 flex flex-row gap-5 ml-8 mb-2'>
            <div className='tooltip' data-tip="sukritirajora@gmail.com">
        <a href="mailto:sukritirajora@gmail.com" className="hover:scale-125 transition-transform  flex flex-rows gap-2 justify-center">
              <FiMail className='mt-2 text-slate-400 text-md' />
            </a>
            </div>
            <div className='tooltip' data-tip="LinkedIn: Sukriti Rajora">
        <a href="https://www.linkedin.com/in/sukriti-rajora-48b4aa218" className="hover:scale-125 transition-transform  flex flex-rows gap-2 justify-center">
              <FiLinkedin className='mt-2 text-slate-400 text-md' />
            </a>
            </div>
            <div className='tooltip' data-tip="SukritiR29">
        <a href="https://github.com/SukritiR29" className="hover:scale-125 transition-transform  flex flex-rows gap-2 justify-center">
              <FiGithub className='mt-2 text-slate-400 text-md' />
            </a>
            </div>
            <div className='tooltip' data-tip="@sukritiRajora">
        <a href="http://figma.com/@sukritiRajora" className="hover:scale-125 transition-transform  flex flex-rows gap-2 justify-center">
              <FiFigma className='mt-2 text-slate-400 text-md' />
            </a>
            </div>
        </div>
        
      </div>
      <Holder/>
      
    </div>
  )
}

export default page