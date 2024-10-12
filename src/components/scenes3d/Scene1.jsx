import { Canvas } from "@react-three/fiber"
import { motion } from "framer-motion-3d"


const Scene1 = () => {
  return (
    <Canvas camera={{position: [0, 1, 5]}}>
      <motion.group animate={{rotateY: Math.PI * 2}} transition={{duration: 15, repeat: Infinity, repeatType: 'mirror'}}>
        <motion.mesh position={[-1, 1.5, 0]} whileHover={{scale: 1.5}}>
            <boxGeometry args={[1, 1, 1]}/>
            <meshBasicMaterial color="red" wireframe={true}/>
        </motion.mesh>
        <motion.mesh position={[0, 0, 0]} whileHover={{scale: 0.5}} >
            <boxGeometry args={[1, 1, 1]}/>
            <meshStandardMaterial color="green" opacity={0.5} transparent/>
        </motion.mesh>
     </motion.group>
     <motion.mesh position={[-2, -2, 0]} animate={{x: 2, rotateX: 2 * Math.PI}} transition={{duration: 2, repeat: Infinity, repeatType: 'mirror'}}>
        <sphereGeometry args={[1]}/>
        <shaderMaterial 
          vertexShader=
          {`
            varying vec2 vUv;
            void main() {
              vUv = uv;
              gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
          `}
          fragmentShader=
          {`
            varying vec2 vUv;
            void main() {
              gl_FragColor = vec4(vUv, 1.0, 1.0);
            }
          `}/>
     </motion.mesh>
     <ambientLight intensity={0.5}/>
     <directionalLight position={[0, 3, 5]} intensity={1.5}/>
   </Canvas>
  )
}

export default Scene1