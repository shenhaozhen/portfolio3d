import {motion, useAnimate} from 'framer-motion'
import imgSrc1 from '/3d_1.png'
import imgSrc3 from '/2d_1_1.jpg'
import { FaArrowLeft, FaArrowRight  } from "react-icons/fa"
import { IconContext } from "react-icons";

import Projects3D from './Projects3D'

import "./style/projects.css"
const Projects = () => {

  const [scope, animate] = useAnimate()

  const toPrevious = () => {
      animate(scope.current, {x: "calc(0vw)"}, {duration: 1, ease: "easeInOut"})
  }

  const toNext = () => {
     animate(scope.current, {x: "calc(-200vw)"}, {duration: 1, ease: "easeInOut"})
  }

  const toMiddle = () => {
     animate(scope.current, {x: "calc(-100vw)"}, {duration: 1, ease: "easeInOut"})
  }
  
  return (
    <div className="w-full min-h-screen relative overflow-x-hidden">
        <motion.div className="w-[300%] h-screen flex flex-row justify-start items-center projects absolute top-0 left-0" ref={scope} style={{x: "calc(-100vw)"}}>
          
          <div className="w-screen h-screen bg-violet-300 pt-[2vh] flex flex-row justify-center items-center relative">
              <button className="absolute top-[50%] right-[2vw] w-[4vw] h-[4vw] bg-slate-400 rounded-[50%] flex justify-center items-center opacity-25 hover:opacity-100" onClick={toMiddle}>
                <IconContext.Provider value={{ color: "black", size: "2.5em" }}>
                  <FaArrowRight/>
                </IconContext.Provider>
             </button>
          </div>
          <div className="w-screen h-screen flex flex-row justify-center items-center gap-[10vw] text-xl"> 
            <div className="w-[35vw] h-[80vh] bg-[rgba(255,255,255,0.8)] bg-cover bg-center overflow-hidden relative context_left" style={{backgroundImage: `url(${imgSrc3})`}}>
              <div className="w-full h-full bg-[rgba(0,0,0,0.4)] backdrop-blur-md absolute top-0 left-0 text-white flex flex-row justify-end items-center px-[2vh]"
                   onClick={toPrevious}>
                      <p> 2d react/vue projects </p>
              </div>
            </div>
            <div className="w-[35vw] h-[80vh] bg-[rgba(255,255,255,0.8)] bg-cover bg-center overflow-hidden relative context_right" style={{backgroundImage: `url(${imgSrc1})`}}>  
              <div className="w-full h-full bg-[rgba(0,0,0,0.4)] backdrop-blur-md absolute top-0 left-0 text-white flex flex-row justify-start items-center px-[2vh]"
                   onClick={toNext}>
                     <p> 3d projects using threejs </p>
              </div>
            </div>
          </div>
          <div className="w-screen h-screen bg-lime-300 pt-[2vh] flex flex-row justify-center items-center relative">
                <button className="absolute top-[50%] left-[1vw] w-[4vw] h-[4vw] bg-slate-400 rounded-[50%] flex justify-center items-center opacity-25 hover:opacity-100" onClick={toMiddle}> 
                  <IconContext.Provider value={{ size: "2.5vw", color: "black" }}>
                    <FaArrowLeft/>
                  </IconContext.Provider>
                </button>
              <Projects3D />
          </div>
        </motion.div>
    </div>
  )
}

export default Projects