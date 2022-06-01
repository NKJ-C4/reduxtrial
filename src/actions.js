import { CHANGE_QUESTION } from "./actionTypes";

export const setQuestion = text => {
    console.log(text);
    return {
        type: CHANGE_QUESTION,
        payload: text
    }
}
// import { createStore } from "redux";

// const reducer = (state = 0, action) => {
//   if (action.type === "INCREMENT") {
//     return state + action.payload;
//   } else if (action.type === "DECREMENT") {
//     return state - action.payload;
//   }
//   return state;
// };

// export const store = createStore(reducer);

// store.subscribe(() => {
//   console.log("current state: ", store.getState());
// });

// store.dispatch({
//   type: "INCREMENT",
//   payload: 1
// });

// store.dispatch({
//   type: "INCREMENT",
//   payload: 5
// });

// store.dispatch({
//   type: "DECREMENT",
//   payload: 2
// });

