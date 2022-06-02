import React, { useEffect, useState } from "react";
import { quizData } from "./quizData";
import { connect } from "react-redux";

import { setAnswer, setQuestion } from "./actions";
import LastScreen from "./LastScreen";

const mapStateToProps = (state) => {
  return {
    questions: state.changeQuestions.quizQuestion,
    answers: state.changeQuestions.quizOption,
    questionIndex: state.changeQuestions.quizQuestionId,
    selectedAnswers: state.updateAnswers
  };
};

const mapDispatchToProps = (dispatch) => {
    return {
      onQuestionChange: (val) => {
        console.log("index:", val)
          dispatch(setQuestion(val+1))          
      },

      onUpdateAnswer: (index, val) => {
        let newObj = {
          question: index,
          answer: val
        }
        dispatch(setAnswer(newObj))
      }
    }
   
};
const App = (props) => {
  // console.log("reducer: ", props.store.getState());
  const [isChecked, setIsChecked] = useState(null);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    if(props.selectedAnswers.every((item) => item.answer !== "")){
      setIsFinished(true);
    }
  }, [props.selectedAnswers])
  return (
    <div className="quiz-container">
      {!isFinished ?
        <div className="questionsandanswers">
          <h1>{props.questions}</h1>
          <div className="quiz-options">
              <ul>
                  <li><input checked={isChecked === props.answers.answer_a} name="quizAnswer" type="radio" value={props.answers.answer_a} onClick={(e) => {props.onUpdateAnswer(props.questionIndex, e.target.value); setIsChecked(e.target.value)}}/><label htmlFor={props.answers.answer_a}>{props.answers.answer_a}</label></li>
                  <li><input checked={isChecked === props.answers.answer_b} name="quizAnswer" type="radio" value={props.answers.answer_b} onClick={(e) => {props.onUpdateAnswer(props.questionIndex, e.target.value); setIsChecked(e.target.value)}}/><label htmlFor={props.answers.answer_b}>{props.answers.answer_b}</label></li>
                  <li><input checked={isChecked === props.answers.answer_c} name="quizAnswer" type="radio" value={props.answers.answer_c} onClick={(e) => {props.onUpdateAnswer(props.questionIndex, e.target.value); setIsChecked(e.target.value)}}/><label htmlFor={props.answers.answer_c}>{props.answers.answer_c}</label></li>
                  <li><input checked={isChecked === props.answers.answer_d} name="quizAnswer" type="radio" value={props.answers.answer_d} onClick={(e) => {props.onUpdateAnswer(props.questionIndex, e.target.value); setIsChecked(e.target.value)}}/><label htmlFor={props.answers.answer_d}>{props.answers.answer_d}</label></li>
              </ul>
          </div>
          <button onClick={() => {props.onQuestionChange(props.questionIndex); setIsChecked(false)}}>Next</button>
        </div> 
      :
        <LastScreen />
      }
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
