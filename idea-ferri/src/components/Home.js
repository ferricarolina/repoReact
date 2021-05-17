import React from 'react';
import Container from 'react-bootstrap/Container'
import PreviewContainer from '../containers/PreviewContainer'

const greeting = <h1 style={{ textAlign: 'center'}}>¡Bienvenido a CellShop!</h1>
const subtitulo = <h3 style={{ textAlign: 'center'}}> Somos especialistas en telefonía móvil y líderes en el mercado. No te pierdas nuestras ofertas!</h3>

function Home () {
    return (
        <Container fluid className="p-3">
            {greeting}
            {subtitulo}
            <PreviewContainer/>
        </Container>
    )
}

export default Home;