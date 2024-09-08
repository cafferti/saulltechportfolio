import React from 'react'
import saulltechsvg from './assets/chris-ried-ieic5Tq8YMk-unsplash.jpg'
import saulltechcode from './assets/_.svg'
import saulltechmouse from './assets/tailmouse.svg'
import saulltechlinesvg from './assets/bulkline.svg'
import saulltechmonitor from './assets/icon-monitor.svg'
import saulltechphone from './assets/icon-smartphone.svg'
import saulltechhtml from './assets/Icon-html.svg'
import saulltechcss from './assets/Icon-css.svg'
import saulltechjs from './assets/Icon-js.svg'
import saulltechreact from './assets/Icon-react.svg'

function skillspage() {
  return (
    <div className='bg-[#292F36] sm:h-[68rem]  text-white md:h-[40rem]  h-[70rem] w-[100%] '>
      <img className='opacity-5 h-[100%] w-[100%]' src={saulltechsvg} alt="" />
      <div className='absolute w-[100%] top-[150rem] sm:top-[115rem] md:top-[79rem]'>
        <img className='hidden md:block w-[100%] h-[5rem] md:py-0' src={saulltechmouse} alt="" />
        <img className='absolute top-[] right-[22%] w-[10%]  hidden md:block' src={saulltechcode} alt="" />
        <div className='flex flex-col items-center'>
          <h1 className=' md:pb-0 md:mb-0 md:mt-[0rem] text-[4rem] w-{100%} font-ubuntu text-center mt-4 text-[#12F7D6] mb-0 pb-0'>skills</h1>
          <img className='  w-[10rem] w-100% mt-0 pt-0' src={saulltechlinesvg} alt="" />
          <p className='text-white font-ibm text-[14px] py-3 text-center'>I am striving to never stop learning and improving</p>
        </div>
        <div className='md:flex md:mx-[25%] justify-between md:pt-[1rem] '>
        <div className=' md:w-[45%] my-[3rem] md:my-0 bg-[#98FAEC] border-l-[0.5rem] border-[#0C73B8]  rounded-lg text-[#1A1E23] text-center mx-[auto] w-[60%] py-4 item-center'>
          <img className='inline' src={saulltechmonitor} alt="" />
          <h2 className='font-ubuntu text-2xl'>Wed Developement</h2>
          <p className='font-ibm'>HTML·CSS·JS·REACT</p>
        </div>
        <div className='md:w-[45%] bg-[#98FAEC] border-l-[0.5rem] border-[#0C73B8]  rounded-lg text-[#1A1E23] text-center mx-[auto] w-[60%] py-4 item-center'>
          <img className='inline' src={saulltechphone} alt="" />
          <h2 className='font-ubuntu text-2xl'>App Developement</h2>
          <p className='font-ibm'>iOS·Android</p>
        </div>
        </div>

        <div className=' md:flex md:justify-center'>
          <section className='flex items-center text-3xl justify-around mt-[3rem] md:px-[3rem]'>
            <div className='text-center text-[#E54F26] md:px-[3rem]'>
              <img className='py-1' src={saulltechhtml} alt="" />
              <p>HTML</p>
            </div>
            <div className='text-center text-3xl text-[#0C73B8] md:px-[3rem]'>
              <img className='py-1' src={saulltechcss} alt="" />
              <p>CSS</p>
            </div>
          </section>
          <section className='flex items-center text-3xl justify-around mt-[3rem] md:px-[3rem]'>
            <div className='text-center text-[#E7A020] md:px-[3rem] '>
              <img className='py-1' src={saulltechjs} alt="" />
              <p>JS</p>
            </div>
            <div className='text-center text-3xl text-[#28A9E0] md:px-[3rem]'>
              <img className='py-1' src={saulltechreact} alt="" />
              <p>REACT</p>
            </div>
          </section>

        </div>

      </div>
    </div>
  )
}

export default skillspage