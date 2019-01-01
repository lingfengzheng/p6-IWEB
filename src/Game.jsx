import React from 'react';


export default class Game extends React.Component{
    render(){
        return(
            <div>
                <div>
                <span>{this.props.question.question}</span>
                <span> ?</span>
                </div>
                <div>
                <input type = "text" defaultValue = {this.props.question.userAnswer || ""} onChange={(e)=>{
                    this.props.onQuestionAnswer(e.target.value);
                }}
                />
                </div>
            </div>
        );
    }
}