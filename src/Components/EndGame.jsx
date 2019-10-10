import React from "react";
import ScoreBoard from "./ScoreBoard";

function EndGame({ score, scoreBoard }) {
  return (
    <div>
      {score <= 400 && <h1>Hmmm maybe next time..!!</h1>}
      {score > 400 && score <= 600 && <h1>Nice..!!</h1>}
      {score > 600 && score <= 900 && <h1>Good job..!!</h1>}
      {score > 900 && <h1>Congratulations..!!</h1>}
      <h2>Your Score is: {score}</h2>
      <ScoreBoard scoreBoard={scoreBoard} />
    </div>
  );
}

export default EndGame;
