import {Card, Container, Table} from 'react-bootstrap'
import '../App.css';
import a71 from '../assets/a71.jpg'
import g100 from '../assets/g100.jpg'
import s21 from '../assets/s21.png'
import note10 from '../assets/note10.jpg'

function Preview () {
   
    return (
            <Container fluid>
                <Table>
                    <tbody>
                    <th className="p-4 icon">
                        <Card className="p-3 card2" style={{ width: '22rem' }}>
                            <Card.Img variant="top" src={a71} />
                            <Card.Body>
                                <Card.Title className="price"> SAMSUNG A71</Card.Title>
                            </Card.Body>
                        </Card>
                    </th>
                    <th className="p-4 icon">
                        <Card className="p-3" style={{ width: '22rem' }}>
                            <Card.Img variant="top" src={g100} />
                            <Card.Body>
                                <Card.Title className="price">SAMSUNG S21</Card.Title>
                            </Card.Body>
                        </Card>
                    </th>
                    <th className="p-4 icon">
                        <Card className="p-3" style={{ width: '22rem' }}>
                            <Card.Img variant="top" src={s21} />
                            <Card.Body>
                                <Card.Title className="price">MOTOROLA G100</Card.Title>
                            </Card.Body>
                        </Card>
                    </th>
                    <th className="p-4 icon">
                        <Card className="p-3" style={{ width: '22rem' }}>
                            <Card.Img variant="top" src={note10} />
                            <Card.Body>
                                <Card.Title className="price">XIAOMI MI NOTE 10</Card.Title>
                            </Card.Body>
                        </Card>
                    </th>
                    </tbody>
                </Table>
          </Container>
        )
}

export default Preview;