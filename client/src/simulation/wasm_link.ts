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

export function tick() {
  Module._tick();
}

export function getTickCount(): number {
  return Module._get_tick_count();
}
