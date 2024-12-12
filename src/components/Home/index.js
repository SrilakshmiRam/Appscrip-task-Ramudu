import {useState, useEffect} from 'react'

import {IoIosArrowDown} from 'react-icons/io'

import Header from '../Header'
import ProductItem from '../ProductItem'
import Footer from '../Footer'

import './index.css'

const Home = () => {
  const [productsList, setProducts] = useState([])

  useEffect(() => {
    const getProductsData = async () => {
      try {
        const url = 'https://fakestoreapi.com/products'
        const options = {
          method: 'GET',
        }
        const response = await fetch(url, options)

        if (response.ok) {
          const data = await response.json()
          setProducts(data)
          console.log('Fetched data:', data)
        } else {
          console.error(
            'Error during request:',
            response.status,
            response.statusText,
          )
        }
      } catch (error) {
        console.error('Network error or other issue:', error)
      }
    }

    getProductsData()
  }, [])

  return (
    <>
      <div className="home-container">
        <Header />
        <div className="home-shop">
          <span className="home-text">Home</span>
          <span className="shop-text">Shop</span>
        </div>
        <div className="text-conatiner">
          <h2 className="home-title">DISCOVER OUR PRODUCTS</h2>
          <p className="description">
            Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
            scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
            dolor.
          </p>
        </div>
        <div className="filter-recommended">
          <div className="hide-filter">
            <p className="number-items">3425 Items</p>
            <div className="recommended-icon-show">
              <IoIosArrowDown />
              <p className="showfilter">SHOW FILTER</p>
            </div>
          </div>
          <p className="filter">FILTER</p>
          <div className="recommended-icon">
            <p className="recommended">RECOMMENDED</p>
            <IoIosArrowDown />
          </div>
        </div>
        <div className="home-products-section">
          <div className="sidebar">
            <div className="input-checkbox-container">
              <input type="checkbox" id="checkbox" />
              <label htmlFor="checkbox">Customizble</label>
            </div>
            <ul className="categories-list">
              <li className="category-item">
                <div className="all-container">
                  <p className="category-item-text">IDEAL FOR</p>
                  <span className="category-span-text">All</span>
                </div>
                <IoIosArrowDown className="icon" />
              </li>
              <li>
                <hr className="hr-rule" />
              </li>
              <li className="category-item">
                <div className="all-container">
                  <p className="category-item-text">OCCASION</p>
                  <span className="category-span-text">All</span>
                </div>
                <IoIosArrowDown className="icon" />
              </li>
              <li>
                <hr className="hr-rule" />
              </li>
              <li className="category-item">
                <div className="all-container">
                  <p className="category-item-text">WORK</p>
                  <span className="category-span-text">All</span>
                </div>
                <IoIosArrowDown className="icon" />
              </li>
              <li>
                <hr className="hr-rule" />
              </li>
              <li className="category-item">
                <div className="all-container">
                  <p className="category-item-text">FACBRIC</p>
                  <span className="category-span-text">All</span>
                </div>
                <IoIosArrowDown className="icon" />
              </li>
              <li>
                <hr className="hr-rule" />
              </li>
              <li className="category-item">
                <div className="all-container">
                  <p className="category-item-text">SEGMENT</p>
                  <span className="category-span-text">All</span>
                </div>
                <IoIosArrowDown className="icon" />
              </li>
              <li>
                <hr className="hr-rule" />
              </li>
              <li className="category-item">
                <div className="all-container">
                  <p className="category-item-text">SUITABLE FOR</p>
                  <span className="category-span-text">All</span>
                </div>
                <IoIosArrowDown className="icon" />
              </li>
              <li>
                <hr className="hr-rule" />
              </li>
              <li className="category-item">
                <div className="all-container">
                  <p className="category-item-text">RAW MATERIALS</p>
                  <span className="category-span-text">All</span>
                </div>
                <IoIosArrowDown className="icon" />
              </li>
              <li>
                <hr className="hr-rule" />
              </li>
              <li className="category-item">
                <div className="all-container">
                  <p className="category-item-text">PATTERN</p>
                  <span className="category-span-text">All</span>
                </div>
                <IoIosArrowDown className="icon" />
              </li>
              <li>
                <hr className="hr-rule" />
              </li>
            </ul>
          </div>
          <ul className="products-lists">
            {productsList.map(each => (
              <ProductItem itemDetails={each} key={each.id} />
            ))}
          </ul>
        </div>
      </div>
      <div className="details-container">
        <h1 className="firstknow-text">Be the first to know</h1>
        <p className="para-text">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. this is simply dummy text.
        </p>
        <div className="input-button-container">
          <input
            type="email"
            placeholder="Enter your e-mail..."
            className="input-text"
          />
          <button className="subscribe-button">SUBSCRIBE</button>
        </div>
        <hr className="hr-rule" />
        <p className="firstknow-text">CALL US</p>
        <div className="number-email">
          <p className="text">+44 221 133 5360</p>
          <img src="https://res.cloudinary.com/ddiyemmt3/image/upload/v1733905257/Star_1_ajzdxc.png" alt='star' />
          <p className="text">customercare@mettamuse.com</p>
        </div>
        <hr className="hr-rule" />
        <p className="firstknow-text">CURRENCY</p>
        <div className="country-currency">
          <img
            src="https://res.cloudinary.com/ddiyemmt3/image/upload/v1733905690/United_States_of_America_US_xuxe1u.png"
            alt="US"
          />
          <img
            src="https://res.cloudinary.com/ddiyemmt3/image/upload/v1733905257/Star_1_ajzdxc.png"
            alt="star"
            className="star"
          />
          <span className="para-text">USD</span>
        </div>
        <hr className="line" />
        <Footer />
      </div>
      <div className="details-container-for-morethan-extra-small">
        <div className="section-1">
          <div className="input-subscribe-container">
            <h1 className="firstknow-text">Be the first to know</h1>
            <p className="para-text">Sign up for updates from mettā muse.</p>
            <div className="input-button-container">
              <input
                type="email"
                placeholder="Enter your e-mail..."
                className="input-text"
              />
              <button className="subscribe-button">SUBSCRIBE</button>
            </div>
          </div>
          <div>
            <p className="firstknow-text">CONTACT US</p>
            <div className="number-email-1">
              <p className="text">+44 221 133 5360</p>
              <p className="text">customercare@mettamuse.com</p>
            </div>
            <p className="firstknow-text">CURRENCY</p>
            <div className="country-currency">
              <img
                src="https://res.cloudinary.com/ddiyemmt3/image/upload/v1733905690/United_States_of_America_US_xuxe1u.png"
                alt="US"
              />
              <img
                src="https://res.cloudinary.com/ddiyemmt3/image/upload/v1733905257/Star_1_ajzdxc.png"
                alt="star"
                className="star"
              />
              <span className="para-text">USD</span>
            </div>
            <p className="text">
              Transactions will be completed in Euros and a currency reference
              is available on hover.
            </p>
          </div>
        </div>
        <hr className="hr-rule" />
        <Footer />
      </div>
    </>
  )
}

export default Home