import { useContext } from 'react';
import shoppingCart from '../assets/shoppingCart.png';
import { CartContext } from '../context/cartContext';

function CartWidget() {
    const cart = useContext(CartContext)


    return (
        <div>
            <div className="notificacion d-inline-block">{cart.totalItems() === 0 ? '': '(' + cart.totalItems() + ')'}</div>
            <img className="icon d-inline-block align-top" alt= 'icon' src={shoppingCart} />
        </div>
    )
}

export default CartWidget;