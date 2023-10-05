import {CheckoutItemContainer,
  ImgContainer,
  Image,
  SpanName,
  QuantityContainer,
  Arrow,
  SpanQuantity,
  SpanPrice,
  SpantTotalPrice,
RemoveButton} from "./checkout-item.styles.jsx"
import { CartContex } from '../../contexts/cart-context/cart-context'
import { useContext } from 'react'

const CheckoutItem=({item})=>{
    const{id,name,imageUrl,quantity,price}=item
    const {cartItems,setAddToCart,setRemoveCartItem,setRemoveItemOnCLick}=useContext(CartContex)

    const incrementHandler=()=>setAddToCart(cartItems,item)
    const decrementHandler=()=>setRemoveCartItem(cartItems,item)
    const removeItemHandler=()=>setRemoveItemOnCLick(cartItems,item)
    return (
    <CheckoutItemContainer key={id}>
         <ImgContainer>
            <Image src={imageUrl} alt={`${name}`}></Image>
            </ImgContainer>   
           
       <SpanName >{name}</SpanName>
       <QuantityContainer>
       <Arrow onClick={decrementHandler}>&#10094;
       </Arrow>
       <SpanQuantity>{quantity}</SpanQuantity>
       <Arrow onClick={incrementHandler} >&#10095;</Arrow>
       </QuantityContainer>
       <SpanPrice> {price}</SpanPrice>
       <SpantTotalPrice>{price*quantity}</SpantTotalPrice>
       <RemoveButton onClick={removeItemHandler}>&#10006;</RemoveButton>

     </CheckoutItemContainer>
    )
}
export default CheckoutItem