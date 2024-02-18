import React from "react";
import "./GameController.css";

import { Action, actionForKey } from "../../utils/Input";
import { playerController } from "../../utils/PlayerController.js";

const GameController = ({
   board,
   gameStats,
   player,
   setGameOver,
   setPlayer,
}) => {
   const onKeyUp = ({ code }) => {
      const action = actionForKey(code);
      if (action === Action.Quit) {
         setGameOver(true);
      }
   };
   const onKeyDown = ({ code }) => {
      const action = actionForKey(code);
      handleInput({ action });
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
