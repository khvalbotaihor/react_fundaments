import React from 'react';
import PostItem from "./PostItem";

const PostList = ({posts, title}) => {
        return (
        <div style={{marginTop: '50px'}}>
            <h1 style={{textAlign: "center"}}>{title}</h1>
            {posts.map((post, index) =>
                <PostItem
                    /* post={{id: post.id, title: post.title, body: post.body}} */
                    post={post}
                    key={post.id}
                    number={index + 1}
                />
            )}
        </div>
    );
};

export default PostList;
