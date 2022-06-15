import Item from "./Item/Item.jsx"
import "./ItemList.css"

const ItemList = ({items}) =>{
    return(
        <article className="item-list-container">
          {
            items.map((item) => {
            return(
            <Item key={item.id} item={item} />
            )})
          }
        </article>
    )
}

export default ItemList