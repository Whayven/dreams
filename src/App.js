import React, { useState } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import Navigation from './Components/Navigation';
import Home from './Components/Home';
import About from './Components/About';
import Posts from './Components/Posts';
import DreamForm from './Components/DreamForm';
import Details from './Components/Details';
import Login from './Components/Login';
import Signup from './Components/Signup';

const App = () => {
    return (
        <Router>
            <Navigation />
            <Switch>
                <Route component={Home} exact path="/" />

                <Route component={About} exact path="/about" />

                <Route component={Details} exact path="/details/:id" />

                <Route component={DreamForm} exact path="/create" />

                <Route component={Posts} exact path="/posts" />

                <Route component={Login} exact path="/login" />

                <Route component={Signup} exact path="/signup" />

            </Switch>
        </Router>

    )
}

render(<App />, document.getElementById("root"));