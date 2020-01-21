import React, { Fragment } from 'react';
import Post from './Post';

import './Posts.css';

const Posts = (props) => {
    const { allPosts, handleDetails } = props;

    return (
        <div>
            <div className="post-container">
                {allPosts.map((post, index) => {
                    return (
                        (post.title && post.body) ?
                            <Post className="post"
                                title={post.title}
                                body={post.body.substring(0, 199) + '...'}
                                date={post.date}
                                id={post.id}
                                key={index}
                                handleDetails={handleDetails}
                            /> :
                            <Fragment key={index}></Fragment>
                    )
                })}
            </div>
        </div>

    )
}

export default Posts;
