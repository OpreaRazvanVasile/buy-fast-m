
import './shop.styles.scss'
import { useContext } from 'react'
import { CategoriesContext } from '../../contexts/categories-context/categories.contex'
import CategoryPreview from '../../componets/category-preview/category-preview.component'
import { Fragment } from 'react'

const Shop=()=>{

   const {categories}=useContext(CategoriesContext)
   const categoriesEntries=Object.entries(categories)

      
        return(
            <Fragment>
          {categoriesEntries.map(([title,value])=><CategoryPreview title={title} value={value}></CategoryPreview>)}
            </Fragment>
        )
     
       
}
export default Shop