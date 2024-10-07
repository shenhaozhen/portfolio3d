import { motion } from "framer-motion-3d"
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"

const Projects3D = () => {
  return (
    <div className="w-[88vw] h-[90vh] rounded-md flex flex-row justify-center items-center gap-[2vw]">

      <div className="flex flex-col w-[28vw] h-[90vh] justify-start items-center">
        <div className="w-[28vw] h-[65vh]">
            <Canvas camera={{position: [0, 0, 10]}}>
                <motion.group>
                    <motion.mesh position={[-1, 1.1, 0]}>
                        <boxGeometry args={[1, 1, 1]}/>
                        <meshBasicMaterial color="red"/>
                    </motion.mesh>
                    <motion.mesh position={[0, 0, 0]}>
                        <boxGeometry args={[1, 1, 1]}/>
                        <meshBasicMaterial color="green"/>
                    </motion.mesh>
                </motion.group>
                <OrbitControls />
            </Canvas>
        </div>
        <div className="w-[28vw] h-[25vh] bg-white">
                scene1 description
        </div>
      </div>

      <div className="flex flex-col w-[28vw] h-[90vh] justify-start items-center">
        <div className="w-[28vw] h-[30vh] bg-white">
                scene2 description
        </div>
        <div className="w-[28vw] h-[60vh]">
            <Canvas camera={{position: [0, 0, 10]}}>
                    <motion.mesh position={[-1, 1.1, 0]}>
                        <boxGeometry args={[1, 1, 1]}/>
                        <meshBasicMaterial color="red"/>
                    </motion.mesh>
                    <OrbitControls />
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
                <OrbitControls />
            </Canvas>
        </div>
        <div className="w-[28vw] h-[25vh] bg-white">
                scene3 description
        </div>
      </div>

    </div>
  )
}

export default Projects3D