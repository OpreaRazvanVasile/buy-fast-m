import './cart-dropdown.styles.scss'
import Button from '../button/button.componet'
import { Fragment } from 'react'


const CartDropdown=()=>{



    return (
      
        <div className='cart-dropdown-container'>
         <div className='cart-items' ></div>
         <Button>Checkout</Button>
        </div>
     
    )

}

export default CartDropdown