import React from 'react';
import '../App.css';
import ItemCountF from './ItemCountF'
import { Card, Table, Container, Col, Row} from 'react-bootstrap'

async function ItemDetail (item){

    const { id, pictureUrl, title, price, description } = item

    return (
        
        <Container fluid className="App">
           <Row>
                <Col sm={6}><Card.Img variant="top" src={pictureUrl} style={{ width: '22rem' }} /></Col>
                <Col sm={6}>
                    <Card.Body>
                        <Card.Title className="titulo">{title}</Card.Title>
                        <Card.Text className="itemList">{description}</Card.Text>
                        </Card.Body>
                </Col>
            </Row>
            <Row>
                <Col><Card.Text className="titulo">Oferta lanzamiento {price}</Card.Text></Col>
            </Row>
            <Row>
                <Col><ItemCountF/></Col>
            </Row>
            
        </Container>
                
    )

}

export default ItemDetail;