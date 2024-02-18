import { defaultCell } from "./Cell";

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
};
