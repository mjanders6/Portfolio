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
                                <CardTitle><b>Super Street Battle</b></CardTitle>
                                <CardSubtitle>Single Player RPG</CardSubtitle>
                                <CardText>Ready to race! This app lets the user define a few things to enhance the car. These enhancements are meant to improve the race outcome.</CardText>
                                <CardText><b>Tech Stack:</b> Github | javascript | CSS/HTML5 | REST API | CRUD | React | MongoDB | Express Server</CardText>
                                <a href='https://github.com/super-street-battle/super-street-battle' target="_blank"><b>Github</b></a>
                                {/* <a href='https://github.com/super-street-battle/super-street-battle' target="_blank"><b>Github</b></a> | <a href='https://superstreetbattle.herokuapp.com/' target="_blank"><b>Deployed App</b></a> */}
                            </CardBody>
                        </Card>
                        <Card>
                            <CardImg top width="100%" src={image3} alt="Card image cap" />
                            <CardBody>
                                <CardTitle><b>Porcelain</b></CardTitle>
                                <CardSubtitle>Bladder Evacuator Locator</CardSubtitle>
                                <CardText>This App is designed to locate any restroom around the user granted the restroom is stored in the database. The app allows the user to locate and leave feedback for the restroom. </CardText>
                                <CardText><b>Tech Stack:</b> Github | javascript | CSS/HTML5 | REST API | CRUD | React | MySQL | Express Server | s3 | Google Map API</CardText>
                                <a href='https://github.com/mjanders6/porcelain' target="_blank"><b>Github</b></a>
                                {/* <a href='https://github.com/mjanders6/porcelain' target="_blank"><b>Github</b></a> | <a href='https://sheltered-cliffs-91931.herokuapp.com/' target="_blank"><b>Deployed App</b></a> */}
                            </CardBody>
                        </Card>
                        <Card>
                            <CardImg top width="100%" src={image4} alt="Card image cap" />
                            <CardBody>
                                <CardTitle><b>Hungry Buddy</b></CardTitle>
                                <CardSubtitle>Make it your self, or Not!</CardSubtitle>
                                <CardText>Allows the user to find recipes based on a a few different search selections. If the user does;nt feel lik cooking, then the user can search for food and locate a restaurant.</CardText>
                                <CardText><b>Tech Stack:</b> Github | javascript | CSS/HTML5 | REST API</CardText>
                                <a href='https://github.com/mjanders6/PantryProject' target="_blank"><b>Github</b></a>
                                {/* <a href='https://github.com/mjanders6/PantryProject' target="_blank"><b>Github</b></a> | <a href='https://mjanders6.github.io/PantryProject/' target="_blank"><b>Deployed App</b></a> */}
                            </CardBody>
                        </Card>
                        <Card>
                            <CardImg top width="100%" src={image5} alt="Card image cap" />
                            <CardBody>
                                <CardTitle><b>Book Worm</b></CardTitle>
                                <CardSubtitle>Search for books and store them in your library</CardSubtitle>
                                <CardText>For the everyday book worm who likes to go to the library. This allows the user to search a book and store it so when they are at the library they can rent it.</CardText>
                                <CardText><b>Tech Stack:</b> Github | javascript | CSS/HTML5 | REST API | CRUD | React | MongoDB | Express Server</CardText>
                                <a href='https://github.com/mjanders6/book-search' target="_blank"><b>Github</b></a>
                                {/* <a href='https://github.com/mjanders6/book-search' target="_blank"><b>Github</b></a> | <a href='https://rocky-dusk-71305.herokuapp.com/' target="_blank"><b>Deployed App</b></a> */}
                            </CardBody>
                        </Card>
                    </CardDeck>
                </Col>
            </Row>
        </Container>
    );
};

export default Cards;