import React from 'react';
import Container from 'react-bootstrap/Container'
import PreviewContainer from '../containers/PreviewContainer'
import banner from "../assets/banner.png"


function Home () {
    return (
        <Container fluid className="pb-3" >
            <img className="m-3 rounded text-center"  style={{ width: '98%' }} src={banner} alt="banner"/>
            <PreviewContainer />
        </Container>
    )
}

export default Home;