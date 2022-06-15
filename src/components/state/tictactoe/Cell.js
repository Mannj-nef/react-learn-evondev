import React from "react";

const Cell = ({ value, setOnClickCell, className }) => {
  return (
    <div className={`game-cell ${className}`} onClick={setOnClickCell}>
      {value}
    </div>
  );
};

export default Cell;
