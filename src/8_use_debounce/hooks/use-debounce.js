import { useState } from "react";
import { useEffect } from "react";

// Expects input, delay
const useDebounce = (input, delay = 300) => {
  const [debouncedVal, setDebouncedVal] = useState(input);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedVal(input);
    }, delay);

    return () => clearTimeout(timeout);
  }, [input, delay]);

  return debouncedVal;
};

export default useDebounce;
