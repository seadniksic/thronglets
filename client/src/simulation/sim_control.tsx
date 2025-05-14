import React, { useEffect, useState } from "react";
import { loadWasm, startSimulation, tick, getTickCount, stopSimulation } from "./wasm_link";

export default function SimulationControl() {
  const [tickCount, setTickCount] = useState(0);

  useEffect(() => {
    loadWasm().then(() => {
      startSimulation();

      const interval = setInterval(() => {
        tick();
        setTickCount(getTickCount());
      }, 100);

      return () => clearInterval(interval);
    });
  }, []);

  return (
   
      <div>   
          <div>Tick Count: {tickCount}</div>
          <button onClick={stopSimulation}> Stop </button>
      </div>
  
  );
}
