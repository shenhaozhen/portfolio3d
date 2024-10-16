import { Canvas, useThree, useFrame } from "@react-three/fiber"
import {OrbitControls} from "@react-three/drei"
import * as THREE from "three"
import { vertext_shader as p_vertex } from "./shader/v_shader_p"
import { fragment_shader as p_fragment } from "./shader/f_shader_p"
import { useRef } from "react"

const ThreeHelper = () => {
  const {scene} = useThree()
  const children = scene.children;
  children.forEach((child) => {
    console.log(child)
  })

  useFrame((state, delta) => {
    children.forEach((child) => {
      if (child.material.uniforms) {
        child.material.uniforms.uTime.value += delta * 0.1
      }
    })
  })
 }

// particles
const Scene2 = ({width, height}) => {
  
  

  const particles = {}
  
  const sphere = new THREE.SphereGeometry(2);
  const cube = new THREE.BoxGeometry(2, 2, 2, 8, 8, 8);

  const maxCount = Math.max(sphere.attributes.position.count, cube.attributes.position.count);
  const shape1 = sphere.attributes.position.array;
  const shape2 = cube.attributes.position.array;
  
  particles.geometry = new THREE.BufferGeometry();
  const shape1Vertices = new Float32Array(maxCount * 3);
  const shape2Vertices = new Float32Array(maxCount * 3);
  
  for (let i = 0; i < maxCount; i++) {
    let i3 = i * 3;
    if ( i < sphere.attributes.position.count ) {
      shape1Vertices[i3 + 0] = shape1[i3 + 0];
      shape1Vertices[i3 + 1] = shape1[i3 + 1];
      shape1Vertices[i3 + 2] = shape1[i3 + 2];
    } else {
      shape1Vertices[i3 + 0] = 0;
      shape1Vertices[i3 + 1] = 0;
      shape1Vertices[i3 + 2] = 0;
    }
  }

  
  for (let i = 0; i < maxCount; i++) {
    let i3 = i * 3;
    if ( i < cube.attributes.position.count ) {
      shape2Vertices[i3 + 0] = shape2[i3 + 0];
      shape2Vertices[i3 + 1] = shape2[i3 + 1];
      shape2Vertices[i3 + 2] = shape2[i3 + 2];
    } else {
      const randomIndex = Math.floor(Math.random() * cube.attributes.position.count);
      shape2Vertices[i3 + 0] = shape2[randomIndex * 3 + 0];
      shape2Vertices[i3 + 1] = shape2[randomIndex * 3 + 1];
      shape2Vertices[i3 + 2] = shape2[randomIndex * 3 + 2];
    }
  }

  particles.geometry.setAttribute("position", new THREE.BufferAttribute(shape1Vertices, 3));
  particles.geometry.setAttribute("positionTarget", new THREE.BufferAttribute(shape2Vertices, 3));

  particles.material = new THREE.ShaderMaterial({
   vertexShader: p_vertex,
   fragmentShader:p_fragment,
   uniforms: {uResolution: new THREE.Uniform(new THREE.Vector2(width * window.devicePixelRatio, height * window.devicePixelRatio)), 
              uSize: new THREE.Uniform(0.1),
              uTime: new THREE.Uniform(0.0)},
   transparent: true, 
   blending : THREE.AdditiveBlending,
   depthWrite : false,
  })
 

  return (
    <Canvas camera={{position: [-2, 0, 4]}}>
      <points position={[0, 0, 0]} geometry={particles.geometry} material={particles.material}>
      </points>
      <ThreeHelper />
   </Canvas>
  )
}

export default Scene2