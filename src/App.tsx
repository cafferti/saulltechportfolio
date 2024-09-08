// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './index.css'
import Navbar from './navbar'
import Intro from './Intro'
import About from './about'
import Skillspage from './skillspage'


function App() {
  return (
    <div className='overflow-x-hidden'>
        <Navbar/>
        <Intro/>
        <About/>
        <Skillspage/>
    </div>
  )
}

export default App
