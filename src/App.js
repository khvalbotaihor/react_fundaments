import React, {useState} from "react";
import './styles/App.css'
import PostList from "./components/PostList";

function App() {

    const [posts1, setPosts1] = useState([
        {id:1, title: "JavaScript 1", body: 'Description 1'},
        {id:2, title: "JavaScript 2", body: 'Description 2'},
        {id:3, title: "JavaScript 3", body: 'Description 3'},
    ])
    const [posts2, setPosts2] = useState([
        {id:1, title: "Python 1", body: 'Description 1'},
        {id:2, title: "Python 2", body: 'Description 2'},
        {id:3, title: "Python 3", body: 'Description 3'},
    ])

  return (
    <div className="App">
        <PostList posts={posts1} title="JavaScript Posts"/>
        <PostList posts={posts2} title="Python Posts"/>
    </div>
  );
}

export default App;

