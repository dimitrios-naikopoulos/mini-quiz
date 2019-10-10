import React from "react";

function LandingPage({ startGame }) {
  return (
    <div>
      <h1>Mini Quiz</h1>
      <p>Answer 10 questions in 60 seconds</p>
      <button onClick={startGame}> Go!</button>
    </div>
  );
}

export default LandingPage;
