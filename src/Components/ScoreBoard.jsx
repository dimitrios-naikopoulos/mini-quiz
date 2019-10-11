import React from "react";
import ScoreForBoard from "./ScoreForBoard";

function ScoreBoard({ scoreBoard }) {
  return (
    <div>
      <h1>Score Board</h1>
      <table className="scoreboard">
        <thead>
          <tr>
            <th className="scoreBoardName">Name</th>
            <th className="scoreBoardScore">Score</th>
          </tr>
        </thead>
        <ScoreForBoard scoreBoard={scoreBoard} />
      </table>
    </div>
  );
}

export default ScoreBoard;
