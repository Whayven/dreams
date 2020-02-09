import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';

import './Navigation.css';

const Navigation = () => {
    return (
        <div>
            <Navbar className="navbar" variant="light" expand="lg" fixed="top">
                <Navbar.Brand as={Link} to="/">Dreams</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav>
                        <Nav.Link as={NavLink} exact to="/">Home</Nav.Link>
                        <Nav.Link as={NavLink} to="/about">About</Nav.Link>
                        <Nav.Link as={NavLink} to="/posts">Dreams</Nav.Link>
                        <Nav.Link as={NavLink} to="/create">Create Dream</Nav.Link>
                        <Nav.Link as={NavLink} to="/login">Login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Navigation;
