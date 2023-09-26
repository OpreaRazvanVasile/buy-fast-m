import React from "react"
import './category-item.styles.scss'
import { Link } from "react-router-dom"

const CategoryItem = ({ category }) => {
   

    return (
        <div className='category-container'>
            <div className="background-image" style={{
                backgroundImage: `url(${category.imageUrl})`
            }}></div>

             
            <Link to={`/shop/${category.title}`} className='category-body-container'>
                <h2>{category.title}</h2>
                <p>Shop Now</p>
            </Link>

        </div >
    )
}
export default CategoryItem