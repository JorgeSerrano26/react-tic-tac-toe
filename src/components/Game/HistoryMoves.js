import React from "react";

const getMessage = (move) =>
  move ? "Go to move #" + move : "Go to game start";

const Move = ({ move, onClick }) => (
  <li>
    <button onClick={() => onClick(move)}>{getMessage(move)}</button>
  </li>
);

const HistoryMoves = ({ history, onClickMove }) => {
  const renderMoves = () =>
    history.map((_, move) => <Move key={`move-${move}`} move={move} onClick={onClickMove} />);

  return <ol>{renderMoves()}</ol>;
};

export default HistoryMoves;
