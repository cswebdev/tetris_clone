import React from "react";
import "./Tetris.css";
import Board from "../Board/Board";
import Previews from "../Previews/Previews";
import GameStats from "../GameStats/GameStats";
import GameController from "../GameController/GameController";

import { useBoard } from "../../hooks/useBoard";
import { useGameStats } from "../../hooks/useGameStats";
import { usePlayer } from "../../hooks/usePlayer";
import Info from "../Info/Info";

const Tetris = ({ rows, columns, setGameOver }) => {
   const [gameStats, addLinesCleared] = useGameStats();
   const [player, setPlayer, resetPlayer] = usePlayer();
   const [board] = useBoard({
      rows,
      columns,
      player,
      resetPlayer,
      addLinesCleared,
   });

   return (
      <div className="Tetris">
         <Board board={board} />
         <GameStats gameStats={gameStats} />
         <Previews tetrominoes={player.tetrominoes} />
         <GameController
            board={board}
            gameStats={gameStats}
            player={player}
            setGameOver={setGameOver}
            setPlayer={setPlayer}
         />
         <Info />
      </div>
   );
};
export default Tetris;
