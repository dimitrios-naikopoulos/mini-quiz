import React from "react";
import "../App.css";

function LandingPage({ startGame }) {
  return (
    <div>
      <h1>Mini Quiz</h1>
      <p>Answer 10 questions in 60 seconds</p>
      <button className="button" onClick={startGame}>
        <span>Go! </span>
      </button>
    </div>
  );
}

export default LandingPage;
