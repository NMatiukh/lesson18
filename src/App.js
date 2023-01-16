import React, {useEffect, useState} from 'react';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {createComment, deleteComment, editComment, getComments, getPost} from "./redux/actions";
import {Button, Image, Input, Space, Timeline, Typography} from 'antd';

const {Text} = Typography;

const App = () => {
    const post = useSelector(state => state.post.post)
    const [commentIsEditing, setCommentIsEditing] = useState(null);
    const [editCommentInputValue, setEditCommentInputValue] = useState('');
    const comments = useSelector(state => state.comments.comments)
    const dispatch = useDispatch()

    const [inputCreate, setInputCreate] = useState('');

    useEffect(() => {
        dispatch(getPost());
        dispatch(getComments());
    }, []);

    function onChangeInputCreateHandler(e) {
        setInputCreate(e.target.value);
    }

    const onButtonClickCreate = () => {
        dispatch(createComment({
            body: inputCreate,
            date: new Date()
        }))
    }

    const onTextClickDeleteComment = (value) => {
        dispatch(deleteComment(value));
    }

    function changeEditCommentInputValue(e) {
        setEditCommentInputValue(e.target.value)
    }

    const onButtonClickEditComment = (value) => {
        setCommentIsEditing(value.id)
        setEditCommentInputValue(value.body)
    }
    const onButtonClickSaveComment = (value) => {
        dispatch(editComment({...value, ...{body: editCommentInputValue}}))
        setCommentIsEditing(null)
    }


    return (
        <div className={'App'}>
            <Image
                width={600}
                src={post.image}
                alt={post.name}
            />
            <div className={'content'}>
                <div style={{display: "flex", flexDirection: "row"}}>
                    <Input onChange={onChangeInputCreateHandler}/>
                    <Button onClick={onButtonClickCreate}>Add</Button>
                </div>
                <Timeline style={{width: '100%'}}>
                    {
                        comments.length !== 0 ?
                            comments.map(value => <Timeline.Item style={{
                                display: "flex",
                                flexDirection: 'row',
                                justifyContent: "space-between",
                                width: '100%',
                                padding: 20
                            }} key={value.id}>
                                <Space>
                                    {
                                        commentIsEditing === value.id ?
                                            <Input onChange={changeEditCommentInputValue}
                                                   value={editCommentInputValue}/> :
                                            <Text strong>{value.body}</Text>
                                    }

                                    <Text mark> {value.date} </Text>
                                    {
                                        commentIsEditing === value.id ?
                                            <Button onClick={() => onButtonClickSaveComment(value)}>Save</Button>
                                            : <Button onClick={() => onButtonClickEditComment(value)}>Edit</Button>

                                    }
                                    <Button danger onClick={() => {
                                        onTextClickDeleteComment(value)
                                    }}>Delete</Button>
                                </Space>

                            </Timeline.Item>) :
                            <Text type="secondary">Pls add some comment!</Text>
                    }
                </Timeline>
            </div>
        </div>
    );
};

export default App;