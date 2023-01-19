import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getUser} from "../redux/actions";
import {Space, Image, Typography, Button, Card, Avatar} from "antd";
import {useParams} from "react-router-dom";
import {DeleteOutlined, EditOutlined, UserOutlined} from "@ant-design/icons";
import Meta from "antd/es/card/Meta";

const User = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.users.user)
    const userId = useParams().id
    useEffect(() => {
        dispatch(getUser(userId))
    }, [userId]);
    return (
        <div style={{display: "flex", flexDirection: "column"}}>
            <Card
                style={{
                    width: 300,
                }}
                cover={
                    <img
                        alt={user.firstName + " " + user.lastName}
                        src={user.image}
                    />
                }
                actions={[
                    <EditOutlined key="edit"/>,
                    <DeleteOutlined key="delete"/>,
                ]}
            >
                <Meta
                    avatar={<Avatar icon={<UserOutlined/>}/>}
                    title={user.firstName + " " + user.lastName}
                    description={user.email}
                />
            </Card>
        </div>
    );
};

export default User;