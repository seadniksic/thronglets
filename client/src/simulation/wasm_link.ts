// wasm.ts
export let Module: any;

export async function loadWasm() {
    const initialMemoryPages = 256;  // Example: 256 * 64KiB = 16MB initial memory
    const maxMemoryPages = 512;      // Max 32MB (optional)

    // Create shared memory
    const wasmMemory = new WebAssembly.Memory({
        initial: initialMemoryPages,
        maximum: maxMemoryPages,
        shared: true,
    });

    // Dynamically import the Emscripten-generated module factory
    const createModule = (await import("../../public/sim.mjs")).default;

    // Pass wasmMemory as an option to the factory
    Module = await createModule({wasmMemory});
}

export function startSimulation() {
  Module._start_simulation(); // _ prefix required
}

export function stopSimulation() {
  Module._stop_simulation();
}

export function endSimulation() {
  Module._end_simulation();
}

export function restartSimulation() {
  Module._restart_simulation();
}

export function getTickCount(): number {
  return Module._get_tick_count();
}

export function getVoxelBuffer(): number {
  return Module._get_voxel_buffer();
}

export function updateViewPort(x: number, y: number, z: number) {
  return Module._update_view_port(x, y, z);
}

//export function getVoxelBuffer(): number {
  //return Module._get_voxel_buffer();
//}
