import { useState } from "react";
import useDebounce from "./hooks/use-debounce";
import { useEffect } from "react";

const UseDebounceHook = () => {
  const [input, setInput] = useState("");
  const debouncedInput = useDebounce(input, 300);

  function debouncedCallback(debouncedVal) {
    console.log("Debounced Val", debouncedVal);
  }

  useEffect(() => {
    if (debouncedInput) {
      debouncedCallback(debouncedInput);
    }
  }, [debouncedInput]);

  return (
    <div>
      <h3>Use Debounce Hook</h3>
      <div>
        <input
          name="search"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      <div>
        <p>Current Input: {input}</p>
        <p>Debounced Input: {debouncedInput}</p>
      </div>
    </div>
  );
};

export default UseDebounceHook;
