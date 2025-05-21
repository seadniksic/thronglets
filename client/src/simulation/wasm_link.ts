// wasm.ts
let Module: any;

export async function loadWasm() {
    const createModule = (await import("../../public/sim.mjs")).default;
    Module = await createModule();
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

//export function getVoxelBuffer(): number {
  //return Module._get_voxel_buffer();
//}
