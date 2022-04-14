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
                            <h2 className="lead">Full Stack Web Developer | Tacoma, WA</h2>
                            <hr className="my-2" />
                            <br />
                            <h5>Problem solver - Collaborator</h5><br />
                            {/* <h5>Member of a team to tackle complex issues</h5><br /> */}
                            <h5>Jack-of-all trades with the ability and know how to tackle fun and challenging problems.</h5>
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>

            <Container id='home-container'>
                <Row>
                    <Col lg='2'></Col>
                    <Col xs='auto' lg='6'>
                        <h1 className="display-5">ABOUT ME</h1>
                        <p className="lead">
                            I am passionate about Full-Stack web development and getting my hands dirty cleaning up old computers and turning them into great home servers. Upgrading an old computer is often cheaper than buying a new one - gotta be thrifty to be nifty.
                        </p>
                        <p className="lead">
                            What I'm Working Towards: I am working to further my career in the IT and Web Development world.
                        </p>
                        <p className="lead">
                            Latest Hobby: I took an old Dell Inspiron 530 and upgraded the BIOS, CPU(3.33 GHz), RAM(8 GB), and hard drive(500 GB SSD + 250 GB HHD). In addition, I installed an Ubuntu Server that hosts a Minecraft Java Edition server, MySQL Server, and a MongoDB Server.
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
                        {/* <a href='https://www.youtube.com/channel/UC7I7Jhn3rRVAtEqMiHvTv-w' target='_blank'>
                            <span class="icon-stack">
                                <i class="icon-youtube-sign"></i>
                            </span>
                            YouTube</a> <br /> */}
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