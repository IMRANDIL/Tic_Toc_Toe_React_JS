import { ReactNode, useState } from 'react';
import Square from './Square';

const Board = () => {
    const [squares, setSquares] = useState(Array(9).fill(null)); // Array to hold square values

    const handleClick = (index) => {
      const newSquares = squares.slice(); // Create a copy of the squares array
      newSquares[index] = 'X'; // Set the value at the clicked index to 'X'
      setSquares(newSquares); // Update the state with the new squares array
    };
    
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
