import React from "react";
import "./Tetris.css";
import Board from "../Board/Board";
import { useBoard } from "../../hooks/useBoard";
import GameStats from "../GameStats/GameStats";

const Tetris = ({ rows, columns, setGameOver, gameStats }) => {
   const [board, setBoard] = useBoard({ rows, columns });

   return (
      <div className="Tetris">
         <Board board={board} />;
         <GameStats gameStats={gameStats} />
      </div>
   );
};
export default Tetris;
