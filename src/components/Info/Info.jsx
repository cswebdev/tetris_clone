import React from "react";
import "./Info.css";

const Info = () => {
   return (
      <div className="Info">
         <h1 className="Info-header">How to play</h1>
         <p className="Info-body">
            Tetris is a simple puzzle game. Use the to tetrominoes fill any
            vacant spaces on the board. Once you complete a row, you will gain
            points and the row will clear. Keep going for as long as you can!
         </p>

         <div className="Info-controls">
            <p>
               <b>Rotate</b> - Up arrow
            </p>
            <p>
               <b>Move Down</b> - Down arrow
            </p>
            <p>
               <b>Move Left </b>- Left arrow
            </p>
            <p>
               <b>Move Right </b>- Right arrow
            </p>
            <p>
               <b>Fast Drop </b>- Space
            </p>
            <p>
               <b>Pause</b> - 'P' button
            </p>
            <p>
               <b>Quit</b> - 'Q' button
            </p>
         </div>
      </div>
   );
};
export default React.memo(Info);
