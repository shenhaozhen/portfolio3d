import { useState, useRef} from "react"
import { motion } from "framer-motion"
import { CiMenuBurger } from "react-icons/ci"
import { IoMdClose } from "react-icons/io"
import { IconContext } from "react-icons";

import './style/menu.css'

const Menu = () => {

  const [isOpen, setIsOpen] = useState(false)

  const variants = {
    open: { 
      clipPath: "circle(1200px at 50px 50px)", 
      transition: {
        type: "spring",
        stiffness: 20,
      }
    },
    closed: { 
      clipPath: "circle(30px at 50px 50px)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    },
  }

  return (
    <motion.div className="menu w-[20vw] h-[100%] bg-white fixed top-0 left-0 z-[999] text-black grid place-content-center" animate={isOpen ? "open" : "closed"} variants={variants} initial={false}>
      <IconContext.Provider value={{size: "1.5rem", color: "black"}}>
       <button onClick={() => setIsOpen(!isOpen)} className="fixed top-[20px] left-[20px] translate-x-[55%] translate-y-[50%] w-[30px] h-[30px] toggle_btn"> {isOpen ? <IoMdClose/> : <CiMenuBurger/>} </button>
      </IconContext.Provider>
      <div className="flex flex-col justify-center items-center links text-2xl gap-[clamp(1vh,1rem,2vh)]">
        <a href="#part-a" className="item  hover:font-bold">
          Homepage
        </a>
        <a  href="#part-b" className="item hover:font-bold">
          Projects
        </a>
        <a  href="#part-c"className="item hover:font-bold">
          Portfolio
        </a>
        <a  href=""className="item hover:font-bold">
          Skills
        </a>
        <a  href=""className="item hover:font-bold">
          Contact
        </a>
        <a  href=""className="item hover:font-bold">
          About
        </a>
        <a  href=""className="item hover:font-bold">
          Portfolio
        </a>
      </div>
    </motion.div>
  )
}

export default Menu