import {motion, useScroll, useTransform, useMotionTemplate} from 'framer-motion'
import { images } from '../util/images'


const PartC = () => {
 
  const {scrollYProgress} = useScroll({ })

  const contentOpacity = useTransform(scrollYProgress, [0,0.2,0.6,1], [0, 0, 1, 1])
  const contentScale = useTransform(scrollYProgress, [0,0.2,0.6,1], [0.3, 0.3, 1, 1])
 
  let imagesDom = images.map((img, index) => {

    const ntop = useTransform(scrollYProgress, [0,0.1,0.45,1], [img.stop,img.stop, img.etop, img.etop])
    const nleft = useTransform(scrollYProgress, [0,0.1,0.45,1], [img.sleft, img.sleft,  img.eleft, img.eleft])
    const topTemp = useMotionTemplate`${ntop}%`
    const leftTemp = useMotionTemplate`${nleft}%`

    return <motion.img key={index} src={img.src} alt={img.alt} className="w-[10vw] h-[15vh] z-[20] absolute" style={{top: topTemp, left: leftTemp}}
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}  viewport={{ once: true }} />
  })


  let content = [
    ["html", "css", "vue","vite","tailwind", "three.js", "javascript", "nodejs", "websocket"],
    ["react", "typescript", "next.js","webgl", "blender","openai", "pinia", "redux", "zustand"]
  ];
  
  const createLi = (items) => {
    return items.map((item, index) => {
      return (
        <motion.li key={index} className="bg-[rgba(220,220,220,0.07)]  mb-[3vh] px-[5px] py-[2px]">
          {item}
        </motion.li>
      )
    })
  }
 

  /*const tmp = 
  <>
  <img src={htmlCssSrc} alt="html and css" className="w-[10vw] absolute top-24 left-8"/>
  <img src={jsSrc} alt="javascript" className="w-[10vw] absolute bottom-24 right-8"/>
  <img src={reactSrc} alt="react" className="w-[10vw] absolute top-24 right-8"/>
  <img src={vueSrc} alt="vue" className="w-[10vw] absolute bottom-24 left-8"/>
  <img src={nodeSrc} alt="node" className="w-[10vw] absolute top-24 left-48"/>
  <img src={nextSrc} alt="next" className="w-[10vw] absolute bottom-24 right-48"/>
  <img src={threeSrc} alt="threejs" className="w-[10vw] absolute top-48 right-48"/>
  <img src={tsSrc} alt="typescript" className="w-[10vw] absolute bottom-48 left-48"/>
  </>*/

  return (
    <motion.div className="w-full min-h-screen h-[300vh] bg-gradient-to-b from-[#232226] to-[#1c2d4d] text-white relative" id="part-c">
        <motion.div className="w-full h-screen bg-[#0c0c14] sticky top-0 text-white">
            {imagesDom}
            <motion.div className="absolute w-[20%] h-[75%] bg-[rgba(255,255,255,0.1)] z-[10] left-[22%] top-[15%] origin-center text-2xl px-[1.5vw] py-[3vh]"
                style={{opacity: contentOpacity, scale: contentScale}}>
                <motion.ul>
                  {createLi(content[0])}
                </motion.ul>
            </motion.div>
            <motion.div className="absolute w-[20%] h-[75%] bg-[rgba(255,255,255,0.1)] z-[10] left-[58%] top-[15%] origin-center text-2xl px-[1.5vw] py-[3vh]"
                style={{opacity: contentOpacity, scale: contentScale}}>
                <motion.ul>
                  {createLi(content[1])}
                </motion.ul>
            </motion.div>
        </motion.div>
    </motion.div>
  )
}

export default PartC

