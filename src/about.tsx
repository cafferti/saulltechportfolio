import React from 'react'
import saulltechwavybg from './assets/singh-slNdTsSTZ9w-unsplash.jpg'
import aboutimg from './assets/aboutimg.svg'
import funnymouse from './assets/tailmouse.svg'
function about() {
  return (
    <div className='bg-[rgb(26,30,35)] w-[100%] h-[50rem] sm:h-[40rem]'>
      <img className='opacity-10 h-[100%] w-[100%]' src={saulltechwavybg} alt="" />
      <div className='  px-[5%] text-white absolute top-[100rem] sm:top-[80rem] md:top-[45rem] flex flex-col items-center'>
        <img src={funnymouse} alt="" />
        <div  className='sm:flex items-center justify-between'>
          <div className='md:max-w-[50%] md:mx-[5%]'>
            <h1 className='font-ubuntu  w-[fit-content] p-2 my-8 border-[#12F7D6] px-6 border-[3px] rounded-tl-3xl rounded-br-3xl'>About me</h1>
            <p className='font-ibm text-[12px] my-10 bg-[#292F36] p-4 rounded-3xl '> <span className='text-[#12F7D6]'>Hello! </span>
              My name is Sinan and I specialize in web developement that utilizes <span className='text-[#12F7D6]'>HTML</span>,  <span className='text-[#12F7D6]'>CSS </span>,  <span className='text-[#12F7D6]'>JS </span>, and  <span className='text-[#12F7D6]'>REACT</span> etc.
              I am a highly motivated individual and eternal optimist dedicated to writing clear, concise, robust code that works. Striving to never stop learning and improving.
              When I'm not coding, I am writing  <span className='text-[#12F7D6]'>Blogs</span>, reading, or picking up some new hands-on art project like  <span className='text-[#12F7D6]'>Photography</span>.
              I like to have my perspective and belief systems challenged so that I see the world through new eyes.
            </p>
          
        </div>

        <img className='w-[60%] sm:w-[40%] mx-[auto] sm:ml-7 mb-[-5rem] md:w-[25%] ' src={aboutimg} alt="" />
        </div>
      </div>
    </div>
  )
}

export default about