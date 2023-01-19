import {GET_USERS, CREATE_USER, DELETE_USER, EDIT_USER, GET_USER} from "../types";

const initialState = {
    users: [],
    user: {}
}

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USERS:
            return {...state, users: action.payload}
        case DELETE_USER:
            return {...state, users: state.users.filter(item => item.id !== action.payload.id)}
        case CREATE_USER:
            return {...state, users: [...state.users, action.payload]}
        case EDIT_USER:
            return {
                ...state, users: state.users.map(item => {
                    if (item.id === action.payload.id) {
                        return action.payload
                    } else {
                        return item
                    }
                })
            }
        case GET_USER:
            return {...state, user: action.payload}
        default:
            return state
    }
}