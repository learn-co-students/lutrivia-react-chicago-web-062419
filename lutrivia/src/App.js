import React, { Component } from "react";
import questions from "./data";
import Submit from "./Submit";
import Score from "./Score";
import Card from "./Card";
import NewGame from "./NewGame";

export default class App extends Component {
  state = {
    score: 0,
    name: "",
    players: {
      name: "",
      score: ""
    }
  };

  submitScore = score => {
    this.setState({ score: score });
  };

  updateScore = () => {
    let prevState = this.state.score;
    this.setState({ score: prevState + 1 });
    console.log("updated");
  };

  updateName = name => {
    this.setState({ name: name }, () => this.updateState());
  };

  updateState = () => {
    document.querySelector(
      ".main"
    ).innerHTML = `<div> ${this.state.name} finished with ${this.state.score}</div>`;
    this.setState({
      players: {
        ...this.state.players,
        name: this.state.name,
        score: this.state.score
      }
    });
  };

  render() {
    console.log(this.state);
    return (
      <div className="main">
        <Score score={this.state.score} />
        <NewGame resetGame={this.resetGame} />
        <Card q={questions.questions} updateScore={this.updateScore} />
        <Submit submitScore={this.submitScore} updateName={this.updateName} />
      </div>
    );
  }
}
