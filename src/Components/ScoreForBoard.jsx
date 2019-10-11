import React from "react";

function ScoreForBoard({ scoreBoard }) {
  return (
    <tbody>
      {scoreBoard.map((person, index) => {
        return (
          <tr key={index}>
            <th>{person.name}</th>
            <th className="points">{person.score}</th>
          </tr>
        );
      })}
    </tbody>
  );
}

export default ScoreForBoard;
