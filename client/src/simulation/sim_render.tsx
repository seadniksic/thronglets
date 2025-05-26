import { useFrame, useThree } from '@react-three/fiber';
import { useEffect, useState } from "react";
import { Module, getVoxelBuffer, updateViewPort, startSimulation } from './wasm_link';
import { OrbitControls, Environment } from '@react-three/drei';
import * as THREE from 'three';

const CHUNK_SIZE = 16*16*1;

export default function SimulationRender({wasmLoaded}) {
   const { camera } = useThree();
   const [voxelData, setVoxelData] = useState(null);

   useEffect(() => {
     if (wasmLoaded) {
        const voxelPtr: number = getVoxelBuffer(); 
        const voxelBufferSize: number = CHUNK_SIZE // read this from config
 
        // Create a typed array view on the wasm shared memory buffer:
        const voxelView = new Uint8Array(
          Module.wasmMemory.buffer,   // SharedArrayBuffer backing WASM memory
          voxelPtr,                  // byte offset into WASM memory
          voxelBufferSize            // length of your voxel buffer in bytes
        );

        console.info(voxelView)

        let voxels = Array.from(voxelView, (byte, i) => {
            return (
          <mesh key={i} position={_byte_index_to_pos(i)}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="orange" />
          </mesh>
            )
          });

          console.info("checking on voxels")

          console.info(voxels);

        setVoxelData(voxels)

    }
  }, [wasmLoaded])

  useFrame(() => {
      if (camera) {
          console.info("camera position " + camera.position.toArray())
        updateViewPort(...camera.position.toArray());
      }
  })



  return (
    <>
      <directionalLight position={[10, 10, 10]} />
      <axesHelper />

      {voxelData}
      

      <OrbitControls />
      <Environment preset="city" />
    </>
  )
}

function _byte_index_to_pos(index: number): array {
    // assuming dimensions (x/z) of 16/16, y (or height) will be implied
    
    let layer: number = Math.floor(index / 256);
    let layerOffset: number =  index - (layer)* 256;
    let rowOffset = Math.floor(layerOffset / 16);
    let colOffset = layerOffset % 16;

    return [colOffset, layer, rowOffset]; // [x (left-right), y(up-down), z (depth into camera),]

}








