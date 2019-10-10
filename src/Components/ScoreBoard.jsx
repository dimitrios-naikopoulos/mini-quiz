import React from "react";
import ScoreForBoard from "./ScoreForBoard";

function ScoreBoard({ scoreBoard }) {
  return (
    <div className="App">
      <h1>Score Board</h1>
      <table className="scoreboard">
        <thead>
          <tr>
            <th>Name</th>
            <th>Score</th>
          </tr>
        </thead>
        <ScoreForBoard scoreBoard={scoreBoard} />
      </table>
    </div>
  );
}

export default ScoreBoard;
