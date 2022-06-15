import React, { useState } from "react";
import "./Counter.css";

const Counter = () => {
  const [count, setCount] = useState(0);
  const handleCount = () =>
    setTimeout(() => {
      setCount((count) => count + 1);
      console.log(count);
    }, 2000);
  return (
    <button className="incremant" onClick={handleCount}>
      incremant : ${count}
    </button>
  );
};

export default Counter;
