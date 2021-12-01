import React, { useState } from "react";
import Board from "../Board";
import calculateWinner from "./calculateWinner";
import HistoryMoves from "./HistoryMoves";

const Game = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setxIsNext] = useState(true);

  const currentBoard = history[stepNumber];
  const winner = calculateWinner(currentBoard);

  const handleClick = (squareIndex) => {
    const tempHistory = history.slice(0, stepNumber + 1);
    const currentBoard = tempHistory[tempHistory.length - 1];
    const squares = [...currentBoard];

    if (calculateWinner(squares) || squares[i]) return;

    const tempSquares = [...squares];
    tempSquares[squareIndex] = xIsNext ? "X" : "O";

    setHistory(tempHistory.concat([tempSquares]));
    setStepNumber(tempHistory.length);
    setxIsNext(!xIsNext);
  };

  const jumpTo = (step) => {
    setStepNumber(step);
    setxIsNext(step % 2 === 0);
  };

  const restart = () => {
    setHistory([Array(9).fill(null)]);
    setStepNumber(0);
    setxIsNext(true);
  };

  const Status = () => {
    const tieOrTurn =
      history.length === 10 ? "Tie!" : `Next player: ${xIsNext ? "X" : "O"}`;

    const status = winner ? `Winner: ${winner}` : tieOrTurn;

    return <div>{status}</div>;
  };

  const RestartButton = () => <button onClick={restart}>Restart</button>;

  return (
    <div className="game">
      <div className="game-board">
        <Board squares={currentBoard} onClick={handleClick} />
      </div>
      <div className="game-info">
        <Status />
        {winner && <RestartButton />}
        <HistoryMoves history={history} onClickMove={jumpTo} />
      </div>
    </div>
  );
};

export default Game;
