import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import CartWidget from '../components/CartWidget.js'
import logo from '../assets/logo.png'

function NavBar()  {
    return (
        <Navbar className="barraLogo" variant="dark">
            <Navbar.Brand href="#home">
                <img
                src={logo}
                    width="200"
                    height="70"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                />
            </Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link className="enlaces" href="#home">Home</Nav.Link>
                <Nav.Link className="enlaces" href="#home">Catálogo</Nav.Link>
                <Nav.Link className="enlaces" href="#home">Galería</Nav.Link>
                <Nav.Link className="enlaces" href="#home">Contacto</Nav.Link>
                <Nav.Link className="enlaces" href="#home"><CartWidget /> </Nav.Link>
            </Nav>
        </Navbar>
        )           
}

export default NavBar;
