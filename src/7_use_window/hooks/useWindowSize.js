import { useEffect } from "react";
import { useState } from "react";

const useWindowSize = () => {
  const isClient = typeof window !== "undefined";
  const [windowSize, setWindowSize] = useState({
    width: isClient ? window.innerWidth : undefined,
    height: isClient ? window.innerHeight : undefined,
  });

  const handleWindowSize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    if (!isClient) return;

    window.addEventListener("resize", handleWindowSize);
    return () => {
      window.removeEventListener("resize", handleWindowSize);
    };
  }, [isClient]);
  return { ...windowSize };
};

export default useWindowSize;
