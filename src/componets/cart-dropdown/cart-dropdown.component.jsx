

import {useContext} from 'react'
import { CartContex } from '../../contexts/cart-context/cart-context'
import CartItem from '../cart-item/cart-item.component'
import { useNavigate } from 'react-router'
import { CartDropdownConatiner,ButtonStyle,CartItems } from './cart-dropdown.styles'



const CartDropdown=()=>{
    const {cartItems,setIsCartOpen}=useContext(CartContex)
    const checkoutNavigation=useNavigate()
    const goToCheckoutHandler=()=>{
        setIsCartOpen(false)
        checkoutNavigation('/checkout')
    }
    
  


    return (
      
        <CartDropdownConatiner>
         <CartItems>
          {cartItems.map(item=><CartItem key={item.id} item={item}/>)}
          </CartItems>
          <ButtonStyle onClick={goToCheckoutHandler}>Go To Checkout</ButtonStyle>
          </CartDropdownConatiner>

          
    )

}

export default CartDropdown