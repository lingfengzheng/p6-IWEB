import {combineReducers}from 'redux';
import {QUESTION_ANSWER,SUBMIT,INIT_QUESTIONS,CHANGE_QUESTION} from "./actions";


function score (state = 0, action = {}){
    switch(action.type){
        case SUBMIT:
            let newState = JSON.parse(JSON.stringify(state));
            let newValue = newState;
            return state.map((question, i)=>{
                return {...question, score: action.questions.answer===action.questions.userAnswer ? newValue++ : newValue}
            })
        default:
            return state;
    }
}
function finished (state =false, action ={}){
    switch(action.type){
        case SUBMIT:
            let newState = JSON.parse(JSON.stringify(state));
            let newValue = true;
            newState=newValue;
            return newState;
        default:
            return state;
    }
}
function currentQuestion(state=0, action ={}){
    switch(action.type){
        case CHANGE_QUESTION:
            let newState = JSON.parse(JSON.stringify(state));
            let newValue = newState++;
            return state.map((question,i)=>{
                i = newValue;
                return {...question,userAnswer: action.payload.index=== i ? action.payload.answer : question.userAnswer}
            })

        default:
            return state;
    }
}
function questions (state =[], action ={}){
    switch(action.type){
        case QUESTION_ANSWER:
            return state.map((question,i)=>{
                return {...question,userAnswer: action.payload.index=== i ? action.payload.answer : question.userAnswer}
            })
        case INIT_QUESTIONS:

                return action.questions;

        default:
            return state;
    }
}
const GlobalState = (combineReducers({
    score,
    finished,
    currentQuestion,
    questions
}));

export default GlobalState;