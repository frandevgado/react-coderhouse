import "./ItemListContainer.css"
import ItemCount from "./ItemCount/ItemCount"


export default function ItemListContainer({greet}){

    const onAdd = (quantity) =>{
        console.log(`You just bought ${quantity} units!`)
    }

    return(
        <div className="item-list-container">
        <h2 className=""> {greet} </h2>
        <ItemCount initial={1} stock={10} onAdd={onAdd} />
        </div>
    )
}