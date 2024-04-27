// import { useEffect, useState } from "react";
import { useEffect, useState } from "react";
import { useTicTacToe } from "../customhooks/useTicTacToe ";
import Square from "./Square";

const Board = () => {
    const { squares, handleClick, current, scores, handleRestart } = useTicTacToe();
    
    
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