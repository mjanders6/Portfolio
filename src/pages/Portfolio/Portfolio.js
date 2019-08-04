import React from 'react';
import { Jumbotron, Container, Row, Col } from 'reactstrap';
import CardDeck from '../../components/CardDeck'
import './Portfolio.css'

const Portfolio = (props) => {
    return (
        <div>
            <Jumbotron fluid id='projects-jumbo'>
                <Container fluid>
                    <Row>
                        <Col xs="12" className='text-center'>
                            <h1 className="display-4">Projects</h1>
                            <p className="lead">Take a look at a few of my favorite projects! </p>
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>

            <CardDeck />

        </div>
    );
};

export default Portfolio;