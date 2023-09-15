import './cart-item.styles.scss'

const CartItem=({item})=>{
  console.log(item)
const{id,name,imageUrl,quantity,price}=item

  return ( <div key={id} className="cart-item-container"> 
  
   <img src={imageUrl} alt={name}></img>
   <div className="item-details">
    <span className="name">{name}</span>
    <span className="quantity">{quantity}</span>
    <span className="price">{price*quantity}</span>
    </div> 

  </div>)
}
export default CartItem