import React from "react";

function Question({
  question,
  questionValue,
  questionCounter,
  questionCategory
}) {
  return (
    <div>
      <p>Question: {questionCounter}/10</p>
      <h5>{question}</h5>
      <p>Hint: {questionCategory}</p>
      <p>
        Points: <span className="points">{questionValue}</span>
      </p>
    </div>
  );
}

export default Question;
