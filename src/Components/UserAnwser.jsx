import React, { Component } from "react";

class UserAnswer extends Component {
  state = {
    userAnswer: ""
  };

  render() {
    return (
      <form
        className="form-style-6"
        onSubmit={this.handleSubmit}
        autoComplete="off"
      >
        <label>
          Your answer:
          <input
            value={this.state.userAnswer}
            onChange={this.handleInputChange}
            type="text"
            name="userAnswer"
          ></input>
        </label>
        <input type="button" value="Submit" />
      </form>
    );
  }

  handleSubmit = event => {
    event.preventDefault();
    const { userAnswer } = this.state;
    this.props.submitAnswer(userAnswer);
    this.setState({ userAnswer: "" });
  };

  handleInputChange = event => {
    this.setState({ userAnswer: event.target.value });
  };
}

export default UserAnswer;
