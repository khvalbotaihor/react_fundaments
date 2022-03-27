import React, {useState} from "react";
import './styles/App.css'
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";

function App() {

    const [posts, setPosts] = useState([
        {id:1, title: "JavaScript 1", body: 'Description 1'},
        {id:2, title: "JavaScript 2", body: 'Description 2'},
        {id:3, title: "JavaScript 3", body: 'Description 3'},
    ])

    const [post, setPost] = useState({
        title:'',
        body: ''
    })

    const AddNewPost = (e) => {
        e.preventDefault();
        const newPost = {
            id: Date.now(),
            title: post.title,
            body: post.body
        }
        setPosts([...posts, newPost])
        setPost({
            title:'',
            body: ''
        })
    }

  return (
    <div className="App">
        <form>
            {/*Controlled component*/}
            <MyInput
                type="text"
                placeholder="Post name"
                value={post.title}
                onChange={e => setPost({title: e.target.value, body: post.body})}
            />
            {/*Not controlled component*/}
            <MyInput
                type="text"
                placeholder="Post description"
                value={post.body}
                onChange={e => setPost({title: post.title, body: e.target.value})}
            />
            <MyButton onClick={AddNewPost}>Add Post</MyButton>
        </form>
        <PostList posts={posts} title="JavaScript Posts"/>
    </div>
  );
}

export default App;

