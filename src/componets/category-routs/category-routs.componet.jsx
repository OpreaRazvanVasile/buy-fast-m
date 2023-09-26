
import './category-routs.styles.scss'
import { useParams } from "react-router"

import { useEffect,useContext,useState } from "react"

import { CategoriesContext } from "../../contexts/categories-context/categories.contex"
import ProductItem from "../product-item/product-item.component"
import CartItem from '../cart-item/cart-item.component'

const CategoryRouts=()=>{
    const {category}=useParams()
    const {categories}=useContext(CategoriesContext)
    const [products,setProducts]=useState([])
    
   

    useEffect(()=>{
          
    setProducts(categories[category])   

    },[categories,category])


    return(
        <div className="categoires-routes-container">
           {
            products&&products.map(product=><ProductItem product={product}></ProductItem>)
           }  

        </div>
    )
    

   
}



export default CategoryRouts