import { useEffect, useState } from "react";

export default function useDebounce(initValue = "", delay = 500) {
  const [debounceValue, setdebounce] = useState(initValue);

  useEffect(() => {
    const timer = setTimeout(() => {
      setdebounce(initValue);
    }, delay);
    return () => clearTimeout(timer);
  }, [initValue, delay]);

  return debounceValue;
}
