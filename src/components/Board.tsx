import { useTicTacToe } from "../customhooks/useTicTacToe ";
import Square from "./Square";

const Board = () => {
    const { squares, handleClick, winner, scores, handleRestart } = useTicTacToe();
  
    let status;
    if (winner) {
      status = "Winner: " + winner;
    } else if (squares.every((square) => square !== null)) {
      status = "It's a draw!";
    } else {
      status = "Next player: " + (squares.filter((square) => square !== null).length % 2 === 0 ? "X" : "O");
    }
  
    return (
      <>
        <div
          className="status"
          style={{
            marginBottom: "10px",
          }}
        >
          {status}
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
        <button onClick={handleRestart}>Restart</button>
        <div className="scores">
          <p>X: {scores.X}</p>
          <p>O: {scores.O}</p>
        </div>
      </>
    );
  };
  
  export default Board;