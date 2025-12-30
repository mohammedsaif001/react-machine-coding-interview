/**
 * 1. Acceepts 2 args, cb & deps
 *  2. If no deps then it should re render everytime
 *  3. If Empty array then initial render only
 *  4. Re render if deps changes
 *  5. Cleanup Function
 */

import { useRef } from "react";

const useCustomEffect = (cb, deps = null) => {
  const firstRender = useRef(null);
  const prevDeps = useRef(null);
  let cleanupRef = useRef(null);

  let shouldReRender =
    !firstRender.current ||
    !deps ||
    !prevDeps.current ||
    deps.some((item, index) => item !== prevDeps.current[index]);

  if (shouldReRender) {
    setTimeout(() => {
      if (cleanupRef.current) {
        cleanupRef.current();
      }

      let cleanupFn = cb();
      cleanupRef.current = typeof cleanupFn === "function" ? cleanupFn : null;
    }, 0);
  }

  firstRender.current = true;
  prevDeps.current = deps;
};

export default useCustomEffect;
