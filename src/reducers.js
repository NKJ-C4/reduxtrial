import { CHANGE_QUESTION } from "./actionTypes"
import { quizData } from "./quizData"

const initialState = {
    
        quizQuestionId: quizData[0].id,
        quizQuestion: quizData[0].question, 
        quizOption: quizData[0].answers
    
}

export const changeQuestions = (state=initialState, action={}) => {
    switch(action.type) {
        case CHANGE_QUESTION:
            if(action.payload>10) return;
            return {...state, quizQuestionId: quizData[action.payload-1].id, quizQuestion: quizData[action.payload-1].question, quizOption: quizData[action.payload-1].answers};
        default:
            return state;
    }
}