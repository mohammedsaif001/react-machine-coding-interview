import { useEffect, useState } from "react";
import axios from "axios";

const useAxios = (url, options = {}, maxRetries = 3) => {
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

        const response = await axios({
          url,
          signal: controller.signal,
          ...options, // method, data, headers, etc.
        });

        setResult({
          data: response.data,
          error: null,
          loading: false,
        });
      } catch (error) {
        if (error.name === "CanceledError") return;

        if (retriesLeft > 0) {
          fetchData(retriesLeft - 1);
        } else {
          setResult({
            data: null,
            error,
            loading: false,
          });
        }
      }
    };

    fetchData(maxRetries);

    return () => controller.abort();
  }, [url, maxRetries]);

  return result;
};

export default useAxios;
