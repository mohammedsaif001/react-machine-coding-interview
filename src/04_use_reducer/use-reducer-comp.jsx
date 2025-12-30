import { useReducer } from "react";

const COUNTER_ACTIONS = {
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT",
  MULTIPLY_BY_PAYLOAD: "MULTIPLY_BY_PAYLOAD",
  RESET: "RESET",
};

const inititalState = {
  count: 0,
};

const counterReducer = (state, action) => {
  switch (action.type) {
    case COUNTER_ACTIONS.INCREMENT:
      return { ...state, count: state.count + 1 };
    case COUNTER_ACTIONS.DECREMENT:
      return { ...state, count: state.count - 1 };
    case COUNTER_ACTIONS.MULTIPLY_BY_PAYLOAD:
      return { ...state, count: state.count * action.payload };
    case COUNTER_ACTIONS.RESET:
      return inititalState;
    default:
      return state;
  }
};

const UseReducerComponent = () => {
  const [state, dispatch] = useReducer(counterReducer, inititalState);
  const { count } = state;

  const increment = () => dispatch({ type: COUNTER_ACTIONS.INCREMENT });
  const decrement = () => dispatch({ type: COUNTER_ACTIONS.DECREMENT });
  const reset = () => dispatch({ type: COUNTER_ACTIONS.RESET });
  const multiplyByNumber = (x) =>
    dispatch({ type: COUNTER_ACTIONS.MULTIPLY_BY_PAYLOAD, payload: x });
  return (
    <div>
      <h3> Use Reducer</h3>
      <div>Counter : {count}</div>
      <div style={{ display: "flex", gap: "0.5rem", justifyContent: "center" }}>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={() => multiplyByNumber(5)}>Multiply By 5</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
};

export default UseReducerComponent;
