import React, { useEffect, useState } from 'react'
import logo from '../assets/logoBlack.webp'
import "../css/Header.css"
import MenuIcon from '@mui/icons-material/DragHandle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from "react-router-dom";

const Header = ({userRequirements}) => {
  const [cart, isCart]=useState(false);
  useEffect(() => {
   userRequirements.length > 0 && isCart(true)
  }, [userRequirements])
  
  return (
    <div className='flex lg:py-5 lg:pb-5 py-4 header justify-center lg:justify-between w-screen text-white bg-black  items-center'>
        <div className='w-1/4 flex cursor-pointer ml-5 lg:hidden items-center justify-start'>
          <div className='menu lg:hidden px-0 h-10 w-10 flex flex-col justify-center items-center'>
          <div className='menuLine bg-black groupLine1'></div>
          <div className='menuLine bg-black groupLine1'></div>
          <div className=' bg-black groupLine1'></div>
          </div>
        </div>
        <div className='flex w-2/4 lg:w-1/4 justify-center  lg:justify-center items-center'>
            <img className='h-9 lg:h-12' src={logo} alt="logo" />
        </div>
        
        <div className='w-2/4 hidden lg:flex justify-center items-center'>
          <ul className='flex text-sm text-black justify-between w-3/4 items-center'>
            <li className='cursor-pointer hover:font-normal hover:text-lg hover:mb-3 transition-all duration-300 hover:underline underline-offset-8'>Blogs</li>
            <li className='cursor-pointer hover:font-normal hover:text-lg hover:mb-3 transition-all duration-300 hover:underline underline-offset-8'>Service</li>
            <li className='cursor-pointer hover:font-normal hover:text-lg hover:mb-3 transition-all duration-300 hover:underline underline-offset-8'>Team</li>
          </ul> 
        </div>
        <div className='flex relative justify-center items-center'>
          {
          cart && <div className='text-xs absolute mb-10 ml-9 rounded-full h-5 w-5 bg-red-600 cursor-pointer flex justify-center items-center text-white'>
            {userRequirements.length}
          </div>
          }
         <Link className='outline-none' to="/cart">
          <div className='p-3 rounded-full btn1 cursor-pointer flex justify-center items-center text-black'>
        <ShoppingCartIcon/>
        </div>
        </Link>
        </div>
        
        <div className='mr-5 flex  justify-end items-center'>
          
        <Link className='outline-none' to="/signin"><div className='cursor-pointer btn1 px-3 py-2 lg:px-5 lg:py-2 text-sm lg:text-base text-black font-medium flex justify-center items-center'>SignIn</div></Link>
        </div>
        <div>

        </div>
    </div>
  )
}

export default Header