import React, { useState } from "react";
import "./ToogleStyle.css";

// khác nhau gữa stateless và stateful

// stateless functional component: component nhưng không sử dụng state
// stateful functional component: component nhưng có sử dụng state

const Toggle = () => {
  const [on, setOn] = useState(false);
  const handleActive = () => {
    setOn(() => !on);
  };
  return (
    <div className={`toggle ${on ? "active" : ""}`} onClick={handleActive}>
      <div className={`spinner ${on ? "active" : ""}`}></div>
    </div>
  );
};

export default Toggle;
