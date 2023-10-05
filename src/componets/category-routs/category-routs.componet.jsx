
import {CategoriesRouts,CategoriesTitle} from'./category-routs.styles.jsx'
import { useParams } from "react-router"

import { useEffect,useContext,useState } from "react"

import { CategoriesContext } from "../../contexts/categories-context/categories.contex"
import ProductItem from "../product-item/product-item.component"
import { hasPointerEvents } from '@testing-library/user-event/dist/utils'


const CategoryRouts=()=>{
    const {category}=useParams()
    const {categories}=useContext(CategoriesContext)
    const [products,setProducts]=useState([])
   
    /*
     []
     shop/heats
     [heatsArray]

    []
     shop/mens
     [mensArray]

    */

   

    useEffect(()=>{
      
    setProducts(categories[category])   

    },[category,categories])


    return(  
        <>
            <CategoriesTitle>{category.toLocaleUpperCase()}</CategoriesTitle>
            <br></br>
        <CategoriesRouts>
           {
             products&&products.map(product=>
                
            <ProductItem key={product.id} product={product}></ProductItem>)
           }  

        </CategoriesRouts>
        </>
    )
    

   
}



export default CategoryRouts