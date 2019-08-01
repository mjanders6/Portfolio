import React from 'react';
import { Jumbotron, Container, Row, Col } from 'reactstrap';
// import { Jumbotron, Container, Row, Col } from 'react-bootstrap'

const Portfolio = (props) => {
    return (
        <div>
            <Jumbotron fluid>
                <Container fluid>
                    <Row>
                        <Col xs="6">.col-6</Col>
                        <Col xs="6">.col-6</Col>
                    </Row>
                </Container>
            </Jumbotron>
        </div>
    );
};

export default Portfolio;