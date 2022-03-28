import React from 'react'
import { Link, Jumbotron, Container, Row, Col } from 'reactstrap'
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
                            <p className="lead">Full Stack Web Developer | Tacoma, WA</p>
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
                            A renaissance man with the ability and know how to tackle fun and challenging problems. I have over 5 years of experience building and leading teams and have been able to tap into my technical side to enhance key parts to operations.
                        </p>
                    </Col>
                    <Col xs='auto' lg='3'>
                        <h1 className="display-5">Contact</h1>

                        <a href='mjanders6@gmail.com' target='_blank'>
                            <span class="icon-stack">
                                <i class="icon-envelope"></i>
                            </span>
                            Email: mjanders6@gmail.com</a> <br />

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
                        <a href='https://www.youtube.com/channel/UC7I7Jhn3rRVAtEqMiHvTv-w' target='_blank'>
                            <span class="icon-stack">
                                <i class="icon-youtube-sign"></i>
                            </span>
                            YouTube</a> <br />
                        <a href='https://docs.google.com/document/d/16um-utr0RXBbrOxiUNsNUROm90yjCxY_UE5SHjQNIBI/edit?usp=sharing' target='_blank'>
                            <span class="icon-stack">
                                <i class="icon-download-alt"></i>
                            </span>
                            Resume</a> <br />
                    </Col>
                </Row>
            </Container>

            {/* Skills */}
            <Skills />

        </div>
    );
};

export default Home;