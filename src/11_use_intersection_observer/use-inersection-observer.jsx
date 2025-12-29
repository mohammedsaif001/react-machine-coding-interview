import { useRef } from "react";
import useIntersectionObserver from "./hooks/use-intersection-observer";

const UseIntersectionObserverComponent = () => {
  const ref = useRef();
  const isIntersecting = useIntersectionObserver(ref, { threshold: 1 });
  // Threshold lies from 0-1 which means as soon as it enter ir full element is visible or half(0.5)
  console.log(isIntersecting);
  return (
    <div>
      <h3>Use Intersection Observer</h3>
      <div style={{ background: "yellow" }}>
        Outer Div
        <div style={{ marginTop: "100vh", background: "red" }} ref={ref}>
          Inner Div
        </div>
      </div>
    </div>
  );
};

export default UseIntersectionObserverComponent;
