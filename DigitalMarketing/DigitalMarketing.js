import React, { useEffect } from "react";
import "./digitalmarketing.css";
import { Link } from "react-router-dom";
import AOS from 'aos'
import 'aos/dist/aos.css'

function siteClick() {
  window.scrollTo(0, 0);
}

function DigitalMarketing() {
  useEffect(()=>{
    AOS.init({duration:2000})
  },[])
  return (
    <>
      <div className="digital-marketing">
        <p data-aos='fade-down' className="team-heading abt-cont">
          <div class="container ">
            <div class="row">
              <div class="col-md-12 text-center">
                <p class="animate-charcter"> DIGITAL MARKETING AGENCY</p>
              </div>
            </div>
          </div>
        </p>
        <p className="digital-desc">
          The goal is to fetch out and engage with potential customers.
          <br />
          By using the right skill, you can reach out to those users that can
          easily convert into potential customers.
        </p>
        <div className="digital-cards">
          <Link onClick={siteClick} className="web-link card-link" to="/services/digital-marketing-agency-in-India">
            <div className="digital-card">
              <img
                className="digital-card-img"
                src={require("./digital.png")}
                alt="Digital Marketing agency in India-Kingsman-Services"
              />
              <p className="digital-card-title">Digital Marketing</p>
              <p className="digital-card-desc">
                The goal is to fetch out and engage with potential customers. By
                using the right skill, you can reach out to those users that can
                easily convert into potential customers.
              </p>
              <a className="digital-btn" href="/">
                Read More
              </a>
            </div>
          </Link>

          <Link onClick={siteClick} className="web-link card-link" to="/services/social-media-marketing-agency-in-India">
            <div className="digital-card">
              <img
                className="digital-card-img"
                src={require("./social-media.png")}
                alt="Social Media Marketing-Kingsman-Services"
              />
              <p className="digital-card-title">Social Media Marketing</p>
              <p className="digital-card-desc">
                The social media platform is so powerful that it can engage tons
                of traffic in a limited period. Here, our experts focus all the
                media platforms to achieve your branding goals.
              </p>
              <a className="digital-btn" href="/">
                Read More
              </a>
            </div>
          </Link>

          <Link onClick={siteClick} className="web-link card-link" to="/services/ppc-marketing-agency-in-India">
            <div className="digital-card">
              <img
                className="digital-card-img"
                src={require("./performance.png")}
                alt="PPC digital marketing in India-Kingsman-Services"
              />
              <p className="digital-card-title">PPC</p>
              <p className="digital-card-desc">
                Pay-per-click is the online model where you pay each time your
                ad is clicked. These campaigns involve money and if you are not
                getting fulfilling results then what’s the point?
              </p>
              <a className="digital-btn" href="/">
                Read More
              </a>
            </div>
          </Link>

          <Link onClick={siteClick} className="web-link card-link" to="/services/seo-services-in-India">
            <div className="digital-card">
              <img
                className="digital-card-img"
                src={require("./seo.png")}
                alt="Seo digital marketing in India-Kingsman-Services"
              />
              <p className="digital-card-title">SEO</p>
              <p className="digital-card-desc">
                The main purpose of SEO is to rank your website on search engine
                landing page. By applying relevant strategic approaches it
                become easy to achieve the required results
              </p>
              <a className="digital-btn" href="/">
                Read More
              </a>
            </div>
          </Link>

          <Link onClick={siteClick} className="web-link card-link" to="/services/email-marketing-agency-in-India">
            <div className="digital-card">
              <img
                className="digital-card-img"
                src={require("./email.png")}
                alt="Email Marketing in India-Kingsman-Services"
              />
              <p className="digital-card-title">Email Marketing</p>
              <p className="digital-card-desc">
                Email marketing is one of the best and most cost-effective ways
                to fuel conversion rates by reaching out to the targeted
                audience and by identifying genuine and interested users.
              </p>
              <a className="digital-btn" href="/">
                Read More
              </a>
            </div>
          </Link>

          <Link onClick={siteClick} className="web-link card-link" to="/services/local-seo-agency-in-India">
            <div className="digital-card">
              <img
                className="digital-card-img"
                src={require("./local-seo.png")}
                alt="Local SEO Services in India-Kingsman-Services"
              />
              <p className="digital-card-title">Local SEO Services</p>
              <p className="digital-card-desc">
                Google registration is a must to give an online presence and
                unique identity to your brand. It is a way to provide primary
                and crucial information to the searchers.
              </p>
              <a className="digital-btn" href="/">
                Read More
              </a>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default DigitalMarketing;
