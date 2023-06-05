import React from 'react'
import logo from './logo.svg'
export default function NavBar() {
  return (
    <div className='w-full h-20 flex justify-between items-center px-5 py-4 absolute'>
       <div>
          <img src={logo} alt="" className='w-23 h-9' />
       </div>
       <div id='items' className='felx justify-between relative'>
          <a href="/" className='text-white mx-5 '>Features</a>
          <a href="/" className='text-white mx-5 '>Teams</a>
          <a href="/" className='text-white mx-5 '>Sign in </a>
       </div>
    </div>
  )
}
