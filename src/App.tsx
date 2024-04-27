import { useState } from 'react'
import './App.css'
import Board from './components/Board'
import Square from './components/Square'

function App() {
  const [value, setValue] = useState('')

  return (
    <>
      <div className='container'>
        <h1>Tic Toc Toe</h1>
        <Board>
          <Square value={value}/>
        </Board>
       </div>
    </>
  )
}

export default App
