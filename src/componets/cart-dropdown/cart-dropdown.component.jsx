import './cart-dropdown.styles.scss'
import Button from '../button/button.componet'
import {useContext} from 'react'
import { CartContex } from '../../contexts/cart-context/cart-context'



const CartDropdown=()=>{
    const {cartItems}=useContext(CartContex)
    console.log(cartItems)
  


    return (
      
        <div className='cart-dropdown-container'>
         <div className='cart-items' >
          {cartItems.map(intem=><div key={intem.id}>
            <h2>{intem.name}</h2>
            <p>{intem.quantity}</p> 

          </div>)}

         </div>
         <Button>Checkout</Button>
        </div>
     
    )

}

export default CartDropdown