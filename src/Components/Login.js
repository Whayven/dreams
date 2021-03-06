import React, { Component } from 'react';
import { Form, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './Login.css';

export default class Login extends Component {
    state = {
        email: '',
        password: ''
    }

    onEmailChange = (e) => {
        this.setState({
            email: e.target.value
        })
    }

    onPasswordChange = (e) => {
        this.setState({
            password: e.target.value
        })
    }

    render() {
        return (
            <div className="grid-container">
                <div className="login-img"></div>

                <Container className="login-form">
                    <Form id="login">
                        <Form.Group controlId="loginEmail">
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control type="email" placeholder="Enter Email" onChange={this.onEmailChange} />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="loginPass">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" onChange={this.onPasswordChange} />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                        <br /><br />
                        <div className="text-center signup-link">
                            <Link to="/signup" className="text-muted">
                                Create Account
                            </Link>
                        </div>

                    </Form>
                </Container>
            </div>
        )
    }
}
