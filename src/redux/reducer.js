import { GET_QUESTION_FAILURE, GET_QUESTION_REQUEST, GET_QUESTION_SUCCESS } from "./action-types"

const initialState = {
    questions: [],
    isLoading: false,
    isError: false,
    theme: 'light',
    user: {}
}
export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_QUESTION_REQUEST:
            return { ...state, isLoading: true, isError: false };
        case GET_QUESTION_SUCCESS:
            return { ...state, isLoading: false, isError: false };
        case GET_QUESTION_FAILURE:
            return { ...state, isLoading: false, isError: true };
        default:
            return state
    }
}