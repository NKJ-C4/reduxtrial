import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { quizData } from "./quizData";

const mapStateToProps = (state) => {
    return {
        selectedAnswers: state.updateAnswers
    }
}
const LastScreen = props => {
    const[data, setData] = useState([]);
    useEffect(() => {
        fetchData();
    },[])

    const fetchData = () => {
        let allData = quizData;
        setData(allData)
    }
    return(
        <div className="lastscreen">
            <h1>ANSWERS</h1>
            {props.selectedAnswers.map((item, index) => {
                if(index<data.length){
                    return (
                        <div className="questions-result-container">
                            <div className="quiz-question">{item.question}</div>
                            <div className="quiz-ans">{item.answer}</div>
                            <div className={item.answer === data[index] ?.correct_answers? "correct_ans": "wrong_ans"}>{item.answer === data[index]?.correct_answers? "Correct" : "Not Correct"}</div>
                        </div>
                    )
                }
                
            })}
        </div>
    )
}
{/*  */}
export default connect(mapStateToProps)(LastScreen)