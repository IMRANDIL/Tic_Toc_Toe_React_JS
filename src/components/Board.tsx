import { ReactNode, useState } from 'react';
import Square from './Square';

const Board = () => {
    const [squares, setSquares] = useState(Array(9).fill(null)); // Array to hold square values
    const [xIsNext, setXIsNext] = useState(true);
    const handleClick = (index) => {
      const newSquares = squares.slice(); // Create a copy of the squares array
      if (xIsNext) {
        newSquares[index] = "X";
      } else {
        newSquares[index] = "O";
      }
    
      setSquares(newSquares); // Update the state with the new squares array
      setXIsNext(!xIsNext);
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
          if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
          }
        }
        return null;
      };
      const winner = calculateWinner(squares);
      let status;
      if (winner) {
        status = "Winner: " + winner;
      } else {
        status = "Next player: " + (xIsNext ? "X" : "O");
      }
    console.log(squares)
  return (
    <>
    <div className="status">{status}</div>
    <div className='board'>
    {squares.map((value, index) => (
          <Square key={index} value={value} onClick={() => handleClick(index)} />
        ))}
    </div>
    </>
    
  );
};

export default Board;
