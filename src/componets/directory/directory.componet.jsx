import React from "react"
import CategoryItem from "../category-item/category-item.componet"
import './directory.styles.scss'

const Directory = ({ categories }) => {

  return (
    <div className='directory-container'>
      {categories.map(category =>
        <CategoryItem category={category}></CategoryItem>

      )}
    </div>
  )
}

export default Directory

