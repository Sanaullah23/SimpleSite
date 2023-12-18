import React from 'react'
import bg from '../assets/images/bg.svg'

const HeroSection = () => {
  return (
    <>
    <div className='m-auto flex flex-col items-center justify-center md:flex md:flex-row md:justify-between'>
        <div className='flex flex-col  gap-8 items-start ml-16 mt-4 pt-8'>
        <h1 className='font-bold text-5xl leading-normal '> <span className='bg-violet-300 rounded-full'>Revolutionize</span> Your <br />Software <span className='bg-violet-300 rounded-full'>Engineering</span> <br />Experience</h1>
        <p className='text-xl'>Unlock the full potential of your software <br />engineering teams with Codeltix</p>
        <h2 className='font-medium text-2xl'>Where Engineering Meets <br /> Analytics</h2>
        <button className='bg-indigo-400 text-base rounded-md px-40 py-4 hover:shadow-xl shadow-black'>Get Start</button>
       </div>
       <img src={bg} alt="" className="hidden md:block fixed bottom-0 right-0 h-screen object-cover top-24" />

     
    </div>
    </>
  )
}

export default HeroSection