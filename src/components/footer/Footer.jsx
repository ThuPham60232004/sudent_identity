import React from 'react';
import './footer.css'; 
import { FaFacebookF,FaLinkedinIn,FaYoutube } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="container_footer">
     <div className="footer-col footer-about-us">
  <h4>
    <img src="./img/collection.png" alt="Company Logo" className="logo" /> FINTECH
  </h4>
  <p>
    We are a company that provides top-notch services in the field of web and mobile development.
    We strive to deliver the best quality for our clients.
  </p>
</div>
        <div className="footer-col footer-pages">
          <h4>Pages</h4>
          <ul>
            <li><a href="#">Prompts</a></li>
            <li><a href="#">Blogs</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
       <div className="footer-col footer-follow-us">
      <h4>Follow Us</h4>
        <ul>
          <li><a href="#"><FaFacebookF className='icon_footer'/> Facebook</a></li>
          <li><a href="#"><IoLogoInstagram className='icon_footer'/> Instagram</a></li>
          <li><a href="#"><FaLinkedinIn className='icon_footer'/> LinkedIn</a></li>
          <li><a href="#"><FaYoutube className='icon_footer'/> Youtube </a></li>
        </ul>
      </div>
           <div className="footer-col footer-company">
          <h4>Company</h4>
          <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Venture</a></li>
            <li><a href="#">Privacy policy</a></li>
            <li><a href="#">Term of service</a></li>
          </ul>
        </div>
        <div className="footer-col footer-stay-updated">
          <h4>Stay Updated</h4>
          <p>Join our newsletter to stay up to date on features and releases</p>
          <form>
          <div className="input-wrapper">
            <input type="email" placeholder="Enter your email" className="footer-input" />
          </div>
            <button type="submit" className="subscribe-btn">Subscribe</button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
