import React from 'react';
import '../App.css';
import Item from '../components/Item'
import Container from 'react-bootstrap/Container'
import { Table } from 'react-bootstrap';

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

async function ItemList (itemList){
    
    const list = await mockItems()

    return (
    <Container fluid>   
        <Table responsive>
            <tbody>
                <tr>
                    {list.map(i => <td>{i}</td>)}
                </tr>
            </tbody>
        </Table>
    </Container>
    )

}

export default ItemList;