import React, { useEffect, useRef, useState } from "react";

const StopWatch = () => {
  const [count, setCount] = useState(0);
  const countRef = useRef(count);

  useEffect(() => {
    return () => clearInterval(countRef.current);
  }, []);

  const handleStart = () => {
    if (countRef.current) return;
    countRef.current = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 500);
  };
  const handleStop = () => {
    clearInterval(countRef.current);
    countRef.current = null;
  };

  return (
    <div>
      <p>Count {count} </p>
      <button onClick={handleStart}>start</button>
      <button onClick={handleStop}>stop</button>
    </div>
  );
};

export default StopWatch;
