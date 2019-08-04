import React from 'react'
import './Skills.css'
import { Container, Card, CardTitle, CardText, CardDeck, CardSubtitle, CardBody, Row, Col } from 'reactstrap'
import { DiJavascript1 } from "react-icons/di"
import { DiMongodb } from "react-icons/di"
import { DiGithubBadge } from "react-icons/di"
import { DiMysql } from "react-icons/di"
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
                <Col className='text-center'>
                    <DiJavascript1 />
                    <DiReact />
                    <DiGithubBadge />
                    <DiNodejsSmall />
                    <DiMongodb />
                    <DiMysql />
                </Col>
            </Row>
        </Container>
    );
};

export default Cards;