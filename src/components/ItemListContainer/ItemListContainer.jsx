import "./ItemListContainer.css"
import ItemCount from "./ItemCount/ItemCount"
import ItemList from "./ItemList/ItemList"
import itemProducts from "../mock/products"
import { useState, useEffect } from "react"


export default function ItemListContainer({greet}){

    const [products, setProducts] = useState([])

    useEffect(() => {
        const bringProducts = new Promise ((res, rej) =>{
            setTimeout(() => {
                res(itemProducts)
            }, 2000)
        })

        bringProducts.then((res) => setProducts(res))
        bringProducts.catch((error) => console.log(error))


    }, [])

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