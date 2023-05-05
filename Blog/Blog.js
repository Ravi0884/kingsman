import React from 'react'
import './blog.css'

function Blog() {
 
  return (
    <>
     <div className="services-div">
     <div className="faq">
          <h1 className="team-heading">
            <div class="container">
              <div class="row">
                <div class="col-md-12 text-center">
                  <p class="animate-charcter"> BLOG</p>
                </div>
              </div>
            </div>
          </h1>
        </div>
        <div className="blog-container">
          <div className="blog-details">
            <div className="blog-element">
              <img className="blog-img" src={require('../WebDevlopmentServices/web-design.png')} alt="Web development-Kingsman-Services" />
              <div className="blog-internal-item">
                <p className="blog-date">July 7, 2017</p>
                <p className="blog-heading">What does a web design and development company do?</p>
                <p className="blog-desc">A website design and development company will help you to develop a creative website design that fulfills your specific requirements. They will help you in designing the website, choosing the right domain and hosting, and setting up all the necessary features. They are also responsible for website security and maintenance.</p>
              </div>
            </div>
            <div className="blog-element">
              <img className="blog-img" src={require('../EcommerceServices/ecommerce-solution.png')} alt="Ecommerce Services-Kingsman-Services" />
              <div className="blog-internal-item">
                <p className="blog-date">July 7, 2017</p>
                <p className="blog-heading">What is E-commerce Business?</p>
                <p className="blog-desc">Trading your products and services online is what an E-commerce business is all about. It allows you to build an online store for the goods and services you offer to sell them over the internet.</p>
              </div>
            </div>
            <div className="blog-element">
              <img className="blog-img" src={require('../DigitalMarketingServices/digital.png')} alt="Digital marketing agency in India-Kingsman-Services" />
              <div className="blog-internal-item">
                <p className="blog-date">July 7, 2017</p>
                <p className="blog-heading">What’s a full service digital marketing agency?</p>
                <p className="blog-desc">A full-service digital marketing agency is a company that provides a comprehensive range of digital marketing services to its clients. They can provide a comprehensive and cohesive marketing strategy for its clients, helping them achieve their business goals in the digital space.</p>
              </div>
            </div>

          </div>
          <div className="top-blog">
                <p className="top-blog-heading">TOP BLOG</p>
                <div className="top-blog-items">
                <img className="top-blog-img" src={require('../WebDevlopmentServices/web-design.png')} alt="Web development-Kingsman-Services" />
                <p className="top-blog-desc">What does a web design and development company do?</p>
                </div>
                <div className="top-blog-items">
                <img className="top-blog-img" src={require('../EcommerceServices/ecommerce-solution.png')} alt="Ecommerce Services-Kingsman-Services" />
                <p className="top-blog-desc">What is E-commerce Business?</p>
                </div>
                <div className="top-blog-items">
                <img className="top-blog-img" src={require('../DigitalMarketingServices/digital.png')} alt="Digital marketing agency in India-Kingsman-Services" />
                <p className="top-blog-desc">What’s a full service digital marketing agency?</p>
                </div>
          </div>
        </div>
     </div>
    </>
  )
}

export default Blog