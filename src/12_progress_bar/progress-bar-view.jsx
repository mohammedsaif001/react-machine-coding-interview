import { useState } from "react";
import ProgressBar from "./component/progress-bar";
import "./progress-bar.css";
import { useEffect } from "react";
const ProgressBarView = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setValue((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, 10);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h3>Progress Bar</h3>
      <ProgressBar value={value} />
    </div>
  );
};

export default ProgressBarView;
