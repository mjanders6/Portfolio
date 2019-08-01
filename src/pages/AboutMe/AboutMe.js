import React from 'react';
import { Jumbotron, Container, Row, Col } from 'reactstrap';

const AboutMe = (props) => {
    return (
        <div>
            <Jumbotron fluid>
                <Container fluid>
                    <Row>
                        <Col className='text-center'>
                            <h1 className="display-4">Michael J. Anderson</h1>
                            <hr className="my-2" />
                            <p className="lead">I am in the process of building out the website. In the meantime, check me out on Linkedin and Github</p>
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>
        </div>
    );
};

export default AboutMe;