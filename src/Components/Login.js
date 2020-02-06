import React, { Component } from 'react';
import { Form, Container, Button, NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './Login.css';

export default class Login extends Component {
    render() {
        return (
            <div className="grid-container">
                <div className="login-img"></div>

                <Container className="login-form">
                    <Form id="login">
                        <Form.Group controlId="loginEmail">
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control type="email" placeholder="Enter Email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="loginPass">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                        <br /><br />
                        <Link to="/" className="text-muted text-center">
                            Create Account
                        </Link>
                    </Form>
                </Container>
            </div>
        )
    }
}
