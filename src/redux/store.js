import {configureStore} from "@reduxjs/toolkit";
import {postReducer} from "./reducers/postReducer";
import {usersReducer} from "./reducers/usersReducer";

export default configureStore({
    reducer: {
        post: postReducer,
        users: usersReducer
    }
})