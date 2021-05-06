import React from 'react';
import '../App.css';
import Item from '../components/Item'
import Container from 'react-bootstrap/Container'
import { Table } from 'react-bootstrap';

function ItemList (itemList){

   //const itemList = [
   //    Item({id:1, pictureUrl: '/static/media/a71.6e1dd95c.jpg', title: 'a71', price:80000}),
   //    Item({id:2, pictureUrl: '/static/media/a71.6e1dd95c.jpg', title: 'a99', price:98000}),
   //    Item({id:3, pictureUrl: '/static/media/a71.6e1dd95c.jpg', title: 'a03', price:13000}),
   //    Item({id:4, pictureUrl: '/static/media/a71.6e1dd95c.jpg', title: 's15', price:1234567890})
   //]
    
    return (
    <Container fluid>   
        <Table responsive>
            <tbody>
                <tr>
                    {itemList.map(i => <td>{i}</td>)}
                </tr>
            </tbody>
        </Table>
    </Container>
    )

}

export default ItemList;