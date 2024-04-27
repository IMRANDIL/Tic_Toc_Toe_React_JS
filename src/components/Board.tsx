// import { useEffect, useState } from "react";
import { useTicTacToe } from "../customhooks/useTicTacToe ";
import Square from "./Square";

const Board = () => {
    const { squares, handleClick, winner, scores, handleRestart } = useTicTacToe();
    // const [status, setStatus] = useState("Current player: X")
  let status;
    if (winner) {
        // setStatus("Winner: " + winner)
      status = "Winner: " + winner;
    } else if (squares.every((square) => square !== null)) {
        // setStatus("It's a draw!")
      status = "It's a draw!";
    } else {
         status = squares.some((square) => square !== null) ? "Next player: " : "Current player: " + (squares.filter((square) => square !== null).length % 2 === 0 ? "X" : "O");
        // setStatus(statustoUpdate)
    }

       // Update status whenever there's a change in the game state
    //    useEffect(() => {
    //     if (winner) {
    //         setStatus("Winner: " + winner);
    //     } else if (squares.every((square) => square !== null)) {
    //         setStatus("It's a draw!");
    //     } else {
    //         let statusToUpdate = squares.some((square) => square !== null) ? "Next player: " : "Current player: " + (squares.filter((square) => square !== null).length % 2 === 0 ? "X" : "O");
    //         setStatus(statusToUpdate);
    //     }
    // }, [squares, winner]);
  
    return (
      <>
        <div
          className="status"
          style={{
            marginBottom: "10px",
          }}
        >
          {status && status}
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