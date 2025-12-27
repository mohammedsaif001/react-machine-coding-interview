import useWindowSize from "./hooks/useWindowSize";

const UseWindowSize = () => {
  const { height, width } = useWindowSize();
  return (
    <div>
      <h3>Use Window Size</h3>
      <div>Width: {width}</div>
      <div>Height: {height}</div>
    </div>
  );
};

export default UseWindowSize;
