import React, { Component } from 'react';
import QCard from './QCard'
import NameForm from './NameForm'

class QContainer extends Component {
    constructor(){
        super()
        this.state = {
            numCorrect: 0
        }
    }

    handleAnswer = ()=>{
        this.setState({
            numCorrect: this.state.numCorrect + 1
        })
    }

    render() {
        console.log(this.state.numCorrect)
        const questionComponents = this.props.questions.map(question => {
          return <QCard
            key={question.text}
            text={question.text}
            answer={question.answer} 
            handleAnswer={this.handleAnswer}
            />
        })

        return (
            
            <div>
                <header>
                    <h1> Lutrivia </h1>
                    <button>New Game</button>
                    Score: {this.state.numCorrect}
                </header>
                <ul>
                    {questionComponents}
                </ul>
                <NameForm />
            </div>
        );
    }
}

export default QContainer;