// import { useEffect, useState } from "react";
import { useEffect, useState } from "react";
import { useTicTacToe } from "../customhooks/useTicTacToe ";
import Square from "./Square";

const Board = () => {
    const { squares, handleClick, xIsNext, winner, scores, handleRestart } = useTicTacToe();
    const [current, setCurrent] = useState("Current player: ")

    useEffect(() => {
        if (winner) {
            setCurrent("Winner: " + winner); // Set current to display the winner
        } else if (squares.every((square) => square !== null)) {
            setCurrent("It's a draw!"); // Set current to indicate a draw
        } else if (xIsNext){
            setCurrent("Current player: X"); // Set current to indicate the next player
        } else {
            setCurrent("Current player: O"); // Set current to indicate the next player
        }
    }, [squares, winner, xIsNext]);
    

  
    return (
      <>
        <div
          className="status"
          style={{
            marginBottom: "10px",
          }}
        >
          {current}
        </div>
        <div className="board">
          {squares.map((value, index) => (
            <Square
              key={index}
              value={value}
              onClick={() => handleClick(index)}
            />
          ))}
        </div>
        <button className="reset" onClick={handleRestart}>Restart</button>
        <div className="scores">
          <p>X: {scores.X}</p>
          <p>O: {scores.O}</p>
        </div>
      </>
    );
  };
  
  export default Board;