import {GET_POST, DELETE_POST} from "../types";

const initialState = {
    post: {}
}

export const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_POST:
            return {...state, post: action.payload}
        case DELETE_POST:
            return {...state, post: {}}
        default:
            return state
    }
}