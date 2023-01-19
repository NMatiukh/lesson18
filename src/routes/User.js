import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getUser} from "../redux/actions";
import {Space, Image, Typography, Button} from "antd";
import {useParams} from "react-router-dom";

const User = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.users.user)
    const userId = useParams().id
    useEffect(() => {
        dispatch(getUser(userId))
    }, [userId]);
    return (
        <div style={{display: "flex", flexDirection: "column"}}>
            <div>
                <Image src={user.image}/>
                <div>
                    <Typography.Title>{user.firstName + " " + user.lastName}</Typography.Title>
                    <Typography.Text>{user.email}</Typography.Text>
                    <div>
                        <Space>
                            <Button>Edit</Button>
                            <Button danger>Delete</Button>
                        </Space>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default User;