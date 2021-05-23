import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container'
import ItemList from '../components/ItemList'

const ItemListContainer = props => {

    const [data, setData] = useState();
    const id = ''
   
    useEffect(() => {
        async function fetchData() {
            const result = await ItemList(id);
         
            setData(result);
        }
        fetchData()
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
