// client/src/hooks/useSim.ts (or any location you prefer)
import { useEffect, useState } from 'react';

declare global {
  interface Window {
    SimModule: () => Promise<any>;
  }
}

export function useSim() {
  const [sim, setSim] = useState<any | null>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = `/sim.js?t=${Date.now()}`; // Add timestamp to avoid caching
    script.async = true;

    script.onload = async () => {
      if (typeof window.SimModule !== 'function') {
        console.error('SimModule not found');
        return;
      }

      const simInstance = await window.SimModule();
      setSim(simInstance);
    };

    script.onerror = () => {
      console.error('Failed to load sim.js');
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return sim;
}
