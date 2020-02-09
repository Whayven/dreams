import React, { Component, Fragment } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import axios from 'axios';

import './DreamForm.css';

export default class DreamForm extends Component {
    constructor(props) {
        super(props);

        this.onChangeTitle.bind(this);
        this.onChangeBody.bind(this);
        this.onSubmit.bind(this);

        this.state = {
            title: '',
            body: '',
            message: ''
        }
    }

    displayMessage = () => {
        if (this.state.message != '') {
            return <Alert variant="success"> {this.state.message} </Alert>
        }
        else {
            return <Fragment />
        }
    }

    onChangeTitle = (e) => {
        this.setState({
            title: e.target.value
        })
    }

    onChangeBody = (e) => {
        this.setState({
            body: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();

        const { title, body } = this.state;
        const post = {
            title,
            body
        }

        axios.post(`${process.env.SERVER_ADDRESS}/add`, post)
            .then(res => this.setState({
                title: '',
                body: '',
                message: res.data
            }))
            .then(setTimeout(() => {
                this.setState({
                    message: ''
                })
            }, 3000))
        e.target.reset();
        this.setState({
            title: '',
            body: ''
        })
    }

    render() {
        return (
            <div className="container">
                <br />
                <this.displayMessage />
                <Form onSubmit={this.onSubmit} className="dream-form">
                    <Form.Label>
                        <h2>Dream Title</h2>
                    </Form.Label>
                    <Form.Control type="text" placeholder="Dream Title" onChange={this.onChangeTitle} />
                    <Form.Group controlId="postForm.ControlTextarea1">
                        <Form.Label>
                            <h2>Dream Body</h2>
                        </Form.Label>
                        <Form.Control as="textarea" rows="3" onChange={this.onChangeBody} />
                    </Form.Group>
                    <Button variant="success" type="submit">Submit</Button>
                </Form>
            </div>
        )
    }

}
