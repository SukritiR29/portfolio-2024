import React from 'react'
import Menu from './menu'
import Code from './codespace'

const Holder = () => {
  return (
    <div className='border-2 border-indigo-900 h-4/5 w-5/6 ml-20 rounded-xl flex '>
        <Menu/>
        <Code/>
    </div>
  )
}

export default Holder