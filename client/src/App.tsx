import { useRef, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Canvas, useFrame } from '@react-three/fiber'
import { extend } from '@react-three/fiber'
import { OrbitControls } from 'three-stdlib'
extend({ OrbitControls })

//import SimWorld from './sim_world.tsx'

// App.tsx
import { useSim } from './hooks/useSim';

export default function App() {
return (
    <div className="main_viewport">

         <OrbitControls />
        <Canvas>
          <mesh>
            <sphereGeometry args={[2, 32, 16]} />
            <meshPhongMaterial />
          </mesh>
          <ambientLight intensity={0.1} />
          <directionalLight position={[0, 0, 5]} color="red" />
        </Canvas>
    </div>
    
)
}

//export default function App() {
  //const sim = useSim();

  //useEffect(() => {
    //if (sim) {
      //console.log('Simulation loaded:', sim);
      //// sim._main(); or whatever entry point you use
    //}
  //}, [sim]);

  //return (
    //<div>
      
      //<SimWorld />
    //</div>
  //);
//}

//export default App
