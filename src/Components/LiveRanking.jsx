import React, { Component } from "react";

class LiveRanking extends Component {
  state = {
    nextUser: "",
    nextScore: -1
  };

  render() {
    return (
      <div>
        {this.state.nextUser !== "" && (
          <h5>
            Next in Ranking: {this.state.nextUser} {this.state.nextScore}
          </h5>
        )}
      </div>
    );
  }
  componentDidUpdate() {
    console.log("here!!!!");
    if (this.state.nextScore < this.props.score) {
      let temporaryScoreBoard = [...this.props.scoreBoard];
      temporaryScoreBoard.sort((a, b) => (a.score > b.score ? 1 : -1));
      const nextUserScoreBoard = temporaryScoreBoard.find(user => {
        return user.score > this.props.score;
      });
      this.setState(() => {
        return {
          nextUser: nextUserScoreBoard.name,
          nextScore: nextUserScoreBoard.score
        };
      });
    }
  }
}

export default LiveRanking;
