import React, { useState, useEffect } from 'react';
import {Container} from 'react-bootstrap'
import ItemDetail from '../components/ItemDetail'
import { useParams } from 'react-router-dom'
import { getItem } from '../mockDB'

const ItemDetailContainer = props => {

    const { id } = useParams()

    const [data, setData] = useState();
   
    useEffect(() => {
        getItem(id).then(result => {
            const detail = <ItemDetail item={result}/>
            setData(detail);
        })
    }, [id]);

    return (
        <Container fluid className="p-3">
            {data}
        </Container>
    )
}

export default ItemDetailContainer;