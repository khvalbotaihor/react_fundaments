import React from 'react';
import PostItem from "./PostItem";

const PostList = ({posts, title, deletePost}) => {
        return (
        <div style={{marginTop: '50px'}}>
            <h1 style={{textAlign: "center"}}>{title}</h1>
            {posts.map((post, index) =>{

                const deletePOST = () => {
                    deletePost(post.id)
                }
                return (
                <PostItem
                    post={post}
                    key={post.id}
                    number={index + 1}
                    delete={deletePOST}
                />
                )}
            )}
        </div>
    );
};

export default PostList;
