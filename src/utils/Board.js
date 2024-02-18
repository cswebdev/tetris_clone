import { defaultCell } from "./Cell";
import { transferToBoard } from "../utils/Tetrominoes";

export const buildBoard = ({ rows, columns }) => {
   const builtRows = Array.from({ length: rows }, () =>
      Array.from({ length: columns }, () => ({ ...defaultCell }))
   );

   return {
      rows: builtRows,
      size: { rows, columns },
   };
};

export const nextBoard = ({ board, player, resetPlayer, addLinesCleared }) => {
   const { tetromino, position } = player;

   //copy & clear spaces used by pieces
   // that hadn't collided & occupied spaces permanently
   let rows = board.rows.map((row) =>
      row.map((cell) => (cell.occupied ? cell : { ...defaultCell }))
   );
   rows = transferToBoard({
      className: tetromino.className,
      isOccupied: player.collided,
      position,
      rows,
      shape: tetromino.shape,
   });

   return {
      rows,
      size: { ...board.size },
   };
};
