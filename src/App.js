import React, {useRef, useState} from "react";
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

    const [title, setTitle] = useState('')
    const bodyInputRef = useRef()

    const AddNewPost = (e) => {
        e.preventDefault();
        console.log(title)
        console.log(bodyInputRef.current.value)
    }

  return (
    <div className="App">
        <form>
            {/*Controlled component*/}
            <MyInput
                type="text"
                placeholder="Post name"
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
            {/*Not controlled component*/}
            <MyInput
                type="text"
                placeholder="Post description"
                ref={bodyInputRef}

            />
            <MyButton onClick={AddNewPost}>Add Post</MyButton>
        </form>
        <PostList posts={posts} title="JavaScript Posts"/>
    </div>
  );
}

export default App;

