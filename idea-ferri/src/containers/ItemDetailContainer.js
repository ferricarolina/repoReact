import React, { useState, useEffect } from 'react';
import {Container} from 'react-bootstrap'
import ItemDetail from '../components/ItemDetail'
import { useParams } from 'react-router-dom'
import { getCollectionItemById } from '../firebase/crud'

const ItemDetailContainer = props => {

    const { id } = useParams()

    const [data, setData] = useState();
   
    useEffect(() => {
        getCollectionItemById('items', id).then(item => {
            const detail = <ItemDetail item={item[0]}/>
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