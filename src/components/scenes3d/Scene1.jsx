import { Canvas } from "@react-three/fiber"
import { motion } from "framer-motion-3d"


const Scene1 = () => {
  return (
    <Canvas camera={{position: [0, 1, 5]}}>
      <motion.group whileHover={{scale: 1.5}}>
        <motion.mesh position={[-1, 1.1, 0]}>
            <boxGeometry args={[1, 1, 1]}/>
            <meshBasicMaterial color="red" wireframe={true}/>
        </motion.mesh>
        <motion.mesh position={[0, 0, 0]} >
            <boxGeometry args={[1, 1, 1]}/>
            <meshStandardMaterial color="green" opacity={0.5} transparent/>
        </motion.mesh>
     </motion.group>
     <motion.mesh position={[1, -2, 0]} animate={{x: 2}} transition={{duration: 2, repeat: Infinity, repeatType: 'reverse'}}>
        <sphereGeometry args={[1]}/>
        <motion.meshStandardMaterial color="blue" />
     </motion.mesh>
     <ambientLight intensity={0.5}/>
     <directionalLight position={[0, 3, 5]} intensity={1.5}/>
   </Canvas>
  )
}

export default Scene1