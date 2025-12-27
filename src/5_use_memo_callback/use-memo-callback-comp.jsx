import { useCallback } from "react";
import { useMemo } from "react";
import { useState } from "react";

const UseMemoCallbackComp = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const increment1 = () => {
    setCount1((prev) => prev + 1);
  };

  const increment2 = () => {
    setCount2((prev) => prev + 1);
  };

  const squareNumber = (count, counter) => {
    let res = count * count;
    console.log({
      count: "Counter" + " " + counter,
      num: count,
      squaredNum: res,
    });
    return res;
  };

  const squareNumberMemoise = useMemo(() => {
    return squareNumber(count1, 1);
  }, [count1]);

  const squareNumberMemoiseCallback = useCallback(() => {
    // Even though the function is triggered the count1 is still pointing to old count1 value
    console.log("In Callback", count1);
    return squareNumber(count2, 2);
  }, [count2]);

  return (
    <div>
      <h3>Use Memo Callback</h3>
      <div
        style={{ display: "flex", gap: "0.875rem", justifyContent: "center" }}
      >
        <div>
          <div>Counter 1: {count1}</div>
          <button onClick={increment1}>Increment Count 1</button>
        </div>
        <div>
          <div>Counter 2: {count2}</div>
          <button onClick={increment2}>Increment Count 2</button>
        </div>
      </div>

      <h4>Squared Number (Counter 1): {squareNumberMemoise}</h4>
      <h4>Squared Number (Counter 2): {squareNumberMemoiseCallback()}</h4>
    </div>
  );
};

export default UseMemoCallbackComp;
