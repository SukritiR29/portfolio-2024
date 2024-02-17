import React from 'react'
import Menu from './menu'
import Code from './codespace'

const Holder = () => {
  return (
    <div className='lg:border-2 lg:border-indigo-900 h-4/5 lg:w-5/6 w-fit lg:ml-20 rounded-xl lg:p-0 p-4 lg:flex lg:flex-row flex flex-col  '>
        <Menu/>
        <Code/>
    </div>
  )
}

export default Holder