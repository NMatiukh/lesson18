import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getUsers} from "../redux/actions";
import {Button, Divider, Menu, Typography} from "antd";
import {Link, Outlet} from "react-router-dom";
import("./app.css")

const Root = () => {
    const dispatch = useDispatch();
    const users = useSelector(state => state.users.users)
    useEffect(() => {
        dispatch(getUsers())
    }, []);
    return (
        <div className={'rootStyle'}>
            <div>
                <div>
                    <Typography.Title>Users App</Typography.Title>
                </div>
                <Divider/>
                <Menu
                    items={users.map(value => {
                        return {
                            label: <Link to={`/user/${value.id}`}>{value.firstName + " " + value.lastName}</Link>,
                            key: value.id
                        }
                    })}
                    />
               <Link to={`/user/add`}><Button style={{width: "100%"}}>Add new</Button></Link>
            </div>
            <Divider type={"vertical"}/>
            <div className={'content'}>
                <Outlet/>
            </div>
        </div>
    );
}
    ;

    export default Root;