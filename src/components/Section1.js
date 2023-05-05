import React from 'react'
import "../css/Section1.css"
import Swiper from './Swiper'
import cat1 from '../assets/cat1.jpg'
import cat2 from '../assets/cat2.jpg'
import paw from '../assets/cursor.png'



const Section1 = () => {
  return (
    <div className='w-screen flex justify-between items-center'>
      <div className='w-full  h-full flex flex-col lg:flex-row mt-5 mr-5 justify-between items-center'>
        {/* <div className='absolute div1 mt-32 z-10 bg-green-200 h-32 w-32'>
          
        </div>
        <div className='absolute div3 mt-44 ml-28 z-20 bg-gray-300 h-16 w-64'>

        </div>
        <div className='absolute div3 mt-16 ml-56 z-10 bg-blue-700 h-24 w-24'>

        </div>
        <div className='absolute div2 mt-96 -z-10 bg-yellow-500 h-56 w-56'>

        </div>
        <div className='absolute div3 mt-96 ml-52 z-10 bg-blue-700 h-32 w-32'>

        </div>
        <div className='absolute div4 mt-96 -mb-72 ml-44 z-10 bg-green-700 h-32 w-32'>

        </div> */}
        {/* <div className='absolute div5 ml-2 z-10 bg-green-700 h-24 w-40'>

        </div> */}
        <div className='lg:w-4/6 px-5 -mt-20 lg:mt-0  lg:px-0 w-full lg:ml-20 lg:pr-10 '>
          
          <Swiper/>
        </div>
       <div className='container1 -mt-24 lg:mt-0 w-3/4 lg:w-2/4 lg:mr-10'>
        {/* <ul className='ul font-semibold px-7 pt-3 mt-3'>
          <li className="mb-6">
          Website Design & Development
          </li>
          <li className="mb-6">
          App Design & Development
          </li>
          <li className="mb-6">
          Digital Marketing 
          </li>
          <li className="mb-6">
          Social Media
          </li>
          <li className="mb-6">
          Search Engine Optimization – SEO  
          </li>
          <li className="mb-6">
          Google Ads 
          </li>
          <li className="mb-6">
          Email Marketing 
          </li>
          <li className="mb-6">
          Web Analytics 
          </li>
          <li className="mb-6">
          Content Marketing  
          </li>
        </ul> */}
        <div className='absolute mr-56 mb-80 -mt-2'>
            <img className='opacity-10 lg:h-10 lg:w-10 h-9 w-9 -rotate-45 ' src={paw} alt="" />
          </div>
          <div className='absolute ml-16 mt-3'>
            <img className='opacity-10 lg:h-10 lg:w-10 h-9 w-9 z-50 -rotate-45 ' src={paw} alt="" />
          </div>
        <div className='p-5 overflow-hidden relative  text-lg font-semibold  flex flex-col justify-center items-center'>
          
          <h1 className='lg:text-2xl text-xl font-bold mb-7 underline-offset-8 underline mt-5'>
          We Will Help You 
          </h1>
          <p className=' text-center textSize text-gray-700 font-normal'>
          Take your business online; create your presence on various online platforms like Google, Facebook, Twitter, Instagram etc. We will launch your innovative products and services, help you gain an edge over your competitors in digital world.
        </p>
        </div>
       </div>

      </div>
    </div>
  )
}

export default Section1