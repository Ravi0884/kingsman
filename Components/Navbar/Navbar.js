import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import "./Navbar.css";


function Navbar() {
  const buttonRef = useRef(null);
  function siteClick() {
    window.scrollTo(0, 0);
    buttonRef.current.click();
  }
  const [showDropdown, setShowDropdown] = useState(false);
  const handleMouseEnter = () => {
    setShowDropdown(true);
  };
  const handleMouseLeave = () => {
    setShowDropdown(false);
  };
 return (
    <>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
          crossorigin="anonymous"
        ></link>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js"
          integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
          crossorigin="anonymous"
        ></script>
      </Helmet>
      <nav className="navbar navbar-expand-lg navbar-light bg-black ">
        <div className="dummy">
          <a className="navbar-brand" href="/">
            <img className="logo" src={require("./logo.png")} alt="lo" />
          </a>
          <button
            className="navbar-toggler"
            ref={buttonRef}
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link onClick={siteClick}  className="nav-link" to="/">
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link onClick={siteClick} className="nav-link" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show"to="/aboutus">
                ABOUT US
              </Link>
            </li>
            <li
              className="nav-item dropdown"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Link onClick={siteClick} className="nav-link" to="/digital-marketing-services">
                OUR SERVICES
              </Link>
              <div
                className={`dropdown-menu ${showDropdown ? "show" : ""}`}
                aria-labelledby="navbarDropdown"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <Link onClick={siteClick} className="dropdown-item" to="/services/digital-marketing-agency">
                  Digital Marketing
                </Link>
                <Link onClick={siteClick} className="dropdown-item" to="/services/web-development">
                  {" "}
                  Web Development
                </Link>
                <Link onClick={siteClick} className="dropdown-item" to="/services/ecommerce-services">
                  Ecommerce Services
                </Link>
              </div>
            </li>
            <li className="nav-item">
            <Link onClick={siteClick} className="nav-link" to="/blog">
                BlOG
              </Link>
            </li>
            <li className="nav-item">
            <Link onClick={siteClick} className="nav-link" to="/why-kingsman">
                WHY KINGSMAN?
             </Link>
            </li>
            <li className="nav-item">
              <Link onClick={siteClick} className="nav-link" to="/career">
                CAREER
              </Link>
            </li>
            <li className="nav-item">
              <Link onClick={siteClick} className="nav-link" to="/faq">
                FAQ
              </Link>
            </li>
            <li className="nav-item">
              <Link onClick={siteClick}  className="nav-link" to="/contact">
                CONTACT US
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
