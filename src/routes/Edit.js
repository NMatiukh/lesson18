import React, {useEffect} from 'react';
import {Button, Form, Input, Typography} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {editUser, getUser} from "../redux/actions";
import {Link, redirect, useNavigate, useParams} from "react-router-dom";

const Edit = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.users.user);
    const navigate = useNavigate();
    const userId = useParams().id
    useEffect(() => {
        dispatch(getUser(userId))
    }, [userId]);
    const onFinish = (values) => {
        dispatch(editUser({...values, ...{id: user.id}}))
        navigate(`/user/${user.id}`)
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <div>
            <Typography.Title level={2}>Edit {user.firstName + " " + user.lastName}</Typography.Title>
            <Form
                name="edit"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                initialValues={user}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="First name"
                    name="firstName"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your fistName!',
                        },
                    ]}
                >
                    <Input/>
                </Form.Item>
                <Form.Item
                    label="Last name"
                    name="lastName"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your lastName!',
                        },
                    ]}
                >
                    <Input/>
                </Form.Item>
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your email!',
                        },
                        {
                            type: "email"
                        }
                    ]}
                >
                    <Input/>
                </Form.Item>
                <Form.Item
                    label="Url image"
                    name="image"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your url image!',
                        },
                    ]}
                >
                    <Input/>
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >

                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>

            </Form>
        </div>
    );
};

export default Edit;