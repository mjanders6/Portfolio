import React from 'react'
import { Jumbotron, Container, Row, Col } from 'reactstrap'
import { Image } from 'react-bootstrap/Image'
import Skills from '../../components/Skills'
import './Home.css'
import coverPic from '../../assets/Head.jpg'

const Home = (props) => {
    return (
        <div>
            <Jumbotron fluid id='home-jumbo'>
                <Container fluid>
                    <Row>
                        <Col className='text-center' lg='1'>
                            <img id='home-pic' src={coverPic} alt='Avatar' />
                        </Col>
                        <Col className='text-center'>
                            <h1 className="display-4">Michael J. Anderson</h1>
                            <p className="lead">Full Stack Web Developer | Orange County, CA</p>
                            <hr className="my-2" />
                            <br />
                            <p>Excellent problem solver, collaborator and enjoy challenges to work within a team to tackle complex issues</p>
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>

            <Container id='home-container'>
                <Row>
                    <Col lg='2'></Col>
                    <Col xs='auto' lg='6'>
                        <h1 className="display-5">About Me</h1>
                        <p className="lead">
                        I have a passion for developing web applications and solving problems. 
                        </p>
                    </Col>
                    <Col xs='auto' lg='3'>
                        <h1 className="display-5">Contact</h1>

                        <a href='https://github.com/mjanders6' target='_blank'>
                            <span class="icon-stack">
                                <i class="icon-github-sign"></i>
                            </span>
                            Github</a> <br />

                        <a href='https://www.linkedin.com/in/mjanders6/' target='_blank'>
                            <span class="icon-stack">
                                <i class="icon-linkedin-sign"></i>
                            </span>
                            Linkedin</a> <br />
                    </Col>
                </Row>
            </Container>

            {/* Skills */}
            <Skills />

        </div>
    );
};

export default Home;