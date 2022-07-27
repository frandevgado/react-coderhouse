import { useState} from "react";
import { createContext } from "react";

export const CartContext = createContext()

export const CartProvider = ({children}) =>{
    const [cart, setCart] = useState([])
    

    const addToCart = ({item, quantity}) => {
      if (isInCart(item.id)) {
          let index = cart.findIndex(i => i.id === item.id);
          let product = cart[index];
          product.quantity = product.quantity + quantity;

          const newCart = [...cart];
          newCart.splice(index, 1, product)

          setCart([...newCart])
      } else {
          setCart([...cart, { ...item, quantity }]);
      }
  }


    const getQuantity = () => {
        let count = 0
        cart.forEach(prod => {
          count += prod.quantity
        })
        return count
      }


  const removeItem = (id) => {
    const products = cart.filter(prod => prod.id !== id)
    setCart(products)
  }

  const getQuantityProd = (id) => {
    return cart.find(prod => prod.id === id)?.quantity
  }

  const isInCart = (id) => {
    return cart.some((prod) => prod.id === id);
  }

  const clearCart = () => {
    setCart([]);
  }
  const totalCost = () => {
       let total = 0
    cart.forEach(prod => {
      total += prod.quantity * prod.price
    })

    return total
  }

    return(
        <CartContext.Provider value={{cart, addToCart, isInCart, getQuantity, getQuantityProd, removeItem, clearCart, totalCost}}>
            {children}
        </CartContext.Provider>
    )
}