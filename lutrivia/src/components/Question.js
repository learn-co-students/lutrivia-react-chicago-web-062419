import React from 'react';


class Question extends React.Component {
  constructor() {
    super()
    this.state = {
      answeredCorrectly: null,
    }
  }

  

  handleClick = event => {
    event.persist();
    if (this.state.answeredCorrectly == null) {
      this.setState({
        answeredCorrectly: this.props.answer + "" === event.target.value ? true : false,
                
      }, () => {
        if(this.state.answeredCorrectly){
          this.props.incrementScore()
        }
        return this.state.answeredCorrectly ? event.target.style.background = "PaleGreen" : event.target.style.background = "salmon"
      });
    } else {
      alert('you cannot vote twice!');
    }
  }

  render() {
    return (
      <div className='question-frame'>
        <h2>{this.props.text}</h2>
        <button type="button" value='true' onClick={this.handleClick}>True</button><span />
        <button type="button" value='false' onClick={this.handleClick}>False</button>
      </div>
    )
  }
}

export default Question;