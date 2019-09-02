import React, { Component } from "react";
import "./App.css";

class Card extends Component {
  handleClick = event => {
    let answer = event.target.name;
    let select = event.target.innerText;

    if (answer === select) {
      this.props.updateScore()
      event.target.style.backgroundColor="green"
      event.target.style.color="white"
    } else {
        event.target.style.backgroundColor="red"
        event.target.style.color="white" 
    }
  };

  capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  render() {
    // console.log(this.props.q)
    return (
      <div>
        {this.props.q.map(question => {
          return (
            <div key={question.text} className="card">
              <div>{question.text}</div>
              {question.answer}
              <button
                name={question.answer.toString().toUpperCase()}
                onClick={event => this.handleClick(event)}
              >
                TRUE
              </button>
              <button
                name={question.answer.toString().toUpperCase()}
                onClick={event => this.handleClick(event)}
              >
                FALSE
              </button>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Card;
