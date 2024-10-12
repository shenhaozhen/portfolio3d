import { Canvas } from "@react-three/fiber"

const Scene2 = () => {
  return (
    <Canvas camera={{position: [0, 0, 5]}}>
        <mesh position={[-1, 1.1, 0]}>
            <boxGeometry args={[1, 1, 1]}/>
            <meshBasicMaterial color="red"/>
        </mesh>
   </Canvas>
  )
}

export default Scene2