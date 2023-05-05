import React from 'react'
import './footer.css'
import { Link } from "react-router-dom";

function siteClick(event) {
  window.scrollTo(0, 0);
}

function Footer() {
//  const siteClick = (e) =>{
//   e.preventDefault();
//  }
  return (
    <>
      <div className="footer">
        <div className="footer-item">
          <p className="footer-title">Kingsman Services</p>
          <p className="footer-desc">Boring Canal road, Near Rajapool, Patna-<br />800001<br /> Phone: +91 9102960934<br />email:info@kingsman.services</p>
          <div className="social-div">
            <a target="_blank" rel="noreferrer" href="https://www.instagram.com/kingsmanspace_services/">
          <img className="social-icon" src={require('./instagram.png')} alt="instagram" />
          </a>
          <a target='_blank' rel="noreferrer" href="https://www.facebook.com/kingsmansservices">
          <img className="social-icon" src={require('./facebook.png')} alt="facebook"/>
          </a>
          <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/company/official-kingsmanservices/">
          <img className="social-icon" src={require('./linkedin.png')} alt="linkedin"/>
          </a>
          <a target="_blank" rel="noreferrer" href="https://twitter.com/Kingsmanservics">
          <img className="social-icon" src={require('./twitter.png')} alt="twitter"/>
          </a>
          </div>
        </div>
        <div className="footer-item">
          <p className="footer-title">Useful Links</p>
          <Link onClick={siteClick} className="web-link card-link" to="/">
            <p className="footer-link">⇢&nbsp; Home</p>
          </Link>
          <Link onClick={siteClick} className="web-link card-link" to="/aboutus">
            <p className="footer-link">⇢&nbsp; About Us</p>
          </Link>
          <Link onClick={siteClick} className="web-link card-link" to="/blog">
            <p className="footer-link">⇢&nbsp; Blog</p>
          </Link>
          <Link onClick={siteClick} className="web-link card-link" to="/career">
            <p className="footer-link">⇢&nbsp; Career</p>
          </Link>
          <Link onClick={siteClick} className="web-link card-link" to="/contact">
            <p className="footer-link">⇢&nbsp; Contact Us</p>
          </Link>
        </div>
        <div className="footer-item">
          <Link onClick={siteClick} className="web-link card-link" to="/digital-marketing-services">
            <p className="footer-title">Our Services</p>
          </Link>
          <Link onClick={siteClick} className="web-link card-link" to="/services/digital-marketing-agency">
            <p className="footer-link">⇢&nbsp; Digital Marketing</p>
          </Link>
          <Link onClick={siteClick} className="web-link card-link" to="/services/web-development">
            <p className="footer-link">⇢&nbsp; Web Development</p>
          </Link>
          <Link onClick={siteClick} className="web-link card-link" to="/services/ecommerce-services">
            <p className="footer-link">⇢&nbsp; Ecommerce Services</p>
          </Link>
          <Link onClick={siteClick} className="web-link card-link" to="/services/ppc-marketing-agency-in-India">
            <p className="footer-link">⇢&nbsp; Pay Per Click</p>
          </Link>
          <Link onClick={siteClick} className="web-link card-link" to="/services/social-media-marketing-agency-in-India">
            <p className="footer-link">⇢&nbsp; Social Media Marketing</p>
          </Link>
        </div>
        <div className="footer-item">
          <div >
            <p className="footer-title">Find Us</p>
            <iframe title="map" className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14390.543375836356!2d85.11680485!3d25.617014249999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed59ecbf55b8db%3A0x9c199f753f5c530b!2sKingsman%20Space%20%26%20Services%20Pvt.%20Ltd.%20%7C%20Digital%20Marketing%20%7C%20Professional%20SEO%20Services%20%7C%20PPC%20Agency%20%7C%20SMMA%20%7C%20Web%20Development%20%7C!5e0!3m2!1sen!2sin!4v1682067480905!5m2!1sen!2sin" allowfullscreen="" loading="auto" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <span></span>
        </div>

      </div>
      <div className='footer-lower'>
        <p className="footer-lower-content">© Copyright <span className="km">Kingsman Services</span>. All Rights Reserved | <span><Link onClick={siteClick} className="site" to="/sitemap">Sitemap</Link></span></p>
        <p className="footer-lower-content">Designed by <span className="km">Kingsman Services</span> </p>
      </div>
    </>
  )
}

export default Footer