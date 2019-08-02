import React from 'react';
import { Container, Card, Button, CardImg, CardTitle, CardText, CardDeck, CardSubtitle, CardBody } from 'reactstrap';
import image2 from '../../assets/2.png'
import image3 from '../../assets/3.png'
import image4 from '../../assets/4.png'

const Cards = (props) => {
    return (
        <Container>
            <CardDeck>
                <Card>
                    <CardImg top width="100%" src={image2} alt="Card image cap" />
                    <CardBody>
                        <CardTitle>Super Street Battle</CardTitle>
                        <CardSubtitle>Single Player RPG</CardSubtitle>
                        <CardText></CardText>
                        <a href='https://github.com/super-street-battle/super-street-battle' target="_blank">Github</a> | <a href='https://superstreetbattle.herokuapp.com/' target="_blank">Deployed App</a>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg top width="100%" src={image3} alt="Card image cap" />
                    <CardBody>
                        <CardTitle>Porcelain</CardTitle>
                        <CardSubtitle>Bladder Evacuator Locator</CardSubtitle>
                        <CardText></CardText>
                        <a href='https://github.com/mjanders6/porcelain' target="_blank">Github</a> | <a href='https://sheltered-cliffs-91931.herokuapp.com/' target="_blank">Deployed App</a>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg top width="100%" src={image4} alt="Card image cap" />
                    <CardBody>
                        <CardTitle>Whip it up!</CardTitle>
                        <CardSubtitle>Make it your self or too lazy too cook</CardSubtitle>
                        <CardText></CardText>
                        <a href='https://github.com/mjanders6/PantryProject' target="_blank">Github</a> | <a href='https://mjanders6.github.io/PantryProject/' target="_blank">Deployed App</a>
                    </CardBody>
                </Card>
            </CardDeck>
        </Container>
    );
};

export default Cards;