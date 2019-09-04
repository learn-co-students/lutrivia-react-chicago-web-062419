
import React, { Component } from 'react';

class Header extends Component {

  render() {
    return (
      <header>
        <h1>Lutrivia</h1>
        <button id='large'>New Game</button>
        {this.props.name} your
        score is: {this.props.totalScore}
      </header>
    );
  }

}

export default Header;