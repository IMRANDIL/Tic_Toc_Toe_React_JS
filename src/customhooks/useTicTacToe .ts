import { useState } from "react";

export const useTicTacToe = () => {
  const [squares, setSquares] = useState(Array(9).fill(null)); // Array to hold square values
  const [xIsNext, setXIsNext] = useState(true);
  const [winner, setWinner] = useState(null);
  const [scores, setScores] = useState({ X: 0, O: 0 });

  const handleClick = async (index) => {
    if (calculateWinner(squares) || squares[index]) {
      return;
    }
    const newSquares = squares.slice(); // Create a copy of the squares array
    newSquares[index] = "X"; // Player's move

    setSquares(newSquares); // Update the state with the player's move
    setXIsNext(false); // Switch turns to computer (O)

    const winner = calculateWinner(newSquares);
    if (winner) {
      setWinner(winner);
      setScores({ ...scores, [winner]: scores[winner] + 1 });
    } else {
      // Make a random move for the computer (O) after a delay
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Adjust the delay time as needed
      const emptySquares = newSquares.reduce((acc, val, idx) => {
        if (val === null) acc.push(idx);
        return acc;
      }, []);
      const randomIndex = Math.floor(Math.random() * emptySquares.length);
      newSquares[emptySquares[randomIndex]] = "O";

      setSquares(newSquares); // Update the state with the computer's move
      setXIsNext(true); // Switch turns back to player (X)

      const computerWinner = calculateWinner(newSquares);
      if (computerWinner) {
        setWinner(computerWinner);
        setScores({ ...scores, [computerWinner]: scores[computerWinner] + 1 });
      }
    }
  };

  const calculateWinner = (squares) => {
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
  };

  const handleRestart = () => {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
    setWinner(null);
  };

  return { squares, handleClick, winner, scores, handleRestart };
};
