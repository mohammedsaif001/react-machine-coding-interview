import useCustomEffect from "./hooks/use-custom-effect.js";
import { useState } from "react";

const UseEffectPolyfillComponent = () => {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);

  useCustomEffect(() => {
    console.log("Initial Render");
  }, []);

  useCustomEffect(() => {
    console.log("Renders Evertime");
  });

  useCustomEffect(() => {
    console.log("Count Variable Changed");

    return () => {
      console.log("Cleanup Function of Count");
    };
  }, [count]);

  return (
    <>
      <h3>Use Effect polyFill</h3>
      <div>
        <div>Counter 1: {count}</div>
        <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
      </div>
      <div>
        <div>Counter 2: {count1}</div>
        <button onClick={() => setCount1((prev) => prev + 1)}>Increment</button>
      </div>
    </>
  );
};

export default UseEffectPolyfillComponent;
