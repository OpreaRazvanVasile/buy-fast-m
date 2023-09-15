import './cart-dropdown.styles.scss'

import {useContext} from 'react'
import { CartContex } from '../../contexts/cart-context/cart-context'
import CartItem from '../cart-item/cart-item'
import Button from '../button/button.componet'



const CartDropdown=()=>{
    const {cartItems}=useContext(CartContex)
    
  


    return (
      
        <div className='cart-dropdown-container'>
         <div className='cart-items' >
          {cartItems.map(item=><CartItem item={item}/>)}
          </div>
          <Button>Go To Checkout</Button>
          </div>

          
    )

}

export default CartDropdown