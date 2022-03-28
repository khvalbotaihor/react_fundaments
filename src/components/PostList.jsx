import React from 'react';
import PostItem from "./PostItem";

const PostList = ({posts, title, remove}) => {
    if (!posts.length){
       return(
           <h1 style={{textAlign:'center', marginTop:'50px', color: 'red'}}>No records found</h1>
       )
    }
        return (
        <div style={{marginTop: '50px'}}>
            <h1 style={{textAlign: "center"}}>{title}</h1>
            {posts.map((post, index) =>
                <PostItem
                    post={post}
                    key={post.id}
                    number={index + 1}
                    remove={remove}
                />
            )}
        </div>
    );
};

export default PostList;
