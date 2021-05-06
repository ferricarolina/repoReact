import {Card, Container, ListGroup, ListGroupItem} from 'react-bootstrap'
import '../App.css';
import ItemCountF from '../components/ItemCountF'

function Item (item) {

    const { id, pictureUrl, title, price } = item

    //const item =
    //{id:'1', pictureUrl: '', title: 'SAMSUNG GALAXY A71', price: '$63.999'}
    //{id:'2', pictureUrl: '', title: 'MOTOROLA G9', price: '$39.999'},
    //{id:'3', pictureUrl: '', title: 'XIAOMI REDMI NOTE 10', price: '$92.999'},
    //{id:'4', pictureUrl: '', title: 'LG VELVET 128GB', price: '$62.999'}

    return (
            <Container fluid>
                <Card className="p-3" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={pictureUrl} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text className="price">{price}</Card.Text>
                    </Card.Body>
                    <ItemCountF/>
                </Card>
          </Container>
        )
}

export default Item;