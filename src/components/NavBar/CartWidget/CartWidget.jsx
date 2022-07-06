import "./CartWidget.css"
import {FaShoppingCart} from "react-icons/fa"
import { CartContext } from "../../../context/CartContext"
import { useContext } from "react"

export default function CartWidget(){
   const {cart, getQuantity} = useContext(CartContext) 

   if(cart.length === 0){
        return(
            <FaShoppingCart className="cart-icon"/>
        )
   }else{
        return (
            <div className="nav-cart-container">
                <FaShoppingCart className="cart-icon"/>
                <p className="quantity-number">{getQuantity()}</p>
            </div>
        )
    }
}

