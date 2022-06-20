import { useState, useEffect } from "react"
import itemProducts from "../mock/products"
import ItemDetail from "./ItemDetail/ItemDetail"

const ItemDetailContainer = ({greet}) =>{
    const [product, setProduct] = useState({})

    useEffect(() => {
        const bringProduct = new Promise ((res, rej) =>{
            setTimeout(() => {
                res(itemProducts[0])
            }, 1000)
        })

        bringProduct.then((res) => setProduct(res))
        bringProduct.catch((error) => console.log(error))


    }, [])

    console.log(product)
    
    return(
     <div className="container">
        <ItemDetail item={product} />
     </div>
    )
}


export default ItemDetailContainer