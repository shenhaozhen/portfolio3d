import { Canvas } from "@react-three/fiber"
import * as THREE from "three"
import { Model as Cans } from "./Cans"
import { OrbitControls } from "@react-three/drei"

const Scene3 = () => {
  return (
    <Canvas camera={{position: [0, 16, 30]}}>
      <ambientLight intensity={1.5} color="white"/>
      <directionalLight position={[10, 10, 5]} intensity={2} color="white"/>
      <directionalLight position={[-10, 10, 5]} intensity={2} color="white"/>
      <directionalLight position={[0, -2, 5]} intensity={2} color="white"/>
      <Cans/>
      <OrbitControls />
    </Canvas>
  )
}

export default Scene3