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

  return (
    <div className="App">
        <form>
            <MyInput type="text" placeholder="Post name"/>
            <MyInput type="text" placeholder="Post description"/>
            <MyButton>Add Post</MyButton>
        </form>
        <PostList posts={posts} title="JavaScript Posts"/>
    </div>
  );
}

export default App;

