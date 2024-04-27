// App.js
import { useState } from 'react';
import './App.css';
import Board from './components/Board';
import Square from './components/Square';

function App() {
  const [squares, setSquares] = useState(Array(9).fill(null)); // Array to hold square values

  const handleClick = (index) => {
    const newSquares = squares.slice(); // Create a copy of the squares array
    newSquares[index] = 'X'; // Set the value at the clicked index to 'X'
    setSquares(newSquares); // Update the state with the new squares array
  };

  return (
    <div className='container'>
      <h1>Tic Tac Toe</h1>
      <Board>
        {squares.map((value, index) => (
          <Square key={index} value={value} onClick={() => handleClick(index)} />
        ))}
      </Board>
    </div>
  );
}

export default App;
