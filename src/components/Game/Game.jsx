import React from "react";
import "./Game.css";
import Menu from "../Menu/Menu";
import { useGameOver } from "../../hooks/useGameOver";

const Game = ({ rows, columns }) => {
   const [gameOver, setGameOver, resetGameOver] = useGameOver();
   const start = () => {
      console.log(`start gameOver ${gameOver}`);
   };

   return (
      <div className="Game">
         <Menu onClick={start} />
      </div>
   );
};

export default Game;
