import { useEffect, useState } from "react";

const useFetch = (url, options = {}, maxRetries = 3) => {
  const [result, setResult] = useState({
    data: null,
    error: null,
    loading: false,
  });

  useEffect(() => {
    if (!url) return;

    const controller = new AbortController();

    const fetchData = async (retriesLeft) => {
      try {
        setResult({ data: null, error: null, loading: true });

        const res = await fetch(url, {
          ...options,
          signal: controller.signal,
        });

        if (!res.ok) throw new Error(`Error: ${res.status}`);

        const data = await res.json();
        setResult({ data, error: null, loading: false });
      } catch (error) {
        if (controller.signal.aborted) return;

        // Below to be used when Calling Via Axios
        // if (error.name === "CanceledError") return;

        if (retriesLeft > 0) {
          fetchData(retriesLeft - 1);
        } else {
          setResult({ data: null, error, loading: false });
        }
      }
    };

    fetchData(maxRetries);

    return () => controller.abort();
  }, [url, maxRetries]);

  return result;
};

export default useFetch;
