import './Item.css'

const Item = ({ item }) =>{
    return(
        <article className="item-container">
          <div className="container-products-images">
            <img className="products-images" src={item.img} alt=""/>
          </div>
          <h2 className="product-text product-text__name">{item.name}</h2>
          <h2 className="product-text product-text__price">${item.price}</h2>
        </article>
    )
}

export default Item