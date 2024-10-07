import { useEffect} from 'react'
import {motion, useAnimate, useMotionValue, useMotionTemplate} from 'framer-motion'
import './style/partb.css'

const PartB = () => {

  const [scope, animate] = useAnimate()

  let colors = ["#0000ff", "#00ffff", "#00ff00", "#ffff00", "#ff0000"];
  let color = useMotionValue(colors[0]);
  let bgStyle = useMotionTemplate`radial-gradient(105% 115% at 50% 0%, #111111 50%,  ${color} 95%, ${color} 100%)`
  let boxShadow = useMotionTemplate`0 4px 18px ${color}`
  let bgStyleAfter = useMotionTemplate`radial-gradient(105% 115% at 50% 100%, #232226 0%, #232226 50%,  ${color} 95%, ${color} 100%)`
  //let bgStyleAfter = useMotionTemplate`linear-gradient(to bottom, ${color},  #232226)`

  const variants = {
    initial: {
      opacity: 0,
      x: -100
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: "easeInOut"
      }
    }
  }

  const variants1 = {
    initial: {
      opacity: 0,
      x: 100,
      y: 50
    },
    animate: {
      opacity: 1,
      x: 100,
      y: 20,
      transition: {
        duration: 1,
        ease: "easeInOut"
      }
    }
  }

  const variants2 = {
    initial: {
      opacity: 0,
      x: 100
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: "easeInOut"
      }
    }
  }

  const imageAnimationHelper = (class1, class2,class3, z1, z2,z3) => {
    const p1 = animate(class1, {x: "-100%"}, {duration: 3, delay:3})
    //const p2 = animate('.img1', {x: "100%"}, {duration: 3, delay: 4.1})
    p1.then(()=>{
      const p2 = animate(class2, {x: "-100%"}, {duration: 3, delay:3})
      p2.then(()=>{
         animate(class1, {zIndex: z1 - 20})
         const p3 = animate(class2, {zIndex: z2 - 20})
         p3.then(()=>{
            const p4 = animate(class1 + "," + class2, {x: "0%"})
            p4.then(()=>{
               const p5 = animate(class3, {x: "-100%"}, {duration: 3, delay:3})   
               p5.then(()=>{
                  animate(class1, {zIndex: z1})
                  animate(class2, {zIndex: z2})
                  const p6 = animate(class3, {x: "0%"})
                  p6.then(()=>{
                     imageAnimationHelper(class1, class2, class3, z1, z2, z3);
                  })
               })
            })
         })
      })
    })
  } 

  useEffect(() => {
    animate(color, colors, {ease: "easeInOut", duration: 10, repeat: Infinity, repeatType: "mirror"})
  }, [])

  useEffect(() => {
    imageAnimationHelper('.img1', '.img2', '.img3', 30,20,10)
  }, [])

  return (
    <>
    <motion.div className="w-full min-h-screen text-white flex flex-row items-center justify-center relative mb-[0px]"  
                initial="initial" animate="animate" id="part-b" style={{backgroundImage: bgStyle}}> 
      
      <motion.div className="w-[40%] flex flex-col justify-start items-center gap-[1vh]" > 
        <motion.div className="w-[100%]" variants={variants}>
          <motion.h1 className="font-bold text-[4rem]"> Frontend and WebGL Developer </motion.h1>
        </motion.div>
        <motion.div className="w-[100%] flex flex-row justify-start items-center gap-[4vw] pl-[1vw]" variants={variants1} style={{color: color}}>
            <motion.button className="border-solid border-2 rounded-md px-[1vw] py-[1vh] font-bold hover:text-white hover:font-bold" style={{borderColor: color, boxShadow: boxShadow}}> Projects </motion.button>
            <motion.button className="border-solid border-2 rounded-md px-[1vw] py-[1vh] font-bold hover:text-white hover:font-bold" style={{borderColor: color, boxShadow: boxShadow}}> Skills </motion.button>
        </motion.div>
      </motion.div>

      <motion.div ref={scope} className="w-[48vw] h-[27vw] relative overflow-hidden" variants={variants2}>
         <motion.div className="w-full h-full absolute bg-[url('/hero1_new.jpeg')] bg-cover bg-center bg-no-repeat img1 z-30">        
         </motion.div>
         <motion.div className="w-full h-full absolute bg-[url('/hero2_new.jpeg')] bg-cover bg-center bg-no-repeat img2 z-20" >         
         </motion.div>
         <motion.div className="w-full h-full absolute bg-[url('/hero3_new.jpeg')] bg-cover bg-center bg-no-repeat img3 z-10" >
         </motion.div>
      </motion.div>

    </motion.div>

    </>
  )
}

export default PartB