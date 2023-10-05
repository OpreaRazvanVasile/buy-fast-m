import React, { useState } from "react"
import { useNavigate } from "react-router"

import {ItemBody,ItemContainer,BackgroundImage} from'./directory-item.styles.jsx'



const DirectoryItem = ({ category }) => {
   
    
   const nav=useNavigate()
    const categoryNavigation=()=>{
       return nav(`/shop/${category.title}`)
    }
    const shopNavigation=()=>{
       return nav('/shop')
    }
     console.log(category)
  
    return (
        <ItemContainer>
            <BackgroundImage style={{backgroundImage:`url(${category.imageUrl})`}}></BackgroundImage>
            
             
            <ItemBody>
                <h2 onClick={categoryNavigation}>{category.title.toUpperCase()}</h2>
                <p onClick={shopNavigation}>Shop Now</p>
            </ItemBody>

        </ItemContainer>
    )
}
export default DirectoryItem