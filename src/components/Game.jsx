import { useState } from "react";
import Board from "./Board";

export default function Game() {
  // state initializeed
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [xIsNext, setXIsNext] = useState(true);
  const [currentMove, setCurrentMove] = useState(0);

  const currentSqures = history[currentMove];

  function handlePlay(nextSquares) {
    setXIsNext(!xIsNext);
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpHistory(move) {
    setCurrentMove(move);
    setXIsNext(move % 2 === 0);
  }

  const moves = history.map((squares, move) => {
    let description;

    if (move > 0) {
      description = `Go to the history #${move}`;
    } else {
      description = "Start the Game";
    }

    return (
      <li key={move}>
        <button
          className="hover:text-gray-400 duration-200"
          onClick={() => jumpHistory(move)}
        >
          {description}
        </button>
      </li>
    );
  });

  return (
    <div className="bg-stone-900 w-full h-screen flex justify-center items-center">
      <div className="flex space-x-9">
        <div>
          <Board
            xIsNext={xIsNext}
            squares={currentSqures}
            onPlay={handlePlay}
          />
        </div>
        <div className="w-44 text-center rounded-lg bg-stone-700">
          <div className="pt-5 pb-3 text-yellow-200 font-semibold">
            Game History
          </div>
          <ul className="text-gray-300 space-y-3 text-sm">{moves}</ul>
        </div>
      </div>
    </div>
  );
}
