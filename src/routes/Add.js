import React from 'react';
import {Button, Form, Input, Typography} from "antd";
import {useDispatch} from "react-redux";
import {createUser} from "../redux/actions";

const Add = () => {
    const dispatch = useDispatch();

    const onFinish = (values) => {
        dispatch(createUser(values))
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <div>
            <Typography.Title level={2}>Add new user</Typography.Title>
            <Form
                name="add"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                initialValues={{
                    remember: true,
                }}
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
                    <Input />
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
                    <Input />
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
                    <Input />
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
                    <Input />
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

export default Add;