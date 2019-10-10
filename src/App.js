import React from "react";
import "./App.css";
import LandingPage from "./Components/LandingPage";
import QuestionContainer from "./Components/QuestionContainer";

class App extends React.Component {
  state = {
    /// Data for 10 questions
    question: [
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
    gameStage: 0,
    questionCounter: 0,
    timer: 60,
    countdown: 0
  };
  render() {
    return (
      <div className="App">
        {this.state.gameStage === 0 && (
          <LandingPage startGame={this.startGame} />
        )}
        {this.state.gameStage === 1 && (
          <div>
            <QuestionContainer
              question={this.state.question[0].question}
              questionValue={this.state.question[0].value}
              submitAnswer={this.submitAnswer}
              questionCounter={this.state.questionCounter}
              timer={this.state.timer}
              userScore={this.state.userScore}
            />
          </div>
        )}
      </div>
    );
  }

  startGame = () => {
    this.newQuestion();
    this.startTimer();
    this.setState(oldState => {
      return { gameStage: 1 };
    });
  };

  newQuestion = () => {
    this.setState(oldState => {
      return { questionCounter: oldState.questionCounter + 1 };
    });
  };

  submitAnswer = userAnswer => {
    console.log(userAnswer, "<--- userAnswer");
    console.log("Submit Answer");
    if (userAnswer === this.state.question[0].answer) {
      this.correctAnswer();
    }
  };

  correctAnswer = () => {
    this.setState(oldState => {
      return { userScore: oldState.userScore + oldState.question[0].value };
    });
  };

  countdown = () => {
    this.setState(oldState => {
      return { timer: oldState.timer - 1 };
    });

    if (this.state.timer === 0) {
      clearInterval(this.state.countdown);
    }
  };

  startTimer() {
    if (this.state.timer > 0) {
      this.setState(() => {
        return { countdown: setInterval(this.countdown, 1000) };
      });
    }
  }
}

export default App;
