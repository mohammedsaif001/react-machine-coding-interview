import useLocalStorage from "./hooks/use-local-storage";

const UseLocalStorageComp = () => {
  const {} = useLocalStorage();
  return (
    <div>
      <h3>Use Local Storage Hook</h3>
    </div>
  );
};

export default UseLocalStorageComp;
