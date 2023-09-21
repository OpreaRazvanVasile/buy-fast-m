
import './shop.styles.scss'
import ProductItem from '../../componets/product-item/product-item'
import { useContext } from 'react'
import { ProductsContext } from '../../contexts/product-context/product-context'

const Shop=()=>{

    const{products}=useContext(ProductsContext)
  

    
 
    return (
        <div className='products-container'>
            
            
            {products.map(product=>{
                 
                 
             return (<ProductItem product={product}/>)
                  
                  })

              

                
            }
                  
            
             
            
      
                
                
        
        </div>
    )
}
export default Shop