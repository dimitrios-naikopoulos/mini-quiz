import React from "react";
import "./App.css";
import LandingPage from "./Components/LandingPage";
import QuestionContainer from "./Components/QuestionContainer";
import EndGame from "./Components/EndGame";
const axios = require("axios");

class App extends React.Component {
  state = {
    question: [],
    userScore: 0,
    gameStage: 0,
    questionCounter: 0,
    timer: 60,
    countdown: 0,
    scoreBoard: [{ name: "Alex", score: 400 }, { name: "Mary", score: 700 }]
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
              questionCategory={this.state.question[0].category.title}
              question={this.state.question[0].question}
              questionValue={this.state.question[0].value}
              submitAnswer={this.submitAnswer}
              questionCounter={this.state.questionCounter}
              timer={this.state.timer}
              userScore={this.state.userScore}
            />
          </div>
        )}
        {this.state.gameStage === 3 && (
          <EndGame
            score={this.state.userScore}
            scoreBoard={this.state.scoreBoard}
          />
        )}
      </div>
    );
  }

  startGame = async () => {
    await this.newQuestion();
    this.startTimer();
    this.setState(oldState => {
      return { gameStage: 1 };
    });
  };

  async getDataAxios() {
    console.log("request");
    const response = await axios.get("http://jservice.io/api/random");
    console.log(response.data, "request");
    return response;
  }
  newQuestion = async () => {
    if (this.state.questionCounter === 10) {
      this.setState({ gameStage: 3 });
    }
    const newResponse = await this.getDataAxios();
    this.setState(oldState => {
      return {
        questionCounter: oldState.questionCounter + 1,
        question: newResponse.data
      };
    });
  };

  submitAnswer = userAnswer => {
    console.log(userAnswer, "<--- userAnswer");
    console.log("Submit Answer");
    if (this.state.question[0].answer.includes(" ") && userAnswer.length > 3) {
      if (
        this.state.question[0].answer
          .toLowerCase()
          .includes(userAnswer.toLowerCase())
      ) {
        this.correctAnswer();
      }
    } else {
      if (
        this.state.question[0].answer.toLowerCase() === userAnswer.toLowerCase()
      ) {
        this.correctAnswer();
      }
    }

    this.newQuestion();
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
      this.setState({ gameStage: 3 });
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
