import React from 'react';
import Question from './Question';


class QuestionList extends React.Component {

  

  render(){
    const list = this.props.questions.map(item => {
     return <div className="container">
        <Question incrementScore={this.props.incrementScore} text={item.text} answer={item.answer} />
     </div>
    })
    return(
      <div>
        {list}
      </div>
    )
  }
}

export default QuestionList;