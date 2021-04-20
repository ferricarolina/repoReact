import React from 'react';
import { Navbar, Nav} from 'react-bootstrap';
import shop from '../assets/shop.svg';

function NavBar()  {
    return (
        <Navbar className="barra" bg="light" expand="lg">
                <Navbar.Brand href="#home">
                    <img className="logo d-inline-block align-top" src={shop} />
                </Navbar.Brand>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link className="enlaces" href="#home">Home</Nav.Link>
                    <Nav.Link className="enlaces" href="#home">Catálogo</Nav.Link>
                    <Nav.Link className="enlaces" href="#home">Galería</Nav.Link>
                    <Nav.Link className="enlaces" href="#home">Contacto</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>               
    );  
}

export default NavBar;