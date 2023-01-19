import React from 'react';
import {useRouteError} from "react-router-dom";
import {Typography} from "antd";

const ErrorPage = () => {
    const error = useRouteError();
    console.error(error)
    return (
        <div>
            <Typography.Title>Oops!</Typography.Title>
            <Typography.Text>Sorry...</Typography.Text>
            <Typography.Text><i>{error.statusText || error.message}</i></Typography.Text>
        </div>
    );
};

export default ErrorPage;