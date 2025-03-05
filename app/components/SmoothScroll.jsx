"use client";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

const SmoothScroll = ({ children }) => {
  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
      lerp: 0.07, // Lower lerp = more responsive
      wheelMultiplier: 1.2, // Increase scroll speed
      touchMultiplier: 2, // Higher value for better mobile experience
      infinite: false,
      syncTouch: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => {
      lenis.destroy(); // Cleanup on unmount to avoid memory leaks
    };
  }, []);

  return <>{children}</>;
};

export default SmoothScroll;
