import React, { useEffect, useState } from "react";
import { loadWasm, startSimulation, getTickCount, stopSimulation } from "./wasm_link";

export default function SimulationControl({wasmLoaded}) {
  const [tickCount, setTickCount] = useState(0);

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
   
      <div className="sim_control"> 
          <div> Tick Count: {tickCount} </div>
          <button onClick={startSimulation}> Start </button>
          <button onClick={stopSimulation}> Stop </button>
      </div>
  
  );
}
