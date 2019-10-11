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
      <h3>{timer}</h3>
      <h2>Score: {userScore}</h2>
      <LiveRanking scoreBoard={scoreBoard} score={userScore} />
      <Question
        question={question}
        questionCategory={questionCategory}
        questionValue={questionValue}
        questionCounter={questionCounter}
      />
      <UserAnswer submitAnswer={submitAnswer} />
    </div>
  );
}

export default QuestionContainer;
