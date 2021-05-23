import { CartContext } from '../context/cartContext';
import { useContext } from 'react';
import { Container, Button, ButtonGroup, Row, Col, Image } from 'react-bootstrap'

function Cart (){

    const cart = useContext(CartContext)

    function clearItems(){
        cart.clearCart()
    }
    function removeItem(id){
        cart.removeFromCart(id)
    }
    function isInCart(id){
        console.log(cart.isInCart(id))
    }
    function verCarrito(){
        console.log(cart.items)
    }

    return (
        
        <Container fluid className='container pt-3'>
                <Row className="titulo text-center">
                    <Col></Col>
                    <Col>Nombre</Col>
                    <Col>Precio</Col>
                    <Col>Cantidad</Col>
                    <Col></Col>
                </Row>
            {cart.items.map(i => <Row className="text-center itemList" key={i.item.id}>
                        <Col><Image src={i.item.pictureUrl} className='iconCart'></Image></Col>
                        <Col className="mt-5">{i.item.title}</Col>
                        <Col className="mt-5">{i.item.price}</Col>
                        <Col className="mt-5">{i.quantity}</Col>
                        <Col className="mt-5"><Button variant="danger" onClick={() => removeItem(i.item.id)}>x</Button></Col>
                    </Row>)}
                <Row>
                    <ButtonGroup className="m-3" aria-label="botonera">
                        <Button variant="warning" className="m-3" onClick={() => verCarrito()}>Ver Carrito por consola</Button>
                        <Button variant="warning" className="m-3" onClick={() => clearItems()}>vaciar Carrito</Button>
                        <Button variant="warning" className="m-3" onClick={() => removeItem(1)}>Borrar ItemId 1</Button>
                        <Button variant="warning" className="m-3" onClick={() => isInCart(1)}>Contiene ItemId1</Button>
                    </ButtonGroup>
                </Row>
        </Container>
                
    )

}

export default Cart;