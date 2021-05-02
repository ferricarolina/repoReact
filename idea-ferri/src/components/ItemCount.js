import { Component } from "react";
import '../App.css';

class ItemCount extends Component{
    state = {
        count: 1,
        stockDisponible: 5
    }

    onAdd = () => {
        if (this.state.count < this.state.stockDisponible){
            this.setState ({ count: this.state.count + 1 })
        } else {
            alert('No hay mas stock disponible')
        }
    } 

    onSubstract = () => {
        if (this.state.count > 0){
        this.setState ({ count: this.state.count - 1 })
        } else {
        alert('No hay items para borrar!')       
        }
    }

    render(){
        return (
        <div class='card'>
                <div>
                    <button onClick={this.onSubstract}  type="button" class="col-lg-3 btn btn-light d-inline"  display="inline">-</button>
                    { this.state.count }
                    <button onClick={this.onAdd} type="button" class="col-lg-3 btn btn-light d-inline"  display="inline">+</button>
                </div>
                <div>
                    <button type="button" class="btn btn-success">Aniadir al carrito</button>
                </div>
        </div>
    )}
}

export default ItemCount;