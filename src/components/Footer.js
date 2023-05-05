import React from 'react'
import logo from '../assets/logoWhite.webp'

const Footer = () => {
  return (
    <div className='flex flex-col justify-center items-center text-white w-screen mt-20'>
        <div className='bg-black h-full w-full flex flex-col justify-center items-center'>
        <div className='bg-black mb-10 mt-10 h-full w-full flex justify-center items-center'>
           <h1 className='text-white text-3xl lg:text-4xl mt-4 lg:mt-5 mr-3 font-bold'>We Are</h1>
           <img className='lg:h-12 h-10' src={logo} alt="logo" />
           </div> 
           <div className='lg:w-3/4 w-full px-5 lg:px-0 flex justify-between items-center text-sm lg:text-lg font-medium'>
            <div>
                <ul>
                    <li>Website Design</li>
                    <li>Website Development</li>
                    <li>Digital Marketing</li>
                    <li>Social Media Marketing</li>
                </ul>
            </div>
            <div>
            <ul className='text-right lg:text-left'>
                <li className='lg:hidden'>SEO</li>
                <li className='hidden lg:flex'>Search Engine Optimization</li>
                <li>Google Ads</li>
                <li>Web Analytics</li>
                <li>Content Writing</li>
                <li>Logo Designing</li>
            </ul>
            </div>
           </div>
           <div className='px-2 text-xs text-center lg:text-sm mb-4 mt-14 lg:mt-20'>
            <h1>Copyright © 2022 Digital Marketing And Web Development Agency.  Terms & Conditions | Privacy Statement</h1>
           </div>
        </div>
    </div>
  )
}

export default Footer