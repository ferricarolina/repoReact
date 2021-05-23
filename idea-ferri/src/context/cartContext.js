import { createContext, useState } from "react";

export const CartContext = createContext()

export default function CartProvider({ defaultValue = [], children }) {
    const [items, setItems] = useState(defaultValue)
    
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

    return <CartContext.Provider value={{ items, getFromCart, isInCart, addToCart, removeFromCart, clearCart, itemsSize:items.lenght}}>
        {children}
    </CartContext.Provider>
}