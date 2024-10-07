import { useState } from 'react'
import PartA from './components/PartA'
import PartB from './components/PartB'
import PartC from './components/PartC'
import Projects from './components/Projects'
import Menu from './components/Menu'
import './App.css'

function App() {


  return (
    <>
      <div className='w-full min-w-[640px] min-h-screen flex flex-col items-center sm:items-start relative bg-teal-200'>
        <Menu/>
        <PartB/>
        <PartC/>
        <Projects/>
      </div>
    </>
  )
}

export default App
