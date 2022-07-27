import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import "./Cart.css"
import CartForm from './CartForm';
import { CartContext } from '../../context/CartContext'

const Cart = () => {
  const { cart, removeItem, clearCart, totalCost } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <>
        <div>

          <h1 className="empty-cart-text">El carrito aún está vacio :( </h1>
          <Link to="/" className="back-to-text" >
            Volver al Inicio
          </Link>

        </div>
      </>
    )
  }

  return (
    <div className="cart-container">
    <h1 className="cart-title">PRODUCTOS EN EL CARRITO</h1>
      <div className="cart-all-item-container">
      {
        cart.map(item => (
          <div key={item.id} className="cart-item-container">
            <h1 className="cart-item-name">{item.name}</h1>
            <img className="cart-item-img" src={item.img} alt="product img" />
            <p className="cart-item-price" >Precio: ${item.price}</p>
            <p className="cart-item-subtotal">Subtotal: {item.price * item.quantity} </p>
            <button onClick={() => { removeItem(item.id) }} className="clear-item-cart">X</button>

            <p className="cart-item-quantity">Cantidad: {item.quantity}</p>
          </div>
        ))


      }
        </div>
        <p className="total-purchase-text">Total de la compra: ${totalCost()}</p>
      <div className="button-flex">

        <button onClick={clearCart} className="button button-clear">Vaciar Carrito</button>

    
      </div>
      <CartForm/>  
    </div>
  )
}

export default Cart