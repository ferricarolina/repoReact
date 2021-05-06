import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container'
import Item from '../components/Item'
import ItemList from '../components/ItemList'
import a71 from '../assets/a71.jpg'
import g100 from '../assets/g100.jpg'
import s21 from '../assets/s21.png'
import note10 from '../assets/note10.jpg'

function mockItems() {
    var promise = new Promise(function(resolve, reject) {
      setTimeout(function() {
        resolve([
            Item({id:1, pictureUrl: a71, title: 'SAMSUNG GALAXY A71', price:"$65.000"}),
            Item({id:2, pictureUrl: s21, title: 'SAMSUNG S21', price: "$119.000"}),
            Item({id:3, pictureUrl: g100, title: 'MOTOROLA G100', price:"$79.000"}),
            Item({id:4, pictureUrl: note10, title: 'XIAOMI MI NOTE 10', price:"$94.000"})
        ]);
      }, 2000);
    });
    return promise;
 }

const ItemListContainer = props => {

    const [data, setData] = useState();
   
    useEffect(async () => {
      const result = await mockItems();
   
      setData(ItemList(result));
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