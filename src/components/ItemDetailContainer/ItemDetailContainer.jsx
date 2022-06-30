import { useState, useEffect } from "react"
import ItemDetail from "./ItemDetail/ItemDetail"
import { useParams } from 'react-router-dom'
import itemProducts from "../mock/products"


const ItemDetailContainer = ({greet}) =>{
    const [product, setProduct] = useState({})
    const {id} = useParams()

    useEffect(() => {

        const bringProduct = new Promise ((res, rej) =>{
                let itemId = parseInt(id)
                const itemFound = itemProducts.find(item => item.id === itemId)
                res(itemFound)
        })

        bringProduct.then((res) => setProduct(res))
        bringProduct.catch((error) => console.log(error))


    }, [id])

    
    return(
     <div className="container">
        <ItemDetail item={product} />
     </div>
    )
}


export default ItemDetailContainer