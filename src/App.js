import React, {useState} from "react";
import './styles/App.css'
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";
import MyInput from "./components/UI/input/MyInput";

function App() {

    const [posts, setPosts] = useState([
        {id:1, title: "JavaScript 1", body: 'Description 1'},
        {id:2, title: "JavaScript 2", body: 'Description 2'},
        {id:3, title: "JavaScript 3", body: 'Description 3'},
    ])

    const [sortedPosts, setSortedPosts] = useState('')
    const [searchQuery, setSearchQuery] = useState('')

    function getSortedPosts() {
        if (sortedPosts){
            return [...posts].sort((a,b) => a[sortedPosts].localeCompare(b[sortedPosts]))
        }
        return posts
    }

    const sortedPostsList = getSortedPosts()

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    const removePost = (post) => {
        setPosts(posts.filter(el => el.id !== post.id))
    }

    const sortPosts = (sort) => {
        setSortedPosts(sort);
    }

  return (
    <div className="App">
        <PostForm create={createPost}/>
        <hr style={{margin:'15px 0'}}/>
        <MyInput
            placeholder="Search"
            value={searchQuery}
            onChange={event => setSearchQuery(event.target.value)}
        />
        <MySelect
            value={sortedPosts}
            onChange={sortPosts}
            options={[
                {value:'title',name:'Sort by name'},
                {value:'body',name:'Sort by description'},
            ]}
            defaultValue="Sort"
        />
        {posts.length
            ?
            <PostList posts={sortedPostsList} remove={removePost} title="JavaScript Posts"/>
            :
            <h1 style={{textAlign:'center', marginTop:'50px', color: 'red'}}>No records found</h1>
        }
    </div>
  );
}

export default App;

