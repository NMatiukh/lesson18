import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {deleteUser, getUser} from "../redux/actions";
import {Link, useParams} from "react-router-dom";
import {Avatar, Card, message} from "antd";
import {DeleteOutlined, EditOutlined, UserOutlined} from "@ant-design/icons";
import Meta from "antd/es/card/Meta";

const User = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.users.user);
    const userId = useParams().id
    useEffect(() => {
        dispatch(getUser(userId))
    }, [userId]);
    return (
        <div>
            <Card
                style={{
                    width: 300
                }}
                cover={
                    <img src={user.image} alt={user.firstName + " " + user.lastName}/>
                }
                actions={[
                    <Link to={`/user/${user.id}/edit`}><EditOutlined key={"edit"}/></Link>,
                    <Link to={'/'}><DeleteOutlined onClick={() => {
                        dispatch(deleteUser(user))
                        message.success('Delete!')
                    }} key={"delete"}/></Link>

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