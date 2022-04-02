import React, {useEffect, useState} from "react";
import './styles/App.css'
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/MyModal/MyModal";
import MyButton from "./components/UI/button/MyButton";
import {usePosts} from "./hooks/usePost";
import PostService from "./API/PostService";
import Loader from "./components/UI/Loader/Loader";
import {useFetching} from "./hooks/useFetching";
import {getPagesArray, getPagesCount} from "./utils/pages";

function App() {

    const [posts, setPosts] = useState([])
    const [filter, setFilter] = useState({sort: '', query: ''})
    const [modal, setModal] = useState(false)
    const [totalPages, setTotalPages] = useState(0)
    const [limit, setLimit] = useState(10)
    const [page, setPage] = useState(1)
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

    let pagesArray = getPagesArray(totalPages)

    const [fetchPosts, isPostLoading, postError] = useFetching(async (limit, page) => {
        const response = await PostService.getAll(limit, page);
        setPosts(response.data)
        const totalCount = response.headers['x-total-count']
        setTotalPages(getPagesCount(totalCount, limit))
    })

    useEffect(() => {
        fetchPosts(limit, page);
    },[])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }

    const removePost = (post) => {
        setPosts(posts.filter(el => el.id !== post.id))
    }

    const changePage = (page) => {
        setPage(page)
        fetchPosts(limit, page);
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
        {postError &&
            <h1>Error happens: ${postError}</h1>
        }
        {isPostLoading
        ? <div style={{display:'flex', justifyContent:'center', marginTop:'50px'}}><Loader /></div>
        : <PostList posts={sortedAndSearchedPosts} remove={removePost} title="JavaScript Posts"/>
        }
        <div className="page__wrapper">
            {pagesArray.map(p => {
                return(
                    <span
                        onClick={() => changePage(p)}
                        className={page === p ? 'page page_current' : 'page' }
                        key={p}>{p}
                    </span>
                )
            })}
        </div>
    </div>
  );
}

export default App;

