import React, {useEffect, useState} from "react";
import './styles/App.css'
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/MyModal/MyModal";
import MyButton from "./components/UI/button/MyButton";
import {usePosts} from "./hooks/usePost";
import axios from "axios";
import PostService from "./API/PostService";

function App() {

    const [posts, setPosts] = useState([])
    const [filter, setFilter] = useState({sort: '', query: ''})
    const [modal, setModal] = useState(false)
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

    useEffect(() => {
        fetchPosts();
    },[])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }

    async function fetchPosts() {
        const posts = await PostService.getAll();
        setPosts(posts)
    }

    const removePost = (post) => {
        setPosts(posts.filter(el => el.id !== post.id))
    }

  return (
    <div className="App">
        <MyButton onClick={fetchPosts}>Get Posts</MyButton>
        <MyButton style={{marginTop: '30px'}} onClick={() => setModal(true)}>
            Create new user
        </MyButton>
        <MyModal visible={modal} setVisible={setModal}>
            <PostForm create={createPost}/>
        </MyModal>
        <hr style={{margin:'15px 0'}}/>
        <PostFilter
            filter={filter}
            setFilter={setFilter}
        />
       <PostList posts={sortedAndSearchedPosts} remove={removePost} title="JavaScript Posts"/>
    </div>
  );
}

export default App;

