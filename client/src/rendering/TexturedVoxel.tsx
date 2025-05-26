import React from 'react';
import { useTexture } from '@react-three/drei';
import * as THREE from 'three'; // Import Three.js for RepeatWrapping

export function TexturedVoxel({position, texturePaths, voxelDims = [1, 1, 1]}) {

    const textures = useTexture({
        map: texturePaths.color,
        normalMap: texturePaths.normal,
        roughnessMap: texturePaths.roughness,
        metalnessMap: texturePaths.metalness,
        aoMap: texturePaths.ao,
      });

      // Optional: Adjust texture repetition
      // For each texture, set wrapping mode to repeat
      for (const texture of Object.values(textures)) {
        if (texture) { // Check if texture exists
          texture.wrapS = THREE.RepeatWrapping;
          texture.wrapT = THREE.RepeatWrapping;
          texture.repeat.set(2, 2); // Repeat 2 times horizontally and vertically
        }
      }

      return (
        <mesh position={position} castShadow receiveShadow>
          <boxGeometry args={voxelDims} />
          <meshStandardMaterial {...textures} />
        </mesh>
      );



}
