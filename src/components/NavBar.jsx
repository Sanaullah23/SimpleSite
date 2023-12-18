import React from 'react';
import logo from '../assets/images/logo.png';


const NavBar = () => {
  return (
    <div>
        
        <nav className='flex justify-between px-4 py-2 items-center border-blue-400 border-[2px] drop-shadow shadow-black shadow-sm'>
                <div className='flex gap-2 items-center'>
                    <img src={logo} alt=""  className='w-6'/>
                    <h1 className='font-bold'>CODELYTIX</h1>
                </div>
                <ul className='hidden md:flex gap-8  '>
                    <li>Help and support</li>
                    <li>Why Codelytix</li>
                </ul>
        </nav>
    </div>
  )
}

export default NavBar