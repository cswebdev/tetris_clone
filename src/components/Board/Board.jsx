import React from "react";
import "./Board.css";
import { useBoard } from "../../hooks/useBoard";

const Board = ({ board }) => {
   console.log("board", board);
   return (
      <div>
         <div>I am a board</div>
      </div>
   );
};

export default Board;
