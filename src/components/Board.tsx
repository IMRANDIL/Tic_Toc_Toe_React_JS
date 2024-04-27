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
    console.log(squares)
  return (
    <>
    <div className='board'>
    {squares.map((value, index) => (
          <Square key={index} value={value} onClick={() => handleClick(index)} />
        ))}
    </div>
    </>
    
  );
};

export default Board;
