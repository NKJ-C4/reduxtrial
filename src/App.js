import React from "react";
import { quizData } from "./quizData";
import { connect } from "react-redux";

import { setQuestion } from "./actions";

const mapStateToProps = (state) => {
  return {
    questions: state.quizQuestion,
    answers: state.quizOption,
    questionIndex: state.quizQuestionId
  };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onQuestionChange: (val) => {
            dispatch(setQuestion(val+1))
        }
    }
   
};
const App = (props) => {
  // console.log("reducer: ", props.store.getState());
  return (
    <div className="quiz-container">
        <h1>{props.questions}</h1>
        <div className="quiz-options">
            <ul>
                <li>{props.answers.answer_a}</li>
                <li>{props.answers.answer_b}</li>
                <li>{props.answers.answer_c}</li>
                <li>{props.answers.answer_d}</li>
            </ul>
        </div>
        <button onClick={() => props.onQuestionChange(props.questionIndex)}>Next</button>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
