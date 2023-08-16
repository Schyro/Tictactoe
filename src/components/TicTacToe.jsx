import { useState } from "react";
import GameBoard from "./GameBoard";

export default function TicTacToe() {
  const [turn, setTurn] = useState("X");
  const [squares, setSquares] = useState(Array(9).fill(null));

  const winner = checkWinner(squares);
  let status;

  if (winner) {
    status = "Winner is " + winner;
    console.log(squares);
  } else if (!squares.includes(null)) {
    status = "The game is draw.";
  } else {
    status = "Player " + turn + "'s turn";
  }

  function checkWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  }

  const handleReset = () => {
    setSquares(Array(9).fill(null));
    setTurn("X");
  };

  return (
    <>
      <div className="flex flex-col text-center mt-10">
        <div className="mb-8">
          <h1 className="text-[48px] font-semibold font-poppins [text-shadow:_0_2px_5px_rgb(0_0_0_/_20%)]">
            TicTacToe
          </h1>
          <p className="font-poppins leading-none">{status}</p>
        </div>
        <GameBoard
          setTurn={setTurn}
          turn={turn}
          squares={squares}
          setSquares={setSquares}
          checkWinner={checkWinner}
        />
        <div>
          <button
            className="bg-[#f4f4f480] hover:bg-[#f4f4f4d4] py-3 px-10 rounded-lg mt-8 font-poppins"
            onClick={() => handleReset()}>
            Reset
          </button>
        </div>
      </div>
    </>
  );
}
