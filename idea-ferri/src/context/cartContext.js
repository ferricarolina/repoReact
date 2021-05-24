import { createContext, useState } from "react";

export const CartContext = createContext()

export default function CartProvider({ defaultValue = [], children }) {
    const [items, setItems] = useState(defaultValue)
        
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    
    function getFromCart(id){
        return items.find(itemAndQuantity => itemAndQuantity.item.id === id)
    }

    function isInCart(id){
        return getFromCart(id) !== undefined
    }

    function addToCart(itemAndQuantity){
        if(isInCart(itemAndQuantity.item.id)){
            console.log('El objeto ya se encuentra en el carrito')
            return
        }
        setItems([...items, itemAndQuantity])
    }

    function removeFromCart(id){
        if(!isInCart(id)){
            console.log('El objeto no se encuentra en el carrito')
            return
        }
        setItems(items.filter(itemAndQuantity => itemAndQuantity.item.id !== id))
    }

    function clearCart(){
        setItems([])
    }

    function totalPrice(){
        if(items.length === 0)  return 0 

        return items.map(iq => iq.item.price * iq.quantity).reduce(reducer);
    }

    function totalItems(){
        if(items.length === 0)  return 0 

        return items.map(iq => 1 * iq.quantity).reduce(reducer);
    }

    function buyerItems(){
        return items.map(iq => iq = {id:iq.item.id, title:iq.item.title, price:iq.item.price, quantity:iq.quantity})
    }

    return <CartContext.Provider value={{ items, getFromCart, isInCart, addToCart, removeFromCart, clearCart, totalPrice, totalItems, buyerItems, itemsSize:items.length}}>
        {children}
    </CartContext.Provider>
}