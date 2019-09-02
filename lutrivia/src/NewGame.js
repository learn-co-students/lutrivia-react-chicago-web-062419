import React, { Component } from "react";

class NewGame extends Component {
  handleClick = () => {
    this.props.resetGame();
  };
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>New Game</button>
      </div>
    );
  }
}

export default NewGame;
