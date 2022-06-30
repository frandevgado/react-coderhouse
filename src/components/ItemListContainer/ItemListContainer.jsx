import "./ItemListContainer.css"
import ItemList from "./ItemList/ItemList"
import itemProducts from "../mock/products"
import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom'


export default function ItemListContainer({greet}){
    const {categoryId} = useParams()
    const [products, setProducts] = useState([])

    useEffect(() => {
        const bringProducts = new Promise ((res, rej) =>{
                if(categoryId === undefined){
                    res(itemProducts)
                }else{
                    const itemCategory = itemProducts.filter(itemCat => {
                        return itemCat.category === categoryId
                    })
                    res(itemCategory)
                }
        })

        bringProducts.then((res) => setProducts(res))
        bringProducts.catch((error) => console.log(error))


    }, [categoryId])


    return(
     <div className="container">
        <ItemList items={products} />
     </div>
    )
}
