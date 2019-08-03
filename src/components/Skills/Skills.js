import React from 'react'
import './Skills.css'
import { Container, Card, CardTitle, CardText, CardDeck, CardSubtitle, CardBody, Row, Col } from 'reactstrap'
import { DiJavascript } from "react-icons/di"
import { DiFirebase } from "react-icons/di"
import { DiGithubBadge } from "react-icons/di"
import { DiHeroku } from "react-icons/di"
import { DiReact } from "react-icons/di"
import { DiNodejsSmall } from "react-icons/di"

const Cards = (props) => {
    return (
        <Container id='skills'>
            <Row>
                <Col className='text-center'>
                    <h1 className="display-5">Skills</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <CardDeck>
                        <Card>
                            <DiJavascript />
                            <CardBody>
                                <CardTitle>Javascript</CardTitle>
                                <CardSubtitle>Single Player RPG</CardSubtitle>
                                <CardText></CardText>
                            </CardBody>
                        </Card>
                        <Card>
                            <DiReact />
                            <CardBody>
                                <CardTitle>React</CardTitle>
                                <CardSubtitle>Bladder Evacuator Locator</CardSubtitle>
                                <CardText></CardText>
                            </CardBody>
                        </Card>
                        <Card>
                            <DiGithubBadge />
                            <CardBody>
                                <CardTitle>Github</CardTitle>
                                <CardSubtitle>Make it your self or too lazy too cook</CardSubtitle>
                                <CardText></CardText>
                            </CardBody>
                        </Card>
                        <Card>
                            <DiFirebase />
                            <CardBody>
                                <CardTitle>Firebase</CardTitle>
                                <CardSubtitle>Make it your self or too lazy too cook</CardSubtitle>
                                <CardText></CardText>
                            </CardBody>
                        </Card>
                        <Card>
                            <DiHeroku />
                            <CardBody>
                                <CardTitle>Heroku</CardTitle>
                                <CardSubtitle>Make it your self or too lazy too cook</CardSubtitle>
                                <CardText></CardText>
                            </CardBody>
                        </Card>
                        <Card>
                            <DiNodejsSmall />
                            <CardBody>
                                <CardTitle>NodeJs</CardTitle>
                                <CardSubtitle>Make it your self or too lazy too cook</CardSubtitle>
                                <CardText></CardText>
                            </CardBody>
                        </Card>
                    </CardDeck>
                </Col>
            </Row>
        </Container>
    );
};

export default Cards;