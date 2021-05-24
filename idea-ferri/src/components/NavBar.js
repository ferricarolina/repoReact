import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import CartWidget from '../components/CartWidget.js'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom';


function NavBar()  {
    return (
        <Navbar className="barraLogo" variant="dark">
            <Navbar.Brand as={Link} to="/Home">
                <img
                src={logo}
                    width="130"
                    height="80"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                />
            </Navbar.Brand>
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
            <Nav className="mr-auto">
                <Nav.Link className="enlaces m-2" as={Link} to="/Home">Home</Nav.Link>
                <Nav.Link className="enlaces m-2" as={Link} to="/ItemListContainer">Catálogo</Nav.Link>
                <Nav.Link className="enlaces m-2" as={Link} to="/Cart"><CartWidget /> </Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
        )           
}

export default NavBar;
