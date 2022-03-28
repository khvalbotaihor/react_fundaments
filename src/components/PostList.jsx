import React from 'react';
import PostItem from "./PostItem";
import {CSSTransition, TransitionGroup} from "react-transition-group";

const PostList = ({posts, title, remove}) => {
    if (!posts.length){
       return(
           <h1 style={{textAlign:'center', marginTop:'50px', color: 'red'}}>No records found</h1>
       )
    }
        return (
        <div style={{marginTop: '50px'}}>
            <h1 style={{textAlign: "center"}}>{title}</h1>
            <TransitionGroup>
            {posts.map((post, index) =>
                <CSSTransition
                    key={post.id}
                    timeout={500}
                    classNames="post"
                >
                     <PostItem post={post} number={index + 1} remove={remove} />
                </CSSTransition>
            )}
            </TransitionGroup>
        </div>
    );
};

export default PostList;
