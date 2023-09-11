import { useState,createContext } from "react";

export const CartContex=createContext({
    isCartOpen:false,
    setIsCartOpen:()=>{},
   
    
})

export const CartProvaider=({children})=>{

   const[isCartOpen,setIsCartOpen]=useState(false)
   

   return <CartContex.Provider value={{isCartOpen,setIsCartOpen}}>{children}</CartContex.Provider>
}
