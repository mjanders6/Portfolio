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
                            <p className="lead">Full Stack Web Developer</p>
                            <hr className="my-2" />
                            <p><a href='https://www.linkedin.com/in/mjanders6' target="_blank">Linkedin</a> | <a href='https://github.com/mjanders6' target="_blank">Github</a></p>
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>

            <Container>
                <Row>
                    <Col lg='2'></Col>
                    <Col xs='auto' lg='6'>
                        <h1 className="display-5">About Me</h1>
                        <p className="lead">This is about me. I will be updating this shortly to go over what I am about and where I want to go. </p>
                    </Col>
                    <Col xs='auto' lg='3'>
                        <h1 className="display-5">Contact</h1>

                        <span class="icon-stack">
                            <i class="icon-github-sign"></i>
                        </span>
                        Github<br />
                        <span class="icon-stack">
                            <i class="icon-linkedin-sign"></i>
                        </span>
                        Linkedin<br />
                        <span class="icon-stack">
                            <i class="icon-globe"></i>
                        </span>
                        Website<br />

                    </Col>
                </Row>
            </Container>

            {/* Skills */}
        </div>
    );
};

export default Home;