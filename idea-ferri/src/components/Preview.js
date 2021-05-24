import {Row, Container, Col} from 'react-bootstrap'
import '../App.css';
import a from '../assets/a.jpg' 
import b from '../assets/b.jpg' 
import c from '../assets/c.jpg' 

function Preview () {
   
    return (
            <Container fluid>
                <Row>
                    <Col className="preview text-center"> 
                       <img className="rounded" style={{ width: '75%' }} src={a} alt="preview" />
                    </Col>
                    <Col className="preview text-center">
                       <img className="rounded"  style={{ width: '75%' }} src={b} alt="preview"/>
                    </Col>
                    <Col className="preview text-center">
                       <img className="rounded"  style={{ width: '75%' }} src={c} alt="preview"/>
                    </Col>
                </Row>
          </Container>
        )
}

export default Preview;