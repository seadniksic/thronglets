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
//import SimulationRender from './simulation/sim_render.tsx'

import { useSim } from './hooks/useSim';

export default function App() {
return (
    <div className="main_viewport">
        <SimulationControl />
    </div>
    
)
}
