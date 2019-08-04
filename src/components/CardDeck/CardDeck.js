import React from 'react';
import { Container, Card, CardImg, CardTitle, CardText, CardDeck, CardSubtitle, CardBody, Row, Col } from 'reactstrap';
import image2 from '../../assets/2.png'
import image3 from '../../assets/3.png'
import image4 from '../../assets/4.png'
import image5 from '../../assets/5.png'

const Cards = (props) => {
    return (
        <Container>
            <Row>
                <Col>
                    <CardDeck>
                        <Card>
                            <CardImg top width="100%" src={image2} alt="Card image cap" />
                            <CardBody>
                                <CardTitle>Super Street Battle</CardTitle>
                                <CardSubtitle>Single Player RPG</CardSubtitle>
                                <CardText>Ready to race! This app lets the user define a few things to enhance the car. These enhancements are meant to improve the race outcome.</CardText>
                                <a href='https://github.com/super-street-battle/super-street-battle' target="_blank">Github</a> | <a href='https://superstreetbattle.herokuapp.com/' target="_blank">Deployed App</a>
                            </CardBody>
                        </Card>
                        <Card>
                            <CardImg top width="100%" src={image3} alt="Card image cap" />
                            <CardBody>
                                <CardTitle>Porcelain</CardTitle>
                                <CardSubtitle>Bladder Evacuator Locator</CardSubtitle>
                                <CardText>This App is designed to locate any restroom around the user granted the restroom is stored in the database. The app allows the user to locate and leave feedback for the restroom. </CardText>
                                <a href='https://github.com/mjanders6/porcelain' target="_blank">Github</a> | <a href='https://sheltered-cliffs-91931.herokuapp.com/' target="_blank">Deployed App</a>
                            </CardBody>
                        </Card>
                        <Card>
                            <CardImg top width="100%" src={image4} alt="Card image cap" />
                            <CardBody>
                                <CardTitle>Hungry Buddy</CardTitle>
                                <CardSubtitle>Make it your self, or Not!</CardSubtitle>
                                <CardText>Allows the user to find recipes based on a a few different search selections. If the user does;nt feel lik cooking, then the user can search for food and locate a restaurant.</CardText>
                                <a href='https://github.com/mjanders6/PantryProject' target="_blank">Github</a> | <a href='https://mjanders6.github.io/PantryProject/' target="_blank">Deployed App</a>
                            </CardBody>
                        </Card>
                        <Card>
                            <CardImg top width="100%" src={image5} alt="Card image cap" />
                            <CardBody>
                                <CardTitle>Book Worm</CardTitle>
                                <CardSubtitle>Search for books and store them in your library</CardSubtitle>
                                <CardText>For the everyday book worm who likes to go to the library. This allows the user to search a book and store it so when they are at the library they can rent it.</CardText>
                                <a href='https://github.com/mjanders6/book-search' target="_blank">Github</a> | <a href='https://rocky-dusk-71305.herokuapp.com/' target="_blank">Deployed App</a>
                            </CardBody>
                        </Card>
                    </CardDeck>
                </Col>
            </Row>
        </Container>
    );
};

export default Cards;