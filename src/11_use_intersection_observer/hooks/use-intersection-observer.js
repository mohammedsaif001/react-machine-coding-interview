import { useEffect } from "react";
import { useState } from "react";

const useIntersectionObserver = (ref, options) => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const elem = ref?.current;
    if (!elem) return;

    const observer = new IntersectionObserver((entries) => {
      // If Watched Then Stop Observing
      // if (entries[0]?.isIntersecting) {
      //   setIsIntersecting(true);
      //   observer.unobserve(ref?.current);
      // }
      setIsIntersecting(entries[0]?.isIntersecting);
    }, options);
    observer.observe(elem);

    return () => observer.disconnect();
  }, [ref]);

  return isIntersecting;
};

export default useIntersectionObserver;
