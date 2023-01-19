import axios from "axios";
import {CREATE_USER, DELETE_POST, DELETE_USER, EDIT_USER, GET_POST, GET_USER, GET_USERS} from "./types";

const URL = 'https://fake-server-ruby.vercel.app/';

//POST
export function getPost() {
    return async dispatch => {
        axios
            .get(URL + "post")
            .then(response => dispatch(
                {
                    type: GET_POST,
                    payload: response.data
                }
            ))
    }
}

export function deletePost(post) {
    return async dispatch => {
        axios
            .request(
                {
                    method: "DELETE",
                    url: URL + "post/" + post.id
                }
            )
            .then(response => dispatch(
                {
                    type: DELETE_POST,
                    payload: response.data
                }
            ))
    }
}

//COMMENTS

export function getUsers() {
    return async dispatch => {
        axios
            .get(URL + "users")
            .then(response => dispatch(
                {
                    type: GET_USERS,
                    payload: response.data
                }
            ))
    }
}
export function getUser(id) {
    return async dispatch => {
        axios
            .get(URL + "users/" + id)
            .then(response => dispatch(
                {
                    type: GET_USER,
                    payload: response.data
                }
            ))
    }
}


export function deleteUser(user) {
    return async dispatch => {
        axios
            .request(
                {
                    method: "DELETE",
                    url: URL + "users/" + user.id
                }
            )
            .then(response => dispatch(
                {
                    type: DELETE_USER,
                    payload: user
                }
            ))
    }
}

export function createUser(user) {
    return async dispatch => {
        axios
            .request(
                {
                    method: "POST",
                    url: URL + "users",
                    data: user
                }
            )
            .then(response => dispatch(
                {
                    type: CREATE_USER,
                    payload: response.data
                }
            ))
    }
}

export function editUser(user) {
    return async dispatch => {
        axios
            .request(
                {
                    method: "PUT",
                    url: URL + "users/" + user.id,
                    data: user
                }
            )
            .then(response => dispatch(
                {
                    type: EDIT_USER,
                    payload: response.data
                }
            ))
    }
}