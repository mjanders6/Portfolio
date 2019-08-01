import React from 'react';
import { Jumbotron, Container, Row, Col } from 'reactstrap';

const Home = (props) => {
    return (
        <div>
            <Jumbotron fluid>
                <Container fluid>
                    <Row>
                        <Col className='text-center'>
                            <h1 className="display-4">Michael J. Anderson</h1>
                            <p className="lead">Full Stack Web Developer, </p>
                            <hr className="my-2" />
                            <p><a href='https://www.linkedin.com/in/mjanders6' target="_blank">Linkedin</a> | <a href='https://github.com/mjanders6' target="_blank">Github</a></p>
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>

            <Container>
                <Row>
                    <Col md='9'>
                        <h1 className="display-5">About Me</h1>
                        <p className="lead">this is about me</p>
                    </Col>
                    <Col md='3'>
                        <h1 className="display-5">Contact</h1>
                        <p className="lead">Links</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Home;