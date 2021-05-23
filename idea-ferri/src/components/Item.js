import { Card, Container } from 'react-bootstrap'
import LinkedButton from './LinkedButton'

function Item (item) {

    const { id, pictureUrl, title, price } = item
    const link = "./ItemDetailContainer/" + id

    return (
            <Container fluid>
                <Card className="text-center p-3" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={pictureUrl} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text className="price">${price}</Card.Text>
                    </Card.Body>
                        <LinkedButton className="buttonsCart" link={link} message='Ver producto'></LinkedButton>
                </Card>
          </Container>
        )
}

export default Item;