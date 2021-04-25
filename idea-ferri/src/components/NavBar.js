import React from 'react';
import { Navbar, Nav} from 'react-bootstrap';
import logo from '../assets/logo.png';
import CartWidget from '../components/CartWidget.js'

function NavBar()  {
    return (
        <Navbar className="barraLogo" bg="light" expand="lg">
                <Navbar.Brand href="#home">
                    <img className="logo d-inline-block align-top" src={logo} alt="logo" />
                </Navbar.Brand>
            <Navbar.Collapse className="barraEnlaces" id="basic-navbar-nav">
                <Nav>
                    <Nav.Link className="enlaces" href="#home">Home</Nav.Link>
                    <Nav.Link className="enlaces" href="#home">Catálogo</Nav.Link>
                    <Nav.Link className="enlaces" href="#home">Galería</Nav.Link>
                    <Nav.Link className="enlaces" href="#home">Contacto</Nav.Link>
                    <Nav.Link className="enlaces" href="#home">
                        <CartWidget />
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>               
    );  
}

export default NavBar;