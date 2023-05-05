import React from 'react'
import "../css/Section4.css"
import supersaga from "../assets/supersaga.webp"
import highA from "../assets/highA.webp"
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

const Section4 = () => {
  return (
    <div className='flex section4 justify-center items-center flex-col h-full w-screen'>
        <div className='mt-10 lg:mt-20 mb-14 lg:mb-16'>
           <h1 className='text-2xl lg:text-3xl font-bold  underline underline-offset-8'> We Have Worked With </h1>
        </div>
        <div className='w-3/4'>          
               
               <div className="flex flex-col lg:flex-row h-96 justify-between items-center">
               <div className='companies flex flex-col justify-between items-center p-5 mb-14 lg:mb-0 lg:mr-20'>
                <div className='flex pb-8 justify-center items-center  font-black'>
                <img className='lg:h-16 h-10' src={highA} alt="highavenue" />
                <h1 className='text-xl lg:text-2xl'>Highavenue</h1>
                </div>
                 <p className='text-sm lg:text-base'>Highavenue is an IT services company providing services to US, Canada & Indian clients around AR, VR, Animations, Games, Web & Mobile applications.</p>
                 <div className='mt-10 flex py-2 lg:py-2 rounded-sm lg:mb-0 md:mb-16 mb-12  cursor-pointer groupBtn text-white  justify-start items-center'>
       <a href="https://highavenue.co/" target="_blank"><div className='mr-2 pl-4 font-semibold'>Explore</div></a> 
        <div className='flex items-center justify-center groupArr'>
        <div className='-mr-3 bg-white groupLine'></div>
        <div>
         <ArrowRightIcon/> 
        </div>
        </div>
        </div>
                </div>
                <div className='companies justify-start items-center flex flex-col px-5 mb-14 lg:mb-0 lg:mr-20'>
                <img className='lg:h-24 h-20 mb-5' src={supersaga} alt="supersaga" />
                 <p className='text-sm lg:text-base'>Supersaga is a creator platform where anyone can create & share high-quality 3D animations of up to 30 seconds, within minutes.</p>
                 <div className='flex mt-10 py-2 lg:py-2 rounded-sm lg:mb-5 md:mb-16 mb-12  cursor-pointer groupBtn text-white  justify-start items-center'>
               <a href="https://supersaga.app/" target="_blank"><div className='mr-2 pl-4 font-semibold'>Explore</div></a>
        <div className='flex items-center justify-center groupArr'>
        <div className='-mr-3 bg-white groupLine'></div>
        <div>
         <ArrowRightIcon/> 
        </div>
        </div>
        </div>
                </div>
                <div className='companies flex justify-start items-center flex-col p-5'>
                <img className='w-32 lg:w-40' src="https://reveldorsoftwares.com/static/media/logo.f88e54a32ab41758e3fe.png" alt="faceprep" />
                <p className='text-sm lg:text-base'>FACE Prep is one of India's leading online platforms for job preparation. Since inception in 2008, FACE Prep has been responsible for 1.5 million students kickstarting their careers in the tech sector.</p>
                <div className='flex my-5 py-2 lg:py-2 rounded-sm lg:mb-0 md:mb-16 mb-12  cursor-pointer groupBtn text-white  justify-start items-center'>
               <a href="https://reveldorsoftwares.com/" target="_blank"><div className='mr-2 pl-4 font-semibold'>Explore</div></a>
        <div className='flex items-center justify-center groupArr'>
        <div className='-mr-3 bg-white groupLine'></div>
        <div>
         <ArrowRightIcon/> 
        </div>
        </div>
        </div>
                </div>
                
                </div> 
        </div>
    </div>
  )
}

export default Section4