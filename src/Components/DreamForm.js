import React from 'react';
import { Form, Button } from 'react-bootstrap';

const DreamForm = (props) => {

    return (
        <div className="dream-form">
            <Form onSubmit={props.createPost}>
                <Form.Label>Dream Title</Form.Label>
                <Form.Control type="text" placeholder="Dream Title" onChange={props.trackTitle} />
                <Form.Group controlId="postForm.ControlTextarea1">
                    <Form.Label>Dream Body</Form.Label>
                    <Form.Control as="textarea" rows="3" onChange={props.trackBody} />
                </Form.Group>
                <Button variant="success" type="submit">Submit</Button>
            </Form>
            <h2>{props.title}</h2>
            <p>{props.body}</p>
        </div>
    )
}

export default DreamForm;
