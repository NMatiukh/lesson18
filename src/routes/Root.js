import {Link, Outlet} from "react-router-dom";
import {Button, Divider, Input, Menu, Space, Typography} from "antd";
import {SearchOutlined} from "@ant-design/icons";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getUsers} from "../redux/actions";
import "./App.css"

export default function Root() {
    const dispatch = useDispatch();
    const users = useSelector(state => state.users.users)
    useEffect(() => {
        dispatch(getUsers())
    }, []);
    return (
        <div className={"rootStyle"}>
            <div>
                <div>
                    <Typography.Title>Users App</Typography.Title>
                </div>
                <Divider/>
                <Menu
                    items={users.map(value => {
                        return {
                            label: <Link to={`/user/${value.id}`}>{value.firstName + " " + value.lastName}</Link>,
                            key: value.id,
                        }
                    })}
                />
                <Button style={{width: "100%"}}>New</Button>
            </div>
            <Divider type={"vertical"}/>
            <div className={"content"}>
                <Outlet/>
            </div>
        </div>
    );
}