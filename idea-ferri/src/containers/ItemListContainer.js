import React from 'react';
import ItemCountF from '../components/ItemCountF'
import Container from 'react-bootstrap/Container'

const ItemListContainer = props => {

    const greeting = <h1>¡Bienvenido a CellShop!</h1>
    const subtitulo = <h3>Somos especialistas en telefonía móvil y líderes en el mercado. No te pierdas nuestras ofertas!</h3>

    return (
        <Container fluid className="p-3">
            {greeting}
            {subtitulo}
            <ItemCountF/>
        </Container>
        )
}

export default ItemListContainer;