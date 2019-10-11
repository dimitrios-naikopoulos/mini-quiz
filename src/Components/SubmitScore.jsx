import React, { Component } from "react";

class SubmitScore extends Component {
  state = { user: { name: "", score: this.props.score } };

  render() {
    return (
      <div>
        {this.state.user.score !== 0 && (
          <form onSubmit={this.handleSubmit} className="form-style-6">
            <label>
              Your name
              <input
                type="text"
                onChange={this.handleChange}
                value={this.state.name}
              />
            </label>
            <button>Submit</button>
          </form>
        )}
      </div>
    );
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.updateScoreBoard(this.state.user);
    this.setState({ user: { name: "", score: 0 } });
  };

  handleChange = event => {
    this.setState({
      user: { name: event.target.value, score: this.props.score }
    });
  };
}

export default SubmitScore;
