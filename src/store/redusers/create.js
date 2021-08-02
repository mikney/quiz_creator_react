import {CREATE_QUIZ_QUESTION, RESET_QUIZ_CREATION} from "../actions/actionTypes";

const initialState = {
    quiz: []
}


export default function createReducer(state = initialState, action) {
    console.log(state.quiz)
    console.log(action.item)
    switch (action.type) {
        case CREATE_QUIZ_QUESTION:
            return {
                ...state,
                quiz: [...state.quiz, action.item]
            }
        case RESET_QUIZ_CREATION:
            return {
                ...state, quiz: []
            }
        default:
            return state
    }

}