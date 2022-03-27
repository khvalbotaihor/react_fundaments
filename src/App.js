import React from "react";
import './styles/App.css'
import PostItem from './components/PostItem'

function App() {
  return (
    <div className="App">
        <PostItem post={{id:1, title: "New Post 1", body: 'Description 1'}} />
        <PostItem post={{id:2, title: "New Post 2", body: 'Description 2'}} />
        <PostItem post={{id:2, title: "New Post 3", body: 'Description 3'}} />
    </div>
  );
}

export default App;

