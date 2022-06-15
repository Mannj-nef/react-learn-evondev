import React from "react";
import Cell from "./Cell";

const Board = ({ cell, setOnClickBoard }) => {
  return (
    <div className="game-board">
      {cell.map((item, index) => (
        <Cell
          key={index}
          value={item}
          setOnClickCell={() => setOnClickBoard(index)}
          className={item === "X" ? "is-x" : item === "O" ? "is-o" : ""}
        ></Cell>
      ))}
    </div>
  );
};

export default Board;
