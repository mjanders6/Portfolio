import React from 'react';
import {
    Navbar
} from 'reactstrap';
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = _ => {

        return (
            <div>
                <Navbar id='footer' bottom color="light" light expand="md">
                    <h7 href="/">Michael J. Anderson | 2019</h7>                    
                </Navbar>
            </div>
        );
}

export default Footer