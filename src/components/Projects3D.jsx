import { motion } from "framer-motion-3d"
import { Canvas } from "@react-three/fiber"
import Scene1 from "./scenes3d/Scene1"
import Scene2 from "./scenes3d/Scene2"
import Scene3 from "./scenes3d/Scene3"
import { useEffect, useRef, useState } from "react"



const Projects3D = () => {
 
  const scene1Ref = useRef(null)
  const scene2Ref = useRef(null)
  const scene3Ref = useRef(null)
  const [scene2Size, setScene2Size] = useState({width: 0, height: 0})

  useEffect(() => {
    setScene2Size({width: scene2Ref.current.clientWidth, height: scene2Ref.current.clientHeight})
  }, [])

  return (
    <div className="w-[88vw] h-[90vh] flex flex-row justify-center items-center gap-[2vw] font-bold text-3xl text-white">

      <div className="flex flex-col w-[28vw] h-[90vh] justify-start items-center">
        <div className="w-[28vw] h-[65vh] bg-white">
            <Scene1/>
        </div>
        <div className="w-[28vw] h-[25vh] text-center">
              3D物体动画
        </div>
      </div>

      <div className="flex flex-col w-[28vw] h-[90vh] justify-start items-center">
        <div className="w-[28vw] h-[30vh] text-center flex flex-row justify-center items-center">
                粒子效果
        </div>
        <div className="w-[28vw] h-[60vh] bg-black" ref={scene2Ref}>
            <Scene2 width={scene2Size.width} height={scene2Size.height}/>
        </div>
      </div>

     <div className="flex flex-col w-[28vw] h-[90vh] justify-start items-center">
        <div className="w-[28vw] h-[65vh] bg-slate-400">
            <Scene3/>
        </div>
        <div className="w-[28vw] h-[25vh] text-center">
                3D模型
        </div>
      </div>

    </div>
  )
}

export default Projects3D