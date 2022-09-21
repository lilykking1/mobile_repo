import { useEffect, useRef, useCallback } from 'react';

/**
 * A simple custom hook for checking if specific time has passed
 * @param  {() => void} callback
 * @param  {boolean} condition
 * @param  {number} delay
 */
const useTimeout = (
  callback: () => void,
  condition: boolean,
  delay: number | null
): any => {
  const savedCallback = useRef(callback);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  const setTimer = useCallback(() => {
    if ((!delay && delay !== 0) || !condition) {
      return undefined;
    }

    const id = setTimeout(() => savedCallback.current(), delay);
    const clear = () => clearTimeout(id);

    return clear;
  }, [condition, delay]);

  return { setTimer };
};

export default useTimeout;
