import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';
import Game from './Game';
import {changeQuestion, questionAnswer} from "./redux/actions";

class App extends Component {
    constructor(props){
        super(props);
        this.appClick = this.appClick.bind(this);
    }
    appClick(index){
        this.props.dispatch(changeQuestion(index));
        console.log(this.props.index)
    }
  render() {
      console.log(this.props.questions)
    return (

      <div>

      <Game question = {this.props.questions[this.props.currentQuestion ]}
      onQuestionAnswer={(answer)=>{
        this.props.dispatch(questionAnswer(this.props.currentQuestion,answer))
      }}/>

          <button>anterior</button>
          <button>submit</button>
          <button onClick={()=>this.appClick(this.props.index)}>siguiente</button>



      </div>
    );
  }
}

function mapStateToProps(state) {
  return{
      score: state.score,
      finished: state.finished,
      currentQuestion: state.currentQuestion,
      questions:state.questions
  };
}

export default connect (mapStateToProps)(App);
