import React from 'react';
import { Container } from 'react-bootstrap'
import Preview from '../components/Preview'

const PreviewContainer = props => {

    const title = <h1 className="titulo">Novedades del mes</h1>

    return (
        <Container fluid className="p-3">
            {title}

            <Preview/>
        </Container>
    )
}

export default PreviewContainer;