import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';

const Post = (props) => {
    const { title, body, date, id } = props;

    return (
        <Fragment>
            <Card className="card">
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{date}</Card.Subtitle>
                    <Card.Text>
                        {body}
                    </Card.Text>
                    <Button as={Link} to={`/details/${id}`} variant="primary">
                        View Dream
                    </Button>
                </Card.Body>
            </Card>
        </Fragment>
    )
}

export default Post;
