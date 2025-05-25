import { useFrame } from '@react-three/fiber';
import { useEffect } from "react";
import { Module, getVoxelBuffer, updateViewPort, startSimulation } from './wasm_link';
import { OrbitControls } from '@react-three/drei';
export default function SimulationRender({wasmLoaded}) {

  useEffect(() => {
    if (wasmLoaded) {
        startSimulation();
        const voxelPtr: number = getVoxelBuffer(); 
        const voxelBufferSize: number = 16*16*256 

        console.info(voxelPtr)
        console.info(Module.wasmMemory.buffer)
        //console.info(
        console.info((voxelPtr + voxelBufferSize) > Module.wasmMemory.buffer.length)
 
        // Create a typed array view on the wasm shared memory buffer:
        const voxelData = new Uint8Array(
          Module.wasmMemory.buffer,   // SharedArrayBuffer backing WASM memory
          voxelPtr,                  // byte offset into WASM memory
          voxelBufferSize            // length of your voxel buffer in bytes
        );

        // Now you can read/write voxelData directly from JS and React Three Fiber
    }
  }, [wasmLoaded])


  return (

    <>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      
      {/* Box at the world origin */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="orange" />
      </mesh>

      <OrbitControls />
    </>
  )
}
