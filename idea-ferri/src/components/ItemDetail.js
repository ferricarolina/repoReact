import { useState } from 'react';
import '../App.css';
import ItemCountF from './ItemCountF'
import { Button, Card, Container, Col, Row} from 'react-bootstrap'

function ItemDetail (props){

    const { id, pictureUrl, title, price, description } = props.item

    const [items, setItems] = useState(0);

    const href = "/cart"
    const button = <Button className="m-3" variant="success" size="s" href={href}>Termina tu compra</Button>

    function onAdd(quantityToAdd){
        setItems(quantityToAdd)
    }

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
                <Col>{ items ? button : <ItemCountF onClick={onAdd}/> }</Col>
            </Row>
            
        </Container>
                
    )

}

export default ItemDetail;