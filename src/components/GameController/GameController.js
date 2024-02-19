import React from "react";
import "./GameController.css";

import { Action, actionForKey, actionIsDrop } from "../../utils/Input";
import { playerController } from "../../utils/PlayerController";
import { useDropTime } from "../../hooks/useDropTime";
import { useInterval } from "../../hooks/useInterval";

const GameController = ({
   board,
   gameStats,
   player,
   setGameOver,
   setPlayer,
}) => {
   const [dropTime, pauseDropTime, resumeDropTime] = useDropTime({
      gameStats,
   });

   useInterval(() => {
      handleInput({ action: Action.SlowDrop });
   }, dropTime);

   const onKeyUp = ({ code }) => {
      const action = actionForKey(code);
      if (actionIsDrop(action)) resumeDropTime();
   };
   const onKeyDown = ({ code }) => {
      const action = actionForKey(code);

      if (action === Action.Pause) {
         if (dropTime) {
            pauseDropTime();
         } else {
            resumeDropTime();
         }
      } else if (action === Action.Quit) {
         setGameOver(true);
      } else {
         if (actionIsDrop(action)) pauseDropTime();
         handleInput({ action });
      }
   };

   const handleInput = ({ action }) => {
      playerController({
         action,
         board,
         player,
         setPlayer,
         setGameOver,
      });
   };

   return (
      <input
         className="GameController"
         type="text"
         autoFocus
         onKeyUp={onKeyUp}
         onKeyDown={onKeyDown}
      />
   );
};

export default GameController;
