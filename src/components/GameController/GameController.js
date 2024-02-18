import React from "react";
import "./GameController.css";

import { Action, actionForKey } from "../../utils/Input";

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
      console.log(`onKeyDown${code}`);
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
