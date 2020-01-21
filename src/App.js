import React, { Fragment, useState } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import Navigation from './Components/Navigation';
import Home from './Components/Home';
import About from './Components/About';
import Posts from './Components/Posts';
import DreamForm from './Components/DreamForm';
import Details from './Components/Details';

const App = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [newPost, setPost] = useState({});

    const adjustTime = (time) => {
        return (time < 10 ? `0${time}` : time)
    };

    const date = new Date();
    let month = date.getMonth() + 1;
    month = adjustTime(month);
    const day = (date.getDate() < 10 ? `0${date.getDate()}` : date.getDate())
    const year = date.getFullYear();
    const hours = adjustTime(date.getHours());
    const minutes = adjustTime(date.getMinutes());
    const seconds = adjustTime(date.getSeconds());
    const milliseconds = date.getMilliseconds();
    const postDate = `${month}/${day}/${year} ${hours}:${minutes}:${seconds}`;

    const [allPosts, setAllPosts] = useState([
        {
            title: 'Example Dream #1',
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultricies, lectus vel tristique molestie, orci quam lobortis justo, sit amet consequat urna est non lorem. Proin pulvinar et arcu id convallis. Donec feugiat odio ex, id egestas ante condimentum non. Cras rhoncus tincidunt quam, ut dapibus lorem porttitor eget. Ut faucibus ultrices aliquam. Proin vitae cursus diam, faucibus cursus nisi. Nulla lacus libero, gravida in consequat eu, pretium congue leo. Maecenas et urna vitae dolor cursus faucibus. Nullam risus leo, tempor in vehicula eget, imperdiet id eros. Donec at dapibus mi. Fusce eu facilisis odio. Nullam commodo magna quam.',
            date: postDate,
            id: milliseconds
        }
    ]);

    const createPost = (e) => {
        e.preventDefault();
        e.target.reset();

        const date = new Date();
        let month = date.getMonth() + 1;
        month = adjustTime(month);
        const day = (date.getDate() < 10 ? `0${date.getDate()}` : date.getDate())
        const year = date.getFullYear();
        const hours = adjustTime(date.getHours());
        const minutes = adjustTime(date.getMinutes());
        const seconds = adjustTime(date.getSeconds());
        const milliseconds = date.getMilliseconds();
        const postDate = `${month}/${day}/${year} ${hours}:${minutes}:${seconds}`

        const post = {
            title,
            body,
            date: postDate,
            id: milliseconds
        }
        setAllPosts([...allPosts, post]);
        setTitle('');
        setBody('');

    }



    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    }

    const handleBodyChange = (e) => {
        setBody(e.target.value);
    }

    const handleDetails = (target) => {
        setPost(allPosts.filter((post) => {
            return post.id === target.id;
        })[0]);
    }

    const penProps = {
        trackTitle: handleTitleChange,
        trackBody: handleBodyChange,
        title,
        body
    }

    return (
        <Router>
            <Navigation />
            <Switch>
                <Route component={Home} exact path="/" />

                <Route component={About} exact path="/about" />

                <Route exact path="/details/:id" render={(props) => <Details newPost={newPost} />} />

                <Route exact path="/create" render={(props) => <DreamForm {...penProps} createPost={createPost} />} />

                <Route exact path="/posts" render={(props) => <Posts allPosts={allPosts} handleDetails={handleDetails} />} />

            </Switch>
        </Router>

    )
}

render(<App />, document.getElementById("root"));