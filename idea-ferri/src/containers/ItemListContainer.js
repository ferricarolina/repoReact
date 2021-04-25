import React from 'react';
import home from '../assets/home.jpg'


const ItemListContainer = props => {

    const greeting = <h1>¡Bienvenido a CellShop!</h1>
    const subtitulo = <h3>Somos especialistas en telefonía móvil y líderes en el mercado. No te pierdas nuestras ofertas!</h3>
    const imagenHome =  <img className="imgHome" src={home} />

    return (
        <div>
            {greeting}
            {subtitulo}
            {imagenHome}
        </div>
        )
}

export default ItemListContainer;