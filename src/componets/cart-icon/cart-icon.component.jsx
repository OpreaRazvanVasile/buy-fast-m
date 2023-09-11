import {ReactComponent as ShoppingIcon} from   './shopping-bag.svg'
import './cart-icon.styles.scss'
const IconCart=({setCart})=>{
    console.log(setCart)

    return(
     <div onClick={setCart}  className='cart-icon-container'>
         <ShoppingIcon className='shopping-icon'>
         </ShoppingIcon>
         <span className='item-count'>0</span>
         

     
    </div>
    )
}
export default IconCart