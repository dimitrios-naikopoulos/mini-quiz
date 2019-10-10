import React from "react";

function Question({
  question,
  questionValue,
  questionCounter,
  questionCategory
}) {
  return (
    <div>
      <p>Hint: {questionCategory}</p>
      <p>Question: {questionCounter}/10</p>
      <p>{question}</p>
      <p>Points: {questionValue}</p>
    </div>
  );
}

export default Question;
