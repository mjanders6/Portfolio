import React from 'react';
import {
    Navbar
} from 'reactstrap';
import { Link } from 'react-router-dom'
import './Footer.css'

let date =  new Date().getFullYear();

const Footer = _ => {

        return (
            <div>
                <Navbar id='footer' bottom color="light" light expand="md"> 
                    <h7 href="/">Michael J. Anderson | {date}</h7>                    
                </Navbar>
            </div>
        );
}

export default Footer