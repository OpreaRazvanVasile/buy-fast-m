import { createContext,useState,useEffect} from "react";

import { addCollectionToDb } from "../../utils/fierbase/fierbase.utils.js";
// import {SHOP_DATA} from "./shop-data.js"

  
export const ProductsContext=createContext({
    products:[],
    setProducts:()=>{},
    
})

export const ProductsProvaider=({children})=>{

  const[products,setProducts] =useState([])

  // useEffect(()=>{
  //   addCollectionToDb('categories',SHOP_DATA)
  // }
  // ,[])
  

    return <ProductsContext.Provider value={{products,setProducts}}>{children}</ProductsContext.Provider>
}