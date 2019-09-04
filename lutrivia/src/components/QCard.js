import React, { Component }from 'react'

class QCard extends Component{
    constructor(props){
        super(props)
        this.state = {
            selected:""
        }
    }

    handleClick = (event) =>{
        event.target.disabled = true
       if(event.target.value === String(this.props.answer)){
            event.target.style.background = 'green'
            this.props.handleAnswer()
       }
       else {
           event.target.style.background = 'red'
       }
    }

    render(){
        return(
            <li>
                <h2>{this.props.text}</h2> 
                <button onClick={this.handleClick} value={true}>True</button>
                <button onClick={this.handleClick} value={false}>False</button>
            </li>
        )
    }
}

export default QCard;