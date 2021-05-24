import { useContext, useState } from 'react';
import { CartContext } from '../context/cartContext';
import { Container, Form, Button, Row, Col, Card } from 'react-bootstrap'
import { createItem, updateStock } from '../firebase/crud'

function BuyForm() {
    const cart = useContext(CartContext)

    const [nombre, setNombre] = useState();
    const [email, setEmail] = useState();
    const [telefono, setTelefono] = useState();
    const [compraFinalizada, setCompra] = useState(false);

    function input(event){
        const data = event.target.value
        switch (event.target.name) {
            case 'nombre':
                setNombre(data)
                break;
            case 'email':
                setEmail(data)
                break;
            case 'telefono':
                setTelefono(data)
                break;
            default:
                break;
        }
    }

    async function finalizarCompra(){
        setCompra('***Procesando Compra***')
        const buyer = {buyer:{nombre, email, telefono}, items:cart.buyerItems(), total:cart.totalPrice()}
        console.log(buyer)

        const itemsUpdated = await updateStock(buyer.items)
        if(itemsUpdated){
            setCompra(await createItem('orders', buyer))
            cart.clearCart()
        }
    }

    return (
        <Container>
            {compraFinalizada ? 
            <Row className="justify-content-md-center m-5">
                <Col lg={6}>
                    <Card
                        bg='success'
                        key={1}
                        text={'white'}
                    >
                        <Card.Header className="p-3 titulo" >Tu compra fue realizada con exito!</Card.Header>
                        <Card.Body>
                            <Card.Text>Tu codigo de orden es: {compraFinalizada}</Card.Text>
                            <Card.Text>Podes utilizar este codigo para realizar el seguimiento de tu producto. Gracias por confiar en CellShop.</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row> 
            :
            <Row className="justify-content-md-center m-5">
                <h1 className="titulo mt-3"> Formulario de compra </h1>
                <h3 className="text-center listItem mt-3"> Completa los siguientes datos para finalizar tu orden </h3>
                <Col lg={6}>
                    <Form>
                        <Form.Group className="m-2" size='lg'>
                            <Form.Control type="text" size='lg' placeholder="Nombre y Apellido" name='nombre' onChange={input} />
                        </Form.Group>
                        <Form.Group className="m-2">
                            <Form.Control type="email" size='lg' placeholder="Email" name='email' onChange={input} />
                        </Form.Group>
                        <Form.Group className="m-2">
                            <Form.Control type="number" size='lg' placeholder="Telefono de contacto" name='telefono' onChange={input} />
                        </Form.Group>
                        <Form.Group className="m-2 d-grid">
                            <Button variant="primary" size='lg' onClick={() => finalizarCompra()}>Comprar</Button>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>}
        </Container>
    )
}

export default BuyForm;