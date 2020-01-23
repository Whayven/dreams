import React, { Component } from 'react';
import Post from './Post';
import axios from 'axios';

import './Posts.css';

export default class Posts extends Component {
    constructor(props) {
        super(props);

        this.state = { posts: [] };
    }

    componentDidMount() {
        axios.get('http://localhost:5000/posts')
            .then(res => {
                this.setState({ posts: res.data });
            })
    }

    render() {
        const { posts } = this.state;
        return (
            <div>
                <div className="post-container">
                    {posts.map((post, index) => {
                        const dateString = new Date(post.createdAt).toLocaleDateString();
                        return (
                            (post.title && post.body) ?
                                <Post className="post"
                                    title={post.title}
                                    body={post.body.substring(0, 199) + '...'}
                                    date={dateString}
                                    id={post._id}
                                    key={index}
                                /> :
                                <Fragment key={index}></Fragment>
                        )
                    })}
                </div>
            </div>
        )
    }
}
