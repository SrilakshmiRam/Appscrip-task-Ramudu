import {RxHamburgerMenu} from 'react-icons/rx'
import {CiSearch} from 'react-icons/ci'
import {IoIosHeartEmpty, IoIosArrowDown} from 'react-icons/io'
import {BiShoppingBag} from 'react-icons/bi'
import {TiUserOutline} from 'react-icons/ti'

import './index.css'

const Header = () => (
  <div className="response-header">
    <div className="header-container">
      <div className="hamburger-image">
        <RxHamburgerMenu className="icon show" />
        <img
          src="https://res.cloudinary.com/ddiyemmt3/image/upload/v1733895204/Logoram_xb0dmn.png"
          className="image"  alt='logo'
        />
      </div>
      <h1 className="logo">LOGO</h1>
      <ul className="icons-list">
        <li>
          <CiSearch className="icon" />
        </li>
        <li>
          <IoIosHeartEmpty className="icon" />
        </li>
        <li>
          <BiShoppingBag className="icon" />
        </li>
        <li className="responsive">
          <TiUserOutline className="icon" />
        </li>
        <li className="li-item responsive">
          <p className="text-eng">ENG</p>
          <IoIosArrowDown className="icon" />
        </li>
      </ul>
    </div>
    <ul className="sections-container">
      <li className="category-text">SHOP</li>
      <li className="category-text">SKILLS</li>
      <li className="category-text">STORIES</li>
      <li className="category-text">ABOUT</li>
      <li className="category-text">CONTACT US</li>
    </ul>
  </div>
)

export default Header