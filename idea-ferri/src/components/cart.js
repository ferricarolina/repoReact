import { CartContext } from '../context/cartContext';
import { useContext } from 'react';
import { Container, Button, Row, Col, Image } from 'react-bootstrap'
import LinkedButton from './LinkedButton'
import { ImageContext } from '../context/imagesContext';

function Cart (){

    const cart = useContext(CartContext)
    const img = useContext(ImageContext)
    const link = '/ItemListContainer'
    const emptyCart = <div>
        <div className="titulo">Aún no has agregado items a tu carrito</div>
        <div className="text-center"><LinkedButton className="m-3" variant="primary" size="s" link={link} message='Ver Productos'></LinkedButton></div>
    </div>

    function clearItems(){
        cart.clearCart()
    }
    function removeItem(id){
        cart.removeFromCart(id)
    }
    
    return (
        <Container fluid className='container pt-3'>
            {cart.itemsSize === 0 ? <div>{emptyCart}</div> : <div>
                <Row className="titulo text-center">
                    <Col></Col>
                    <Col>Nombre</Col>
                    <Col>Precio</Col>
                    <Col>Cantidad</Col>
                    <Col></Col>
                </Row>
                {cart.items.map(i => <Row className="text-center itemList" key={i.item.id}>
                    <Col><Image src={img.getImage(i.item.pictureUrl)} className='iconCart'></Image></Col>
                    <Col className="mt-5">{i.item.title}</Col>
                    <Col className="mt-5"> ${i.item.price}</Col>
                    <Col className="mt-5">{i.quantity} u.
                    <Col>(${i.item.price * i.quantity})</Col>
                    </Col>
                    <Col className="mt-5"><Button variant="danger" onClick={() => removeItem(i.item.id)}>X</Button></Col>
                </Row>)}
                <Row className="text-center bg-warning mt-4 price">
                    <Col></Col><Col></Col><Col></Col>
                    <Col>Total:</Col>
                    <Col>${cart.totalPrice()}</Col>
                </Row>
                <Row className="text-center mt-5">
                    <Col><LinkedButton variant="outline-primary" size="lg" className="btn buttonsCart m-5" link={link} message='Seguir comprando'></LinkedButton></Col>
                    <Col></Col>
                    <Col><Button variant="outline-danger" size="lg" className="btn buttonsCart m-5" onClick={() => clearItems()}>Vaciar Carrito</Button></Col>
                    <Col><LinkedButton variant="success" size="lg" className="btn buttonsCart m-5" link={'/BuyForm'} message='Finalizar y pagar'></LinkedButton></Col>
                </Row>
            </div>}
        </Container>
                
    )

}

export default Cart;