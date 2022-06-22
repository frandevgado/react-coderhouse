import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({ item }) =>{
  const urlDetail = `/item/${item.id}`
    return(
        <article className="item-container">
          <div className="container-products-images">
          <Link to={urlDetail}>
            <img className="products-images" src={item.img} alt=""/>
            </Link>
          </div>
          <h2 className="product-text product-text__name">{item.name}</h2>
          <h2 className="product-text product-text__price">${item.price}</h2>
        </article>
    )
}

export default Item