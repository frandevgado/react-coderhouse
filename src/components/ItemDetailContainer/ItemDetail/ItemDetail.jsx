import "./ItemDetail.css"

const ItemDetail = ({item}) =>{
    
    return(
        <div className="container">
          <h1 className="item-section-title">DETALLES DEL PRODUCTO</h1>
          <div className="item-detail-container">
            <div className="item-detail__image-container">
                <img className="item-detail__image" src={item.img} alt="product"/>
            </div>
            <div className="item-detail__text-container">
                <h2 className="item-content item-content--title"> {item.name}</h2>
                <h3 className="item-content item-content--category">Categoría: {item.category}</h3>
                <p className="item-content item-content--description"> Descripción: {item.description}</p>
                <h3 className="item-content item-content--stock">Stock: {item.stock} </h3>
            </div>
          </div>
        </div>
    )
}

export default ItemDetail