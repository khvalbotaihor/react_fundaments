import React, {useState} from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

const PostForm = ({create}) => {

    const [post, setPost] = useState({
        title:'',
        body: ''
    })

    const AddNewPost = (e) => {
        e.preventDefault();
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)
        setPost({title:'',body: ''})
    }

    return (
        <div>
            <form>
                {/*Controlled component*/}
                <MyInput
                    type="text"
                    placeholder="Post name"
                    value={post.title}
                    onChange={e => setPost({...post, title: e.target.value})}
                />
                {/*Not controlled component*/}
                <MyInput
                    type="text"
                    placeholder="Post description"
                    value={post.body}
                    onChange={e => setPost({...post, body: e.target.value})}
                />
                <MyButton onClick={AddNewPost}>Add Post</MyButton>
            </form>
        </div>
    );
};

export default PostForm;
