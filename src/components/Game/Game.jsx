import React from "react";
import "./Game.css";
import Menu from "../Menu/Menu";
import { useGameOver } from "../../hooks/useGameOver";
import Tetris from "../Tetris/Tetris";

const Game = ({ rows, columns }) => {
   const [gameOver, setGameOver, resetGameOver] = useGameOver();
   const start = () => {
      resetGameOver();
      console.log(`start gameOver ${gameOver}`);
   };

   return (
      <div className="Game">
         {gameOver ? (
            <Menu onClick={start} />
         ) : (
            <Tetris rows={rows} columns={columns} setGameOver={setGameOver} />
         )}
      </div>
   );
};

export default Game;
