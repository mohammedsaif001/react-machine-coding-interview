import { useImperativeHandle } from "react";
import { forwardRef } from "react";
import { useRef } from "react";

const UseImperativeHandleComponent = () => {
  const childRef = useRef();
  return (
    <div>
      <h3>Use Imperative Handle</h3>
      <div
        style={{ display: "flex", gap: "0.875rem", flexDirection: "column" }}
      >
        <div>
          <span>Parent Component</span>
          <button onClick={() => childRef?.current?.handleInputFocus()}>
            Set Focus
          </button>
        </div>
        <ChildComp ref={childRef} />
      </div>
    </div>
  );
};

const ChildComp = forwardRef((props, ref) => {
  const inputRef = useRef();

  const handleInputFocus = () => inputRef?.current?.focus();

  useImperativeHandle(
    ref,
    () => {
      return {
        handleInputFocus,
      };
    },
    []
  );
  return (
    <div>
      <span>Child Component</span>
      <input name="username" ref={inputRef} />
    </div>
  );
});

export default UseImperativeHandleComponent;
