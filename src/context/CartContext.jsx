// 1. Creamos el contexto
// 2. Exporto para consumirlo en los componentes que lo necesiten
import { useState/*, useEffect*/ } from "react";
import { createContext } from "react";

export const CartContext = createContext()

export const CartProvider = ({children}) =>{
    const [cart, setCart] = useState([])
    
    
    // //console.log para ver si se van agregando sin quitar el anterior producto ↓
    // useEffect(()=>{
    //     console.log(cart)
    // },[cart])
    

    
    //Función para agregar al Cart
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

    //Función para contar la cantidad en CardWidget
    const getQuantity = () => {
        let count = 0
        cart.forEach(prod => {
          count += prod.quantity
        })
        return count
      }

        // Eliminar Item.
  const removeItem = (id) => {
    const products = cart.filter(prod => prod.id !== id)
    setCart(products)
  }

  // Contador de productos añadidos
  const getQuantityProd = (id) => {
    return cart.find(prod => prod.id === id)?.quantity
  }

// Verificar si producto esta en el carrito
  const isInCart = (id) => {
    return cart.some((prod) => prod.id === id);
  }

  // Vaciar carrito.
  const clearCart = () => {
    setCart([]);
  }
  // Calculo Total de la compra (Cantidad x precio)
  const totalCost = () => {
       let total = 0
    cart.forEach(prod => {
      total += prod.quantity * prod.price
    })

    return total
  }


    //Función para limpiar todos los items del cart

    // const clearCart = () =>

    return(
        <CartContext.Provider value={{cart, addToCart, isInCart, getQuantity, getQuantityProd, removeItem, clearCart, totalCost}}>
            {children}
        </CartContext.Provider>
    )
}