import { useState,createContext,useEffect } from "react";

const addToCart=(cartItems,product)=>{
       const existingCardItem=cartItems.find(item=>item.id===product.id)
     
     if(existingCardItem){
        return cartItems.map(item=>{
           if(item.id===product.id){
            item.quantity+=1
            return item
           }
           else{
             return item
           }
       
        }
        
           
       )
    }
      
     return [...cartItems,{...product,quantity:1}]
     

   


 }
export const CartContex=createContext({
    isCartOpen:false,
    setIsCartOpen:()=>{},
    cartItems:[],
    setCartItem:()=>{},
    setAddToCart:()=>{},
    totalQuantity:0,
    setTotalQuantity:()=>{},
    
    

   
   
    
})

export const CartProvaider=({children})=>{

   const[isCartOpen,setIsCartOpen]=useState(false)
   const[cartItems,setCartItems]=useState([])
   const [totalQuantity,setTotalQuantity]=useState(0)
 

   useEffect(()=>{
      setTotalQuantity(()=>{
         return cartItems.reduce((acc,item)=>acc+item.quantity,0)

      })

   },[cartItems])
   const setAddToCart=(cartItems,product)=>{
    return setCartItems(addToCart(cartItems,product))
    
  
   }


   return <CartContex.Provider value={{
    isCartOpen,setIsCartOpen,cartItems,setAddToCart,totalQuantity

}}>{children}</CartContex.Provider>
}
