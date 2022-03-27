import React, {useMemo, useState} from "react";
import './styles/App.css'
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";
import MyInput from "./components/UI/input/MyInput";

function App() {

    const [posts, setPosts] = useState([
        {id:1, title: "Aaron", body: 'Whatson'},
        {id:2, title: "Billy", body: 'Decathlon'},
        {id:3, title: "Jimmy", body: 'Billy Ilish'},
    ])

    const [selectedSort, setSelectedSort] = useState('')
    const [searchQuery, setSearchQuery] = useState('')

    const sortedPosts = useMemo(() => {
        if (selectedSort){
            return [...posts].sort((a,b) => a[selectedSort].localeCompare(b[selectedSort]))
        }
        return posts
    },[selectedSort,posts])

    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(searchQuery))
    },[searchQuery, sortedPosts])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    const removePost = (post) => {
        setPosts(posts.filter(el => el.id !== post.id))
    }

    const sortPosts = (sort) => {
        setSelectedSort(sort);
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
            value={selectedSort}
            onChange={sortPosts}
            options={[
                {value:'title',name:'Sort by name'},
                {value:'body',name:'Sort by description'},
            ]}
            defaultValue="Sort"
        />
        {sortedAndSearchedPosts.length
            ?
            <PostList posts={sortedAndSearchedPosts} remove={removePost} title="JavaScript Posts"/>
            :
            <h1 style={{textAlign:'center', marginTop:'50px', color: 'red'}}>No records found</h1>
        }
    </div>
  );
}

export default App;

