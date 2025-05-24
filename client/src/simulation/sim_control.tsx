import React, { useEffect, useState } from "react";
import { loadWasm, startSimulation, getTickCount, stopSimulation } from "./wasm_link";

export default function SimulationControl() {
  const [tickCount, setTickCount] = useState(0);
  const [wasmLoaded, setWasmLoaded] = useState(false);

  // load in wasm
  useEffect(() => {
      async function load() {
          await loadWasm();
          setWasmLoaded(true);
      }
      load();
  }, [])

  useEffect(() => {
    if (wasmLoaded) {
        let updateTicks = () => {
            setTickCount(getTickCount());
            requestAnimationFrame(updateTicks);
        } 
        requestAnimationFrame(updateTicks);
   }
  }, [wasmLoaded])

  return (
   
      <div> 
          <div> Tick Count: {tickCount} </div>
          <button onClick={startSimulation}> Start </button>
          <button onClick={stopSimulation}> Stop </button>
      </div>
  
  );
}
