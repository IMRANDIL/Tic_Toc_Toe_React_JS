// App.js
import { useState } from 'react';
import './App.css';
import Board from './components/Board';
import Square from './components/Square';

function App() {
  const [squares, setSquares] = useState(Array(9).fill(null)); // Array to hold square values

  const handleClick = () => {
    const newSquares = squares.slice(); // Copy the array
    // newSquares[index] = 'X'; // Set value to 'X' for simplicity (you can change this logic)
    setSquares(newSquares); // Update state
  };
console.log(squares)
  return (
    <div className='container'>
      <h1>Tic Tac Toe</h1>
      <Board>
        {squares.map((value, index) => (
          <Square key={index} onClick={() => handleClick()} />
        ))}
      </Board>
    </div>
  );
}

export default App;
