import {IoIosHeartEmpty} from 'react-icons/io'

import './index.css'

const ProductItem = props => {
  const {itemDetails} = props
  const {title, image} = itemDetails
  return (
    <li className="product-item">
      <img src={image} className="item-image" alt='product-image' />
      <div className="product-heart-container">
        <h1 className="product">{title}</h1>
        <IoIosHeartEmpty className="icon" />
      </div>
      <a href="https://example.com" target="_blank" rel="noopener noreferrer" className="navigation-link">
        <span className="sign-in">Sign in</span> or Create an account to see
        pricing
      </a>
    </li>
  )
}

export default ProductItem