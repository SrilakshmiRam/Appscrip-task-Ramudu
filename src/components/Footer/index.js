import {IoIosArrowDown} from 'react-icons/io'
import {FcGoogle} from 'react-icons/fc'
import {FaApple, FaLinkedin} from 'react-icons/fa'
import {CiInstagram} from 'react-icons/ci'

import './index.css'

const Footer = () => (
  <>
    <div className="footer-container">
      <div className="other-details">
        <p className="text">mettā muse</p>
        <IoIosArrowDown className="text" />
      </div>
      <hr className="hr-rule" />
      <div className="other-details">
        <p className="firstknow-text">Quick Links</p>
        <IoIosArrowDown className="text" />
      </div>
      <hr className="hr-rule" />
      <div className="other-details">
        <p className="firstknow-text">Follow Us</p>
        <IoIosArrowDown className="text" />
      </div>
      <hr className="hr-rule" />
      <div className="mettamuse-accepted-payment-forms">
        <p className="text">mettā muse Accepts</p>
        <div className="payment-button-container">
          <button className="payment-button1">
            <FcGoogle className="payment-icon" />
            <p className="payment-text">Pay</p>
          </button>
          <button className="payment-button1">
            <p className="circle circle1"></p>
            <p className="circle circle2"></p>
          </button>
          <button className="payment-button1">
            <img
              src="https://res.cloudinary.com/ddiyemmt3/image/upload/v1733913874/Group_136191_wye7ts.png"
              className="payment-icon" alt='payment-icon'
            />
          </button>
          <button className="payment-button2">
            <img
              src="https://res.cloudinary.com/ddiyemmt3/image/upload/v1733913959/Amex_fjnzlb.png"
              className="payment-icon" alt='payment-icon'
            />
          </button>
          <button className="payment-button1">
            <FaApple className="payment-icon" />
            <p className="payment-text">Pay</p>
          </button>
          <button className="payment-button3">
            <img
              src="https://res.cloudinary.com/ddiyemmt3/image/upload/v1733914270/pay_aktdq8.png"
              className="payment-icon"  alt='payment-icon'
            />
          </button>
        </div>
      </div>
      <p className="footer-last">
        Copyright © 2023 mettamuse. All rights reserved.
      </p>
    </div>
    <div className="footer-containerfor-morethan-extrasmalldevices">
      <div className="response-container">
        <ul className="section-list-1">
          <li className="firstknow-text header">mettā muse</li>
          <li className="para-text header">About Us</li>
          <li className="para-text header">Stories</li>
          <li className="para-text header">Artisans</li>
          <li className="para-text header">Boutiques</li>
          <li className="para-text header">Contact Us</li>
          <li className="para-text header">EU Compliances Docs</li>
        </ul>
        <ul className="section-list-1">
          <li className="firstknow-text header">Quick Links</li>
          <li className="para-text header">Join/Login as a Seller</li>
          <li className="para-text header">Orders & Shipping</li>
          <li className="para-text header">Payment & Pricing</li>
          <li className="para-text header">Return & Refunds</li>
          <li className="para-text header">FAQs</li>
          <li className="para-text header">Privacy Policy</li>
          <li className="para-text header">Terms & Conditions</li>
        </ul>
        <div className="mettamuse-accepted-payment-forms">
          <p className="firstknow-text">Follow Us</p>
          <div className="insta-linkedins">
            <CiInstagram className="insta-icon" />
            <FaLinkedin className="linkedin-icon" />
          </div>
          <p className="text">mettā muse Accepts</p>
          <div className="payment-button-container">
            <button className="payment-button1">
              <FcGoogle className="payment-icon" />
              <p className="payment-text">Pay</p>
            </button>
            <button className="payment-button1">
              <p className="circle circle1"></p>
              <p className="circle circle2"></p>
            </button>
            <button className="payment-button1">
              <img
                src="https://res.cloudinary.com/ddiyemmt3/image/upload/v1733913874/Group_136191_wye7ts.png"
                className="payment-icon" alt='payment-icon'
              />
            </button>
            <button className="payment-button2">
              <img
                src="https://res.cloudinary.com/ddiyemmt3/image/upload/v1733913959/Amex_fjnzlb.png"
                className="payment-icon" alt='payment-icon'
              />
            </button>
            <button className="payment-button1">
              <FaApple className="payment-icon" />
              <p className="payment-text">Pay</p>
            </button>
            <button className="payment-button3">
              <img
                src="https://res.cloudinary.com/ddiyemmt3/image/upload/v1733914270/pay_aktdq8.png"
                className="payment-icon" alt='payment-icon'
              />
            </button>
          </div>
        </div>
      </div>
      <p className="footer-last">
        Copyright © 2023 mettamuse. All rights reserved.
      </p>
    </div>
  </>
)

export default Footer