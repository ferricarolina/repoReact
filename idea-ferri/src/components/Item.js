import {Card, Container, Button} from 'react-bootstrap'
import '../App.css';

function Item (item) {

    const { id, pictureUrl, title, price } = item
    const href = "./ItemDetailContainer/" + id

    return (
            <Container fluid>
                <Card className="p-3" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={pictureUrl} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text className="price">{price}</Card.Text>
                    </Card.Body>
                        <Button href={href} variant="primary" size="s">Ver producto</Button>
                </Card>
          </Container>
        )
}

export default Item;