import { useEffect, useRef } from "react";
import initFluidBackground from "../background/fluidBackground";

export default function FluidBackground() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const cleanup = initFluidBackground(containerRef.current);

    return () => {
      if (cleanup) cleanup();
    };
  }, []);

  return <div ref={containerRef} className="gradient-canvas" />;
}
