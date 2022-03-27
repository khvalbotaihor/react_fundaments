import React from 'react';
import PostItem from "./PostItem";

const PostList = ({posts, title}) => {
        return (
        <div style={{marginTop: '50px'}}>
            <h1 style={{textAlign: "center"}}>{title}</h1>
            {posts.map(post =>
                <PostItem
                    /* post={{id: post.id, title: post.title, body: post.body}} */
                    post={post}
                    key={post.id}
                />
            )}
        </div>
    );
};

export default PostList;
