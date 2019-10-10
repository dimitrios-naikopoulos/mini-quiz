import React from "react";
import Question from "./Question";
import UserAnswer from "./UserAnwser";

function QuestionContainer({
  question,
  submitAnswer,
  questionValue,
  questionCounter,
  timer,
  userScore,
  questionCategory
}) {
  return (
    <div>
      <h3>{timer}</h3>
      <h2>Score: {userScore}</h2>
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
