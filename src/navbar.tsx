import React from 'react'
import code from './assets/_.svg'
import insta from './assets/icon-instagram.svg'
import discord from './assets/discord.svg'
import github from './assets/github.svg'
import search from './assets/icon-search.svg'



function navbar() {
  return (
    <nav className='bg-[#292F36] text-white  items-center py-3 flex justify-between px-[5%] border-b-2 border-[#43454D] '>
        <div className=' flex text-center justify-between w-[15%] md:w-[30%] max-w-[170px] items-start align-middle'>
            <img src={code} alt="" />
           <p className='py-[4px] font-ibm font-medium hidden sm:block'>SauLLTecH</p>
        </div>
        <div className='flex w-[70%] justify-between'>
        <a href="">Home</a>
        <a href="">Blogs</a>
        <div className='flex bg-white rounded-lg px-2 w-[50px] sm:w-[40%]'>
        <input className='w-[100%] text-black' type="text" />
          <img src={search} alt="" />
        </div>

        <div className='flex'>
          <img src={insta} alt="" />
           <p className='hidden md:block px-1' >Instagram</p> 
        </div>

        <div  className='flex'>
        <img src={discord} alt="" />
           <p className='hidden md:block px-1'>Discord</p> 
        </div>
        <div  className='flex'>
          <img src={github} alt="" />
           <p className='hidden md:block px-1'>Github</p> 
        </div>



        </div>
    </nav>
  )
}

export default navbar