import React from 'react'
import './Skills.css'
import { Container, Card, CardTitle, CardText, CardDeck, CardSubtitle, CardBody, Row, Col } from 'reactstrap'
import { DiJavascript1 } from "react-icons/di"
import { DiMongodb } from "react-icons/di"
import { DiGithubBadge } from "react-icons/di"
import { DiMysql } from "react-icons/di"
import { DiReact } from "react-icons/di"
import { DiNodejsSmall } from "react-icons/di"
import { FiYoutube } from "react-icons/fi"
import badgePicAWS from "../../assets/aws-educate-introduction-to-cloud-101.png"
import badgeHTMLCSS from "../../assets/html-css.png"
import badgeNodeExpress from "../../assets/node-js-and-express.png"
import badgeReact from "../../assets/react-js.png"
import badgeSQLNoSQL from "../../assets/sql-and-nosql-databases.png"
import badgeJS from "../../assets/javascript-and-jquery.png"

const Cards = (props) => {
    return (
        <Container id='skills'>
            <Row>
                <Col className='text-center' id='skill-pics'>
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
                    <FiYoutube />
                </Col>
            </Row>
            <Row>
                <Col className='text-center' id='badge-pics'>
                    <h1 className="display-5">Badges</h1>
                </Col>
            </Row>
            <Row>
                <Col className='text-center'><img id='badge-pic' src={badgePicAWS} alt='Avatar' /></Col>
                <Col className='text-center'><img id='badge-pic' src={badgeReact} alt='Avatar' /></Col>
                <Col className='text-center'><img id='badge-pic' src={badgeJS} alt='Avatar' /></Col>
                <Col className='text-center'><img id='badge-pic' src={badgeNodeExpress} alt='Avatar' /></Col>
                <Col className='text-center'><img id='badge-pic' src={badgeSQLNoSQL} alt='Avatar' /></Col>
                <Col className='text-center'><img id='badge-pic' src={badgeHTMLCSS} alt='Avatar' /></Col>
            </Row>
        </Container>
    );
};

export default Cards;