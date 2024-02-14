import React from 'react'
import Holder from './component/Holder'
import { FiFigma, FiGithub, FiLinkedin, FiMail, FiMapPin, FiPhone, FiMenu} from "react-icons/fi";


const page = () => {
  return (
    <div className='bg-slate-950 h-screen'>
      <div className='pt-7 pb-5 lg:pl-20'>
      <h1 className='text-2xl font-bold bg-gradient-to-r  from-purple-600 via-yellow-300 to-yellow-500 via-yellow-400  text-transparent bg-clip-text'>SUKRITI RAJORA</h1>
      <div className='flex flex-row gap-5 ml-1'>
            <div className=''>
        <a href="mailto:sukritirajora@gmail.com" className="hover:scale-125 transition-transform  flex flex-rows gap-2 justify-center">
              <FiMail className='mt-2 text-slate-400 text-md' />
              {/* <p className='text-xs pt-0'>sukritirajora@gmail.com</p> */}
            </a>
            </div>
            <div className=''>
        <a href="https://www.linkedin.com/in/sukriti-rajora-48b4aa218" className="hover:scale-125 transition-transform  flex flex-rows gap-2 justify-center">
              <FiLinkedin className='mt-2 text-slate-400 text-md' />
              {/* <p className='text-xs pt-0'>LinkedIn: Sukriti Rajora</p> */}
            </a>
            </div>
            <div className=''>
        <a href="https://github.com/SukritiR29" className="hover:scale-125 transition-transform  flex flex-rows gap-2 justify-center">
              <FiGithub className='mt-2 text-slate-400 text-md' />
              {/* <p className='text-xs pt-0'>GitHub: SukritiR29</p> */}
            </a>
            </div>
            <div className=''>
        <a href="http://figma.com/@sukritiRajora" className="hover:scale-125 transition-transform  flex flex-rows gap-2 justify-center">
              <FiFigma className='mt-2 text-slate-400 text-md' />
              {/* <p className='text-xs pt-0'>Figma: @sukritiRajora</p> */}
            </a>
            </div>
        </div>
        
      </div>
      <Holder />
      
    </div>
  )
}

export default page