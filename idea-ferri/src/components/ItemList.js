import React from 'react';
import '../App.css';
import Item from '../components/Item'
import Container from 'react-bootstrap/Container'
import { Row, Col } from 'react-bootstrap';

function ItemList ({items}){

    return (
    <Container>
        <Row>
            {items.map(i => <Col sm={3} key={i.title}>{<Item item={i}/>}</Col>)}
        </Row>
    </Container>
    )

}

export default ItemList;