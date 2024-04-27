// import { useEffect, useState } from "react";
import { useEffect, useState } from "react";
import { useTicTacToe } from "../customhooks/useTicTacToe ";
import Square from "./Square";

const Board = () => {
    const { squares, handleClick, winner, scores, handleRestart } = useTicTacToe();
    // const [status, setStatus] = useState("Current player: X")
    const [current, setCurrent] = useState("Current player: ")
//   let status;
//     if (winner) {
//       status = "Winner: " + winner;
//     } else if (squares.every((square) => square !== null)) {  
//       status = "It's a draw!";
//     } else {
//          status = (squares.filter((square) => square !== null).length % 2 === 0 ? "X" : "O");
//     }
    useEffect(() => {
        if (winner) {
            setCurrent("Winner: " + winner); // Set current to display the winner
        } else if (squares.every((square) => square !== null)) {
            setCurrent("It's a draw!"); // Set current to indicate a draw
        } else {
            setCurrent((squares.filter((square) => square !== null).length % 2 === 0 ? "Current player: X" : "Current player: O")); // Set current to indicate the next player
        }
    }, [squares, winner]);
    

  
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