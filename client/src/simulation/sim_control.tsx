import React, { useEffect, useState } from "react";
import { loadWasm, startSimulation, getTickCount, stopSimulation } from "./wasm_link";

export default function SimulationControl() {
  const [tickCount, setTickCount] = useState(0);

  useEffect(() => {loadWasm()})

  return (
   
      <div>   
          <button onClick={startSimulation}> Start </button>
          <button onClick={stopSimulation}> Stop </button>
      </div>
  
  );
}
