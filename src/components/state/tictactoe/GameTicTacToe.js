import React, { useReducer, useState } from "react";
import { caculateWinner } from "../../../helpers/helpers";
import Board from "./Board";
import "./GameStyles.css";

const initState = {
  cell: Array(9).fill(null),
  xIsNext: true,
};

const click = (payload) => {
  return {
    type: "CLICK",
    payload,
  };
};
const resetGame = () => {
  return {
    type: "RESETGAME",
  };
};

const reducer = (state, action) => {
  const { cell, xIsNext } = state;
  const stateCoppy = JSON.parse(JSON.stringify(state));

  switch (action.type) {
    case "CLICK":
      const { index, winner } = action.payload;
      if (winner || cell[index]) return state;

      stateCoppy.cell[index] = xIsNext ? "X" : "O";
      stateCoppy.xIsNext = !xIsNext;

      // return stateCoppy;

      return {
        ...stateCoppy,
        cell: stateCoppy.cell,
        xIsNext: stateCoppy.xIsNext,
      };

    case "RESETGAME":
      return {
        ...stateCoppy,
        cell: Array(9).fill(null),
        xIsNext: true,
      };

    default:
      throw new Error("TYPE NOT DEFINED");
  }
};

const GameTicTacToe = () => {
  const [state, dispatch] = useReducer(reducer, initState);
  const { cell } = state;
  console.log(state);

  // const [cell, setCell] = useState(Array(9).fill(null));
  // const [xIsNext, setXIsNext] = useState(true);
  const winner = caculateWinner(cell);

  const handleClick = (index) => {
    // const cellCoppy = [...cell];
    // if (cellCoppy[index] || winner) return;
    // cellCoppy[index] = xIsNext ? "X" : "O";
    // setXIsNext(!xIsNext);
    // setCell(cellCoppy);
    // -------------------useREducer----------------
    dispatch(click({ index, winner }));
  };
  const handleResetGame = () => {
    // setCell(Array(9).fill(null));
    // setXIsNext(true);
    // -------------------useREducer----------------
    dispatch(resetGame());
  };

  return (
    <>
      <Board cell={cell} setOnClickBoard={handleClick}></Board>
      {winner ? <div className="game-winner">Winner is: {winner}</div> : ""}
      <button className="btn" onClick={handleResetGame}>
        ResetGame
      </button>
    </>
  );
};

export default GameTicTacToe;
