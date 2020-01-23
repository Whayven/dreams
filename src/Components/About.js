import React from 'react'
import { Jumbotron, Container } from 'react-bootstrap';

const About = () => {
    return (
        <div>
            <Jumbotron fluid>
                <Container>
                    <h1>About Page</h1>
                    <p>
                        This is a modified jumbotron that occupies the entire horizontal space of
                        its parent.
                    </p>
                </Container>
            </Jumbotron>
        </div>
    )
}

export default About;
