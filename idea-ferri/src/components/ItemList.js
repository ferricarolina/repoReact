import React from 'react';
import '../App.css';
import Item from '../components/Item'
import Container from 'react-bootstrap/Container'
import { Table } from 'react-bootstrap';
import { mockItems } from '../mockDB'

async function ItemList (itemList){
    
    const list = await mockItems()

    return (
    <Container>   
        <Table>
            <tbody>
                <tr>
                    {list.map(i => <td>{Item(i)}</td>)}
                </tr>
            </tbody>
        </Table>
    </Container>
    )

}

export default ItemList;