import React from 'react';

import Header from './components/Header';
import QuestionsList from './components/QuestionsList';
import ScoreForm from './components/ScoreForm';
import data from './data'


class App extends React.Component {

  constructor() {
    super()
    this.state = {
      counter: 0,
      name: "",
      finalName: ""
    }
  }

  incrementScore = () => { 
    this.setState((prevState) => {
      return {counter: prevState.counter += 1}
    })
  }

  updateName = (newName) => {
    return this.setState({name: newName})
  }

  submitName = () => {
    return this.setState({finalName: this.state.name})
  }
  
  render(){
      return (
        <div>
          <Header name={this.state.finalName} totalScore={this.state.counter}/>
          <QuestionsList incrementScore={this.incrementScore} questions={data.questions}/>
          <ScoreForm submitName={this.submitName} addName={this.updateName} />
        </div>
      );
  }
}

export default App;
