import React from "react";
import ScoreBoard from "./ScoreBoard";
import SubmitScore from "./SubmitScore";

function EndGame({ score, scoreBoard, updateScoreBoard, newGame }) {
  return (
    <div>
      <div className="form-style-6">
        {score <= 400 && <h1>Hmmm maybe next time..!!</h1>}
        {score > 400 && score <= 600 && <h1>Nice..!!</h1>}
        {score > 600 && score <= 900 && <h1>Good job..!!</h1>}
        {score > 900 && <h1>Congratulations..!!</h1>}
        <h2>Your Score is: {score}</h2>
        {score > 0 && (
          <SubmitScore
            scoreBoard={scoreBoard}
            updateScoreBoard={updateScoreBoard}
            score={score}
          />
        )}
        <input type="button" value="New Game" onClick={newGame} />
      </div>
      <div>
        <ScoreBoard scoreBoard={scoreBoard} />
      </div>
    </div>
  );
}

export default EndGame;
