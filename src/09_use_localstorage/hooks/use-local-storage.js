const useLocalStorage = () => {
  const isClient = typeof window !== "undefined";

  const removeItem = (key) => {
    if (!isClient) return;

    if (typeof key !== "string" || !key) {
      throw new Error("Key must be a non-empty string");
    }

    localStorage.removeItem(key);
  };

  const getItem = (key) => {
    if (!isClient) return undefined;

    if (typeof key !== "string" || !key) {
      throw new Error("Key must be a non-empty string");
    }

    try {
      const value = localStorage.getItem(key);
      return value !== null ? JSON.parse(value) : undefined;
    } catch (error) {
      console.error("Invalid JSON in localStorage for key:", key);
      return undefined;
    }
  };

  const setItem = (key, value) => {
    if (!isClient) return;

    if (typeof key !== "string" || !key) {
      throw new Error("Key must be a non-empty string");
    }

    if (value == null) {
      throw new Error("Value cannot be null or undefined");
    }

    localStorage.setItem(key, JSON.stringify(value));
  };

  return { removeItem, getItem, setItem };
};

export default useLocalStorage;
