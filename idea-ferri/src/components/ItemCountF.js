import { useState } from "react";
import React from 'react';
import '../App.css';
import {Button, ButtonGroup, Container, Row, Col}  from 'react-bootstrap'

const useContadorStock = (inicial, stock) => {
    const [contador, setContador] = useState(inicial)

    const incrementar = () => {
        if (contador < stock){
            setContador(contador + 1)
        } else {
            alert('No hay mas stock disponible')
        }
    }

    const decrementar = () => {
        if (contador > 0) {
            setContador(contador - 1)
        } else {
            alert('No hay items para borrar!')
        }
    }

    return {contador, incrementar, decrementar}
}

function ItemCountF(props) {
    const { contador, incrementar, decrementar } = useContadorStock(1, 5)

    return (
        <Container fluid>
            <Row>
                <Col>
                    <ButtonGroup className="p-3" aria-label="botonera">
                        <Button onClick={decrementar} variant="primary" size="s">-</Button>
                        <Button variant="primary" size="s" disabled>{contador}</Button>
                        <Button onClick={incrementar} variant="primary" size="s">+</Button>
                    </ButtonGroup>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button variant="primary" size="s" onClick={() => props.onClick(contador)}>Agregar al carrito</Button>
                </Col>
            </Row>
        </Container>
        
    )
}
    
export default ItemCountF;