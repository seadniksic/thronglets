import { useRef, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Canvas, useFrame } from '@react-three/fiber'
import { extend } from '@react-three/fiber'
//import { OrbitControls } from 'three-stdlib'
//extend({ OrbitControls })
import { FirstPersonControls } from '@react-three/drei'
import SimulationControl from './simulation/sim_control.tsx' 

//import SimWorld from './sim_world.tsx'

// App.tsx
import { useSim } from './hooks/useSim';

export default function App() {
return (
    <div className="main_viewport">
        <SimulationControl />



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
