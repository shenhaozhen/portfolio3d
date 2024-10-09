import { motion } from "framer-motion-3d"
import { Canvas } from "@react-three/fiber"
import Scene1 from "./scenes3d/Scene1"


const Projects3D = () => {
  return (
    <div className="w-[88vw] h-[90vh] flex flex-row justify-center items-center gap-[2vw] font-bold text-3xl text-white">

      <div className="flex flex-col w-[28vw] h-[90vh] justify-start items-center">
        <div className="w-[28vw] h-[65vh]">
            <Scene1/>
        </div>
        <div className="w-[28vw] h-[25vh] text-center">
              3D物体动画
        </div>
      </div>

      <div className="flex flex-col w-[28vw] h-[90vh] justify-start items-center">
        <div className="w-[28vw] h-[30vh] text-center">
                粒子效果
        </div>
        <div className="w-[28vw] h-[60vh]">
            <Canvas camera={{position: [0, 0, 10]}}>
                    <motion.mesh position={[-1, 1.1, 0]}>
                        <boxGeometry args={[1, 1, 1]}/>
                        <meshBasicMaterial color="red"/>
                    </motion.mesh>

            </Canvas>
        </div>
      </div>

     <div className="flex flex-col w-[28vw] h-[90vh] justify-start items-center">
        <div className="w-[28vw] h-[65vh] ">
            <Canvas camera={{position: [0, 0, 10]}}>
                <motion.mesh position={[0, 0, 0]}>
                    <boxGeometry args={[1, 1, 1]}/>
                    <meshBasicMaterial color="green"/>
                </motion.mesh>

            </Canvas>
        </div>
        <div className="w-[28vw] h-[25vh] text-center">
                3D模型
        </div>
      </div>

    </div>
  )
}

export default Projects3D