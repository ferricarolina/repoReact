import { useContext, useState } from 'react';
import { Card, Container, Col, Row} from 'react-bootstrap'
import { CartContext } from '../context/cartContext';
import ItemCountF from './ItemCountF'
import LinkedButton from './LinkedButton'

function ItemDetail ({item}){

    const cart = useContext(CartContext)
    
    const { pictureUrl, title, price, description, stock } = item

    const [items, setItems] = useState(0);
    
    const link = '/Cart'
    const button = <LinkedButton className="m-3" variant="success" size="s" link={link} message='Termina tu compra'></LinkedButton>

    function onAdd(quantityToAdd){
        setItems(quantityToAdd)
        cart.addToCart({item:item, quantity:quantityToAdd})
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
                <Col>{ items ? button : <ItemCountF onClick={onAdd} stock={stock}/> }</Col>
            </Row>
            
        </Container>
                
    )

}

export default ItemDetail;