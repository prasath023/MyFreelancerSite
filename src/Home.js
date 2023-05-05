import React, { useState } from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import Section1 from './components/Section1'
import Section3 from './components/Section3'
import Section4 from './components/Section4'
import ShowCase from './components/ShowCase'

const Home = ({userRequirements, handleAddToCart}) => {
 
  return (
    <div className='home flex flex-col justify-center items-center'>
        <Header userRequirements={userRequirements} />
        <Section1/>
        <ShowCase handleAddToCart={handleAddToCart} />
        <Section3/>
        <Section4/>
        <Footer/>
    </div>
  )
}

export default Home