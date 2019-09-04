import React, { Component } from 'react';

class ScoreForm extends Component {

  handleChange = (event) => {
    this.props.addName(event.target.value)
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.submitName();
  }

  render() {
    return (
      <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
        <input placeholder="enter name" type="text" />

        <input type="submit" value="Submit score" />
      </form>
    );
  }

}

export default ScoreForm;