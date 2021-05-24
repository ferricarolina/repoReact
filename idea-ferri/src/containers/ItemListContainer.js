import React, { useState, useEffect } from 'react';
import { Container, Form, Row, Col } from 'react-bootstrap'
import ItemList from '../components/ItemList'
import { getCollection, getCollectionByFilter } from '../firebase/crud'

const ItemListContainer = props => {

    const [data, setData] = useState();
    const [marca, setMarca] = useState(0);
   
    useEffect(() => {
        marca ?
            getCollectionByFilter('items', { key:'categoryId', condition:'==', value:marca}).then((items) => {setData(<ItemList items={items}/>)})
            :
            getCollection('items').then((items) => {setData(<ItemList items={items}/>)})
    }, [marca]);

    const title = <h1 sm={12} className="titulo">Ultimos lanzamientos</h1>

    return (
        <Container fluid className="p-4">
            <Row>{title}</Row>
            <Row><Col sm={1}><Form>
                <Form.Group>
                    <Form.Label>Marcas</Form.Label>
                    <Form.Check type="radio" name="formHorizontalRadios" label="Motorola" id="motorola" onChange={() => setMarca('motorola')} />
                    <Form.Check type="radio" name="formHorizontalRadios" label="Samsung" id="samsung" onChange={() => setMarca('samsung')} />
                    <Form.Check type="radio" name="formHorizontalRadios" label="Xiaomi" id="xiaomi" onChange={() => setMarca('xiaomi')} />
                    <Form.Check type="radio" name="formHorizontalRadios" label="Todos" id="todos" onChange={() => setMarca(0)} defaultChecked />
                </Form.Group>
            </Form></Col>
            <Col sm={11}>{data}</Col>
            </Row>
        </Container>
    )
}

export default ItemListContainer;
