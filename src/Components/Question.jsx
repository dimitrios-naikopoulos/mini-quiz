import React from "react";

function Question({ question, questionValue, questionCounter }) {
  return (
    <div>
      <p>Question: {questionCounter}/10</p>
      <p>{question}</p>
      <p>Points: {questionValue}</p>
    </div>
  );
}

export default Question;
