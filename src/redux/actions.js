import axios from "axios";
import {CREATE_COMMENT, DELETE_COMMENT, DELETE_POST, EDIT_COMMENT, GET_COMMENTS, GET_POST} from "./types";

const URL = 'http://localhost:3000/';

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

export function getComments() {
    return async dispatch => {
        axios
            .get(URL + "comments")
            .then(response => dispatch(
                {
                    type: GET_COMMENTS,
                    payload: response.data
                }
            ))
    }
}

export function deleteComment(comment) {
    return async dispatch => {
        axios
            .request(
                {
                    method: "DELETE",
                    url: URL + "comments/" + comment.id
                }
            )
            .then(response => dispatch(
                {
                    type: DELETE_COMMENT,
                    payload: comment
                }
            ))
    }
}

export function createComment(comment) {
    return async dispatch => {
        axios
            .request(
                {
                    method: "POST",
                    url: URL + "comments",
                    data: comment
                }
            )
            .then(response => dispatch(
                {
                    type: CREATE_COMMENT,
                    payload: response.data
                }
            ))
    }
}

export function editComment(comment) {
    return async dispatch => {
        axios
            .request(
                {
                    method: "PUT",
                    url: URL + "comments/" + comment.id,
                    data: comment
                }
            )
            .then(response => dispatch(
                {
                    type: EDIT_COMMENT,
                    payload: response.data
                }
            ))
    }
}