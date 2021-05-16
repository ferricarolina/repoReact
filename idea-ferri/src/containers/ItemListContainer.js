import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container'
import ItemList from '../components/ItemList'

const ItemListContainer = props => {

    const [data, setData] = useState();
   
    useEffect(async () => {
      const result = await ItemList();
   
      setData(result);
    }, []);

    const greeting = <h1>¡Bienvenido a CellShop!</h1>
    const subtitulo = <h3>Somos especialistas en telefonía móvil y líderes en el mercado. No te pierdas nuestras ofertas!</h3>

    return (
        <Container fluid className="p-3">
            {greeting}
            {subtitulo}
            {data}
        </Container>
    )
}

export default ItemListContainer;