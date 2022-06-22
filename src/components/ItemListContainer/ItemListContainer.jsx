import "./ItemListContainer.css"
import ItemCount from "./ItemCount/ItemCount"
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

    console.log(products)
    
    const onAdd = (quantity) =>{
        console.log(`You just bought ${quantity} units!`)
    }

    return(
     <div className="container">
        <ItemList items={products} />
        <ItemCount initial={1} stock={10} onAdd={onAdd} />
     </div>
    )
}
