import React from "react";
import "./App.css";

class App extends React.Component {
  state = {
    /// Data for 10 questions
  };
  render() {
    const { quotes, randomQuoteIndex } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h1>Mini Quiz</h1>
          <p>Answer 10 questions in 60 seconds</p>
          <button> Go!</button>
        </header>
      </div>
    );
  }
}

export default App;
