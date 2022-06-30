// 1. Creamos el contexto
// 2. Exporto para consumirlo en los componentes que lo necesiten
import { useState, useEffect } from "react";
import { createContext } from "react";

export const CartContext = createContext()

export const CartProvider = ({children}) =>{
    const [cart, setCart] = useState([])

    //console.log para ver si se van agregando sin quitar el anterior producto ↓
useEffect(()=>{
    console.log(cart)
},[cart])

    //Función para agregar al Cart
    const addToCart = ({item, quantity}) =>{
        if(isInCart(item.id)){
           let index = cart.findIndex(i => i.id === item.id)
           let product = cart[index]
           product.quantity = product.quantity + quantity
        
           const newInCart = [...cart]
           newInCart.splice(index, 1, product)

           setCart({...newInCart})

        }else{
        setCart([...cart, {...item, quantity}])
     }
    }

    //Función para comprobar si el producto ya se encuentra  en el carrito
    const isInCart = (id) =>{
        return cart.some((prod) => prod.id === id)
    }

    //Función para limpiar todos los items del cart

    // const clearCart = () =>

    return(
        <CartContext.Provider value={{cart, addToCart}}>
            {children}
        </CartContext.Provider>
    )
}