import WininnerCombinations from "./WinnerCombinations";

const calculateWinner = (squares) => {
  for (let i = 0; i < WininnerCombinations.length; i++) {
    const [a, b, c] = WininnerCombinations[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};

export default calculateWinner;
