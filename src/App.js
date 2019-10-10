import React from "react";
import "./App.css";

class App extends React.Component {
  state = {
    /// Data for 10 questions
    questions: [
      {
        id: 37045,
        answer: "mint",
        question:
          "In the 1690s Newton was the bane of counterfeiters, introducing newly milled edges while working here",
        value: 400,
        airdate: "2000-03-20T12:00:00.000Z",
        created_at: "2014-02-11T23:07:57.183Z",
        updated_at: "2014-02-11T23:07:57.183Z",
        category_id: 4420,
        game_id: null,
        invalid_count: null,
        category: {
          id: 4420,
          title: "hello, newton!",
          created_at: "2014-02-11T23:07:56.673Z",
          updated_at: "2014-02-11T23:07:56.673Z",
          clues_count: 5
        }
      }
    ],
    userScore: 0,
    gameStarted: false
  };
  render() {
    const { quotes, randomQuoteIndex } = this.state;
    return (
      <div className="App">
        <h1>Mini Quiz</h1>
        <p>Answer 10 questions in 60 seconds</p>
        <button onClick={this.startGame}> Go!</button>
      </div>
    );
  }

  startGame = () => {
    this.setState(oldState => {
      return { gameStarted: !oldState.gameStarted };
    });
  };
}

export default App;
