import { useState, useEffect } from "react"
import ItemDetail from "./ItemDetail/ItemDetail"
import { useParams } from 'react-router-dom'
import { getItem } from "../../services/firestore"



const ItemDetailContainer = () =>{
    const [product, setProduct] = useState({})
    const {id} = useParams()



    useEffect(() => {
        getItem(id)

        .then((res) => setProduct(res))
        .catch((error) => console.log(error))


    }, [id])

    
    return(
     <div className="container">
        <ItemDetail item={product} />
     </div>
    )
}

export default ItemDetailContainer