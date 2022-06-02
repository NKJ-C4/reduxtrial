import { CHANGE_QUESTION, FINISH_TEST, UPDATE_ANSWERS } from "./actionTypes"
import { quizData } from "./quizData"

const initialState = {
    quizQuestionId: quizData[0].id,
    quizQuestion: quizData[0].question, 
    quizOption: quizData[0].answers
}

const initialAnswers = [
    {
        question: "How to delete a directory in Linux?",
        answer: "",
    },
    {
        question: "How to add a directory in Linux?",
        answer: "",
    },
    {
        question: "How to code in Linux?",
        answer: "",
    },
    {
        question: "How to delete a file in Linux?",
        answer: "",
    },
    {
        question: "How to delete a partition in Linux?",
        answer: "",
    },
]
    

export const changeQuestions = (state=initialState, action={}) => {
    switch(action.type) {
        case CHANGE_QUESTION:
            console.log("state change", state)
            if(action.payload>4) return state
            return {...state, quizQuestionId: quizData[action.payload].id, quizQuestion: quizData[action.payload].question, quizOption: quizData[action.payload].answers};
        default:
            return state;
    }
}

export const updateAnswers = (state = initialAnswers, action={}) => {
    switch(action.type){
        case UPDATE_ANSWERS:
            console.log("state ans", state)
            let existingState = state;
            return [...state, existingState[action.payload.question].answer = action.payload.answer]
        default:
            return state;
    }
}