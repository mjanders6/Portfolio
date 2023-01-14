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
                            <h2 className="lead">Olympia, WA</h2>
                            <h2 className="lead">Full Stack Web Developer | IT | Cyber Security</h2>
                            <h2 className="lead">Active Duty Army</h2>
                            <hr className="my-2" />
                            <br />
                            {/* <h5>Problem Solver - Collaborator</h5><br /> */}
                            <h2 className="lead">"It's too big a world to be in competition with everyone. The only person who I have to be better than is myself." - Col. Potter (M*A*S*H Quote)</h2><br />
                            {/* <h2 className="lead">- Col. Potter (MASH Quote)</h2> */}
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
                            I am passionate about Full-Stack web development and getting my hands dirty cleaning up old computers and turning them into great home servers. Upgrading an old computer brings more fulfilment than buying a new one. 
                        </p>
                        <p className="lead">
                            <u><b>Current Path:</b></u> I am working to further my career in the IT, Cyber Security, and Web Development world.
                        </p>
                        <p className="lead">
                            <u><b>Goals:</b></u> I am currently working towards earning the Security+ and Network+ credentials. I am gearing up to work in the IT and Cyber Security world when I transition back into civilain life. 
                        </p>
                        <p className="lead">
                            <u><b>Latest Hobby:</b></u> I took an old Dell Inspiron 530 and upgraded the BIOS, CPU(3.33 GHz), RAM(8 GB), and hard drive(500 GB SSD + 500 GB HHD). In addition, I installed an Ubuntu Server that hosts a Minecraft Java Edition server, MySQL Server, and a MongoDB Server. My kids and I have alot of fun building different Minecraft worlds.
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