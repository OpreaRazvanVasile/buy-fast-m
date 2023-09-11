import Button from "../button/button.componet"
import './product-item.scss'

const ProductItem=({product})=>{
  const {name,imageUrl,price}=product
    return (
        <div className="product-card-container">
            <img src={imageUrl} alt={name}></img>
            <div className="footer">
             <span className="name">{name}</span>    
            <span className="price">{price}</span>
            </div>
            
            <Button typeButton='inverted'>Add to Card</Button> 

        </div>
    )
}


export default ProductItem