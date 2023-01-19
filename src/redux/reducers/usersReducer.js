import {GET_COMMENTS, CREATE_COMMENT, DELETE_COMMENT, EDIT_COMMENT} from "../types";

const initialState = {
    comments: []
}

export const commentsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_COMMENTS:
            return {...state, comments: action.payload}
        case DELETE_COMMENT:
            return {...state, comments: state.comments.filter(item => item.id !== action.payload.id)}
        case CREATE_COMMENT:
            return {...state, comments: [...state.comments, action.payload]}
        case EDIT_COMMENT:
            return {
                ...state, comments: state.comments.map(item => {
                    if (item.id === action.payload.id) {
                        return action.payload
                    } else {
                        return item
                    }
                })
            }
        default:
            return state
    }
}