import React, { useState } from "react";
import Square from "./Square";

export default function GameBoard(props) {
  const { setTurn, turn, setSquares, squares, checkWinner } = props;

  const handleSquare = (i) => {
    if (squares[i] || checkWinner(squares)) return;

    const nextSquares = squares.slice();
    nextSquares[i] = turn;
    setSquares(nextSquares);
    handleTurn();
  };

  const handleTurn = () => {
    if (turn == "X") return setTurn("O");
    setTurn("X");
  };

  return (
    <>
      <div className="h-96 w-96 flex flex-col justify-between">
        <div className="flex justify-between">
          <Square value={squares[0]} onSquareClick={() => handleSquare(0)} />
          <Square value={squares[1]} onSquareClick={() => handleSquare(1)} />
          <Square value={squares[2]} onSquareClick={() => handleSquare(2)} />
        </div>
        <div className="flex justify-between">
          <Square value={squares[3]} onSquareClick={() => handleSquare(3)} />
          <Square value={squares[4]} onSquareClick={() => handleSquare(4)} />
          <Square value={squares[5]} onSquareClick={() => handleSquare(5)} />
        </div>
        <div className="flex justify-between">
          <Square value={squares[6]} onSquareClick={() => handleSquare(6)} />
          <Square value={squares[7]} onSquareClick={() => handleSquare(7)} />
          <Square value={squares[8]} onSquareClick={() => handleSquare(8)} />
        </div>
      </div>
    </>
  );
}
