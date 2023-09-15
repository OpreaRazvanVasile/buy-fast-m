import { useState,createContext } from "react";

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
    setAddToCart:()=>{}
    

   
   
    
})

export const CartProvaider=({children})=>{

   const[isCartOpen,setIsCartOpen]=useState(false)
   const[cartItems,setCartItems]=useState([])
   const setAddToCart=(cartItems,product)=>{
    return setCartItems(addToCart(cartItems,product))

   }



   

  
  
   

   return <CartContex.Provider value={{
    isCartOpen,setIsCartOpen,cartItems,setAddToCart

}}>{children}</CartContex.Provider>
}
