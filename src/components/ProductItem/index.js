import {useState} from 'react'
import {IoIosHeartEmpty} from 'react-icons/io'
import { IoIosHeart } from "react-icons/io";

import './index.css'

const ProductItem = props => {
  const {itemDetails} = props
  const {title, image} = itemDetails
  const [isLike,setIsLike]=useState(false)


  const onclickLike=()=>{
    setIsLike(prevState=>!prevState)
  }


  return (
    <li className="product-item">
      <img src={image} className="item-image" alt='product-image' />
      <div className="product-heart-container">
        <p className="product">{title}</p>
        {isLike ? <IoIosHeart className="active-icon" onClick={onclickLike} /> :
        <IoIosHeartEmpty className="icon-heart" onClick={onclickLike} />
         }
      </div>
      <a href="https://example.com" target="_blank" rel="noopener noreferrer" className="navigation-link">
        <span className="sign-in">Sign in</span> or Create an account to see
        pricing
      </a>
    </li>
  )
}

export default ProductItem