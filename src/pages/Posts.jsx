import React, {useEffect, useRef, useState} from "react";
import '../styles/App.css'
import MyButton from "../components/UI/button/MyButton";
import MyModal from "../components/UI/MyModal/MyModal";
import PostFilter from "../components/PostFilter";
import PostList from "../components/PostList";
import Pagination from "../components/UI/pagination/pagination";
import {getPagesCount} from "../utils/pages";
import PostService from "../API/PostService";
import PostForm from "../components/PostForm";
import {usePosts} from "../hooks/usePost";
import {useFetching} from "../hooks/useFetching";
import Loader from "../components/UI/Loader/Loader";

function Posts() {

    const [posts, setPosts] = useState([])
    const [filter, setFilter] = useState({sort: '', query: ''})
    const [modal, setModal] = useState(false)
    const [totalPages, setTotalPages] = useState(0)
    const [limit, setLimit] = useState(10)
    const [page, setPage] = useState(1)
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
    const lastElement = useRef()
    const observer = useRef()

    const [fetchPosts, isPostLoading, postError] = useFetching(async (limit, page) => {
        const response = await PostService.getAll(limit, page);
        setPosts([...posts, ...response.data])
        const totalCount = response.headers['x-total-count']
        setTotalPages(getPagesCount(totalCount, limit))
    })

    useEffect(() => {
        if (isPostLoading) return;
        if (observer.current) observer.current.disconnect();
        var callback = function(entries, observer) {
            if (entries[0].isIntersecting && page < totalPages){
                console.log(page)
                setPage(page + 1)
            }
        };
        observer.current = new IntersectionObserver(callback);
        observer.current.observe(lastElement.current)
    },[isPostLoading])

    useEffect(() => {
        fetchPosts(limit, page);
    },[page])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }

    const removePost = (post) => {
        setPosts(posts.filter(el => el.id !== post.id))
    }

    const changePage = (page) => {
        setPage(page)
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
            <PostList posts={sortedAndSearchedPosts} remove={removePost} title="JavaScript Posts"/>
            <div ref={lastElement} style={{height: 20, background: 'red'}}/>
            {isPostLoading &&
                <div style={{display:'flex', justifyContent:'center', marginTop:'50px'}}><Loader /></div>
            }
            <Pagination changePage={changePage} page={page} totalPages={totalPages}/>
        </div>
    );
}

export default Posts;

