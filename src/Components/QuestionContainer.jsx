import React from "react";
import Question from "./Question";
import UserAnswer from "./UserAnwser";
import LiveRanking from "./LiveRanking";

function QuestionContainer({
  question,
  submitAnswer,
  questionValue,
  questionCounter,
  timer,
  userScore,
  questionCategory,
  scoreBoard
}) {
  return (
    <div>
      <img
        src="https://images.vexels.com/media/users/3/128840/isolated/preview/c091629800ce3d91d8527d32d60bc46f-stopwatch-timer-by-vexels.png"
        alt="Timer"
        className="timerImage"
      />
      <h3 className="timer">{timer}</h3>
      <hr></hr>
      <h2>
        Score: <span className="points">{userScore}</span>
      </h2>
      <LiveRanking scoreBoard={scoreBoard} score={userScore} />
      <hr></hr>
      <Question
        question={question}
        questionCategory={questionCategory}
        questionValue={questionValue}
        questionCounter={questionCounter}
      />
      <hr></hr>
      <UserAnswer submitAnswer={submitAnswer} />
    </div>
  );
}

export default QuestionContainer;
