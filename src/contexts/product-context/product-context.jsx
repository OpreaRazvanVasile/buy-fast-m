import { createContext,useState} from "react";
import productData from'./shop-data.json'



  
export const ProductsContext=createContext({
    products:[],
    setProducts:()=>{}
})

export const ProductsProvaider=({children})=>{
  const[products,setProducts] =useState(productData)
  
    return <ProductsContext.Provider value={{products,setProducts}}>{children}</ProductsContext.Provider>
}