import React, {useState} from "react";
import './styles/App.css'
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";

function App() {

    const [posts, setPosts] = useState([
        {id:1, title: "JavaScript 1", body: 'Description 1'},
        {id:2, title: "JavaScript 2", body: 'Description 2'},
        {id:3, title: "JavaScript 3", body: 'Description 3'},
    ])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    const removePost = (post) => {
        setPosts(posts.filter(el => el.id !== post.id))
    }

  return (
    <div className="App">
        <PostForm create={createPost}/>
        <PostList posts={posts} remove={removePost} title="JavaScript Posts"/>
    </div>
  );
}

export default App;

