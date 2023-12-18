import React from 'react'
import { useState } from 'react'
import NavBar from '../components/NavBar'
import HeroSection from '../components/HeroSection'


const Home = () => {
  const [name , setName]=useState("");
  return (
    <div>
        

          <NavBar/>
          <HeroSection/>
    </div>
  )
}

export default Home