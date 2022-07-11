import "./ItemListContainer.css"
import ItemList from "./ItemList/ItemList"
import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom'
import { getItems, getItemsForCategory } from "../../services/firestore"

export default function ItemListContainer(){

    
    const {categoryId} = useParams()
    const [products, setProducts] = useState([])
    
    useEffect(() => {
        if(categoryId){
            getItemsForCategory(categoryId)
            .then(res => setProducts(res))
            .catch(error => console.log(error))
        }else{
        getItems()
        .then((res) => setProducts(res))
        .catch((error) => console.log("No pudimos encontrar los productos", error))
        }        

    }, [categoryId])


    return(
     <div className="container">
        <ItemList items={products} />
     </div>
    )
}
