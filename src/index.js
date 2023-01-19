import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Provider} from "react-redux";
import store from "./redux/store";
import 'antd/dist/reset.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Root from "./routes/Root";
import ErrorPage from "./ErrorPage";
import User from "./routes/User";
import Edit from "./routes/Edit";
import Add from "./routes/Add";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: "user/:id",
                element: <User/>
            },
            {
                path: "user/:id/edit",
                element: <Edit/>
            },
            {
                path: "user/add",
                element: <Add/>
            },
        ]
    }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <RouterProvider router={router}/>
    </Provider>
);





