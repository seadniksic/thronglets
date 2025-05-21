import { useFrame } from '@react-three/fiber';
import { getVoxelBuffer } from './wasm_link';

export default function SimulationRender() {
  useFrame(() => {
    const voxelData = getVoxelBuffer();
  });

  return (<div> </div>)
}
