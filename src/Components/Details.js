import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';


const Details = (props) => {
    return (
        <Fragment>
            <Card className="text-center">
                <Card.Body>
                    <Card.Title>{props.newPost.title}</Card.Title>
                    <Card.Text>
                        {props.newPost.body}
                    </Card.Text>
                    <Button as={Link} variant="primary" to="/posts">Go back</Button>
                </Card.Body>
                <Card.Footer>{props.newPost.date}</Card.Footer>
            </Card>
        </Fragment>
    )
}

export default Details; 
