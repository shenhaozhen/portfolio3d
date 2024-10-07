import {useRef} from 'react'
import {motion, useScroll, useTransform, AnimatePresence} from 'framer-motion'
import starImgSrc from '../assets/stars.png'
import mtnImgSrc from '../assets/mountain.png'
import planet1Src from '../assets/planet1.jpeg'
import planet2Src from '../assets/planet2.jpeg'


const PartA = () => {

    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["start start", "end start"]
    })

    const yOffset = useTransform(
      scrollYProgress,
      // Map x from these values:
      [0, 1],
      // Into these values:
      ["0%", "300%"]
    )

    const yOffset1 = useTransform(
      scrollYProgress,
      // Map x from these values:
      [0, 1],
      // Into these values:
      ["0%", "400%"]
    )


    const xOffset = useTransform(
      scrollYProgress,
      // Map x from these values:
      [0, 1],
      // Into these values:
      ["0%", "50%"]
    )

    return (
    <motion.div className="main w-full min-h-screen max-h-screen relative overflow-hidden bg-gradient-to-b from-blue-950 to-blue-800" id="part-a" ref={ref}>
      <motion.div className="w-full h-screen absolute z-10 starrysky" style={{backgroundImage: `url(${starImgSrc})`, backgroundSize: 'cover', x: xOffset, y: xOffset}}>
      </motion.div>
      <div className="w-full h-[45vh] bottom-0 left-0 absolute z-20 mountain"  style={{backgroundImage: `url(${mtnImgSrc})`, backgroundSize: 'cover'}}>
      </div>
      <motion.div className="font-bold text-white text-[4rem] absolute z-[15] top-[30%] left-[35%]" style={{y: yOffset}}> 
        <p>What did I do?</p>
      </motion.div>
      <motion.div className="absolute z-[15] top-[15%] left-[20%] w-[10vw] h-[10vw]" style={{backgroundImage: `url(${planet1Src})`, backgroundSize: 'cover',  y: yOffset1}}>
      </motion.div>
      <motion.div className="absolute z-[15] top-[20%] left-[70%] w-[10vw] h-[10vw]" style={{backgroundImage: `url(${planet2Src})`, backgroundSize: 'cover',  y: yOffset1}}>
      </motion.div>
    </motion.div>
  )
}

export default PartA