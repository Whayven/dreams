import React, { Component } from 'react';
import { Form, Container, Button } from 'react-bootstrap';

import './Signup.css'

export default class Signup extends Component {
    state = {

    }

    render() {
        return (
            <div className="signup">
                <Container className="signup-container">
                    <Form id="signup-form">
                        <Form.Group controlId="signupEmail">
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control type="email" placeholder="Enter Email" onChange={this.onEmailChange} />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="signupName" id="signupName">
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter your name" onChange={this.onNameChange} />
                            <Form.Control type="text" placeholder="Enter your name" onChange={this.onNameChange} />
                        </Form.Group>

                        <Form.Group controlId="signupPass">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" onChange={this.onPasswordChange} />
                        </Form.Group>
                        <Form.Group controlId="signupPass">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" onChange={this.onPasswordChange} />
                            <Form.Text className="text-muted">
                                Password must contain capital, lowercase, and number characters.
                            </Form.Text>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Sign Up
                        </Button>
                    </Form>

                </Container>
            </div>
        )
    }
}
