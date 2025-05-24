import { useFrame } from '@react-three/fiber';
import { useEffect } from "react";
import { getVoxelBuffer } from './wasm_link';

export default function SimulationRender({wasmLoaded}) {

  useEffect(() => {
    if (wasmLoaded) {
        const voxelPtr = getVoxelBuffer(); 
        const voxelBufferSize = 16*16*256 

        // Create a typed array view on the wasm shared memory buffer:
        const voxelData = new Uint8Array(
          Module.wasmMemory.buffer,   // SharedArrayBuffer backing WASM memory
          voxelPtr,                  // byte offset into WASM memory
          voxelBufferSize            // length of your voxel buffer in bytes
        );

        // Now you can read/write voxelData directly from JS and React Three Fiber
    }
  }, [wasmLoaded])

  useFrame(() => {
    const voxelData = getVoxelBuffer();
  });

  return (
    <boxGeometry args={[1, 1, 1]} />
  )
}
