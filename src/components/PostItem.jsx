import React from 'react';
import MyButton from "./UI/button/MyButton";

const PostItem = (props) => {

    const deletePost = () => {
        props.delete()
    }

    return (
        <div className="post">
            <div className="post__content">
                <strong>{props.number}. {props.post.title}</strong>
                <div>{props.post.body}</div>
            </div>
            <div className="post__btns">
                <MyButton onClick={() => props.remove(props.post)}>Delete Post</MyButton>
            </div>
        </div>
    );
};

export default PostItem;
