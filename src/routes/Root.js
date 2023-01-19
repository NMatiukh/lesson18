import {Link, Outlet} from "react-router-dom";
import {Button, Divider, Input, Menu, Space} from "antd";
import {SearchOutlined} from "@ant-design/icons";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getUsers} from "../redux/actions";

export default function Root() {
    const dispatch = useDispatch();
    const users = useSelector(state => state.users.users)
    useEffect(() => {
        dispatch(getUsers())
    }, []);
    return (
        <Space>
            <div>
                <Space>
                    <Input placeholder="input search text" prefix={<SearchOutlined/>}/>
                    <Button>New</Button>
                </Space>
                <Divider/>
                <Menu
                    items={users.map(value => {
                        return {
                            label: <Link to={`/user/${value.id}`}>{value.firstName + " " + value.lastName}</Link>,
                            key: value.id,
                        }
                    })}
                    />
            </div>
            <Divider type={"vertical"}/>
            <div>
                <Outlet/>
            </div>
        </Space>
    );
}