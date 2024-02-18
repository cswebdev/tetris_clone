import React from "react";
import "./Tetris.css";
import Board from "../Board/Board";
import Previews from "../Previews/Previews";
import GameStats from "../GameStats/GameStats";

import { useBoard } from "../../hooks/useBoard";
import { useGameStats } from "../../hooks/useGameStats";
import { usePlayer } from "../../hooks/usePlayer";

const Tetris = ({ rows, columns, setGameOver }) => {
   const [gameStats, addLinesCleared] = useGameStats();
   const [player, setPlayer, resetPlayer] = usePlayer();
   const [board, setBoard] = useBoard({
      rows,
      columns,
      player,
      resetPlayer,
      addLinesCleared,
   });

   return (
      <div className="Tetris">
         <Board board={board} />;
         <GameStats gameStats={gameStats} />
         <Previews tetrominoes={player.tetrominoes} />
      </div>
   );
};
export default Tetris;
