import React, { Fragment, Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import Axios from 'axios';




class Details extends Component {
    state = {
        title: '',
        body: '',
        created: ''
    }

    componentDidMount() {
        Axios.get(`${process.env.SERVER_ADDRESS}/${this.props.match.params.id}`)
            .then(res => {
                this.setState({
                    title: res.data.title,
                    body: res.data.body,
                    created: new Date(res.data.createdAt).toDateString()
                })
            })
    }

    render() {
        return (
            <Fragment>
                <Card className="text-center">
                    <Card.Body>
                        <Card.Title>{this.state.title}</Card.Title>
                        <Card.Text>
                            {this.state.body}
                        </Card.Text>
                        <Button as={Link} variant="primary" to="/posts">Go back</Button>
                    </Card.Body>
                    <Card.Footer>{this.state.created}</Card.Footer>
                </Card>
            </Fragment>
        )
    }

}

export default withRouter(Details); 
