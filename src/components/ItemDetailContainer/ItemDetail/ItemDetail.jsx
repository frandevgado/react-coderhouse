const ItemDetail = ({item}) =>{
    


    return(
        <div>
        <h2> {item.name}</h2>
        <h2>Categoría: {item.category}</h2>
        <div><img src={item.img} alt="product"/></div>
        <p> Descripción: {item.description}</p>
        <h2>Stock: {item.stock} </h2>
        </div>
    )
}

export default ItemDetail