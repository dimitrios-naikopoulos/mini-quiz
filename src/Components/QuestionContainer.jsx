import React from "react";
import Question from "./Question";
import UserAnswer from "./UserAnwser";

function QuestionContainer({
  question,
  submitAnswer,
  questionValue,
  questionCounter
}) {
  return (
    <div>
      <Question
        question={question}
        questionValue={questionValue}
        questionCounter={questionCounter}
      />
      <UserAnswer submitAnswer={submitAnswer} />
    </div>
  );
}

export default QuestionContainer;
