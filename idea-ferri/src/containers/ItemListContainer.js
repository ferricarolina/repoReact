import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container'
import ItemList from '../components/ItemList'

const ItemListContainer = props => {

    const [data, setData] = useState();
   
    useEffect(async () => {
      const result = await ItemList();
   
      setData(result);
    }, []);

    const title = <h1 className="titulo">Ultimos lanzamientos</h1>

    return (
        <Container fluid className="p-4">
            {title}
            {data}
        </Container>
    )
}

export default ItemListContainer;