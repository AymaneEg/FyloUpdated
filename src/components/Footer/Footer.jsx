import React from 'react'
import "./Footer.css"
import logo from '../NavBar/logo.svg'
import email from "./icon-email.svg"
import location from "./icon-location.svg"
import phone from "./icon-phone.svg"


export default function Footer() {
  return (
    <div className='w-full bg-footer relative mt-60 top'>
      <div className='get'> 
         <h1 className='text-white text-5xl'>Get early access today</h1>
         <p className='text-gray-500 mx-8 my-2'>it only takes a minute to sign up and our free starter tier is extremeley generous . if you have any questions , our support team would be happy tp help you.</p>
          <div className='flex lg:flex-row flex-col justify-between px-8 my-8 gap-4'>
           <input type="text" className='w-full lg:w-3/5 h-9 rounded-full px-8' placeholder='email@example.com' id="" />
           <button className='h-9 bg-CyanColor px-8 rounded-full'>Get started for free</button>
          </div>
      </div> 

      <div className='p-24 sm:mt-28 pt-52'>
         <div className=''>
           <img src={logo} alt="" className='w-23 h-9' />
         </div>
         <div className='text-white flex justify-around flex-col lg:flex-row mt-8  gap-y-8'>
        
            <div className='flex  justify-around items-start lg:w-1/5'>
                <img src={location} alt="" /> 
                <p className='ml-4 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, non saepe velit impedit, excepturi sunt </p>
            </div>
            <div>
                <div className='flex items-center'>
                   <img src={phone} alt="" /> 
                   <p className='ml-4'>+1-543-123-4567</p>
                </div>
                <div className='flex mt-4 items-center'>
                   <img src={email} alt="" /> 
                   <p className='ml-4'>+1-543-123-4567</p>
                </div>
            </div>
            <div className='leading-6'>
                <a href="" className='block'>About Us</a>
                <a href="" className='block'>Jobs</a>
                <a href="" className='block'>Press</a>
                <a href="" className='block'>Blog</a>
            </div>
            <div className='leading-6'> 
                <a href="" className='block'>Contact Us</a>
                <a href="" className='block'>Terms</a>
                <a href="" className='block'>Privacy</a>
            </div>
         </div>
      </div>
    </div>
  )
}
