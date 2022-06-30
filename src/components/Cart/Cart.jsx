import { createContext, useContext } from "react"

const Cart = () =>{
    const {cart} = useContext(createContext)
    return(
        <>
        <h1>Cart</h1>
        <p>under maintenance</p>
        </>
    )
}

export default Cart