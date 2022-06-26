import { useState } from "react"
import "./ItemCount.css"

const ItemCount = ({initial, stock, onAdd}) =>{

    const [count, setCount] = useState(initial)

    const decrease = () =>{
        setCount(count - 1)
    }

    const increase = () =>{
        setCount(count + 1)
    }

    return(
        <div className="item-count-container">
            <button className="item-count item-count--minus" disabled={count <=1} onClick={decrease}>-</button>
            <span className="item-count-number">{count}</span>
            <button className="item-count item-count--plus"   disabled={count >= stock} onClick={increase}>+</button>
            <div>
                <button className="item-count__add-to"  disabled={stock <=0} onClick={() => onAdd(count)} >Add to cart</button>
            </div>
        </div>
    )

}

export default ItemCount