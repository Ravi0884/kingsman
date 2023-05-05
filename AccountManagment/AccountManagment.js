import React, { useState } from 'react'
import { Collapse } from "antd";
import axios from 'axios';

function AccountManagment() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [mobile, setMobile] = useState();
  const [requirement, setReqirement] = useState();
  const { Panel } = Collapse;
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleAccount = async (event) => {
    event.preventDefault();
    
    if (email !== "" && mobile.length===10 && name !== "") {
      setSuccess(true)
      const parsedData = {
        name: name,
        mobile: mobile,
        email: email,
        message: requirement,
        catageroy:"Account Managment"
      }
      await axios.post("http://localhost:8000/api/ecommerce", parsedData).then((res) => {
      }).catch(function (error) {
        console.log(error);
      })
      setName("")
    setMobile("")
    setEmail("")
    setReqirement("")
    }else{
      setError(true)
      setTimeout(() => {
        setError(false)
      },2000)
    }
    
  }
  return (
    <>
    <div className={success ? "success-hide" : "success-show"}>
        <p onClick={() => setSuccess(false)} className="cross">X</p>
        <img className="success-image" src={require("../RateCard/thanks.png")} alt="thanks pic" />
        <div className="success-desc">
          <p className="success-title">Check your mailbox, please.</p>
          <p className="success-title2">You might have received the mail with the subject line - <span className="success-bold">“ Kingsman Services ”</span></p>
          <p className="success-title2">We will keep your information safe. Feel free to contact us with any questions at<br /><span className="success-bold">info@kingsman.services</span> </p>
        </div>
      </div>
      <div className="services-div">
        <div className="digital-services">
          <div className="about-digital-services">
            <h1 className="title">eCommerce Account Management Services India</h1>
            <p className="description-title">
              Get full account management for your brand and increase your ROI.
            </p>
            <p className="description">
              If you are looking to sell your product online then our team at Seller Interactive will provide you with a comprehensive approach to handling Amazon support, optimizing customer service experience, and protecting your seller account health in all aspects. Also will help you to set up an amazon account for you to get lots of orders.
            </p>
            <button class="btn">Explore Account Managment Packages</button>
          </div>
          <form class="contact-form">
            <p class="contact-form-title">Get in Touch</p>
            <lebel htmlFor="name"></lebel>
            <input
              class="form-input"
              name="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your Name"
            />
            <lebel htmlFor="email"></lebel>
            <input
              class="form-input"
              name="email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your Email"
            />
            <lebel htmlFor="mobile"></lebel>
            <input
              class="form-input"
              name="mobile"
              type="number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              placeholder="Enter your Mobile Number"
            />
            <p class="contact-form-ask">
              How soon do you want to start the project?*
            </p>
            <lebel htmlFor="duration"></lebel>
            <select class="form-input" name="duration" id="lang">
              <option value="week">Within a Weeks</option>
              <option value="month">Within a Month</option>
            </select>
            <lebel htmlFor="requirement"></lebel>
            <input
              class="form-input"
              name="requirement"
              type="text"
              value={requirement}
              onChange={(e) => setReqirement(e.target.value)}
              placeholder="Share Your Requirement"
            />
            <button onClick={handleAccount} class="btn sbmt-btn">Submit</button>
            <p className={error?"error-hide":"error-show"} >Please provide a valid details</p>
          </form>
        </div>
      </div>
      <div class="digital-services-data">
        <p class="digital-data">
          4+
          <br />
          <span class="digital-data-desc">Account Management Developers

          </span>
        </p>
        <p class="digital-data">
          1100+
          <br />
          <span class="digital-data-desc">Global Clients</span>
        </p>
        <p class="digital-data">
          600+
          <br />
          <span class="digital-data-desc">Websites Live</span>
        </p>
      </div>
      <div class="digital-middle-content">
        <div class="digital-middle">
          <h2 className="title">
            Account Management Services & Solution.
          </h2>
          <p className="digital-middle-desc">
            Account Management Services refers to the processes and activities involved in managing an Amazon seller account. This includes tasks such as setting up and maintaining an account, creating product listings, optimizing product pages, handling customer service and managing orders and shipping.<br /><br />

            Platforms like Amazon and Flipkart allow sellers and businesses to sell their products on the e-commerce platform, reaching out to a huge and diverse customer base. Effectively managing an Amazon seller account requires attention to detail and a deep understanding of the market.<br /><br />

            Sellers can choose to manage their accounts themselves or hire a professional account management service to handle them and help them maximize their sales and profits. These services may include account setup, product research and Amazon product listing, inventory management and return solutions, marketing and advertising, customer service, and more.
          </p>
        </div>
        <img src={require("./management-services.png")} alt="digital pic" />
      </div>
      <h2 className="seo-card-title">Our seller account management service</h2>
      <div className="ppc-cards">
        <div className="ppc-card">
          <img src={require("../EcommerceServices/61.png")} alt="PPC services" />
          <p className="ppc-title">Seller Account Setup</p>
          <p className="ppc-desc">
            As one of the first steps in our Amazon seller services, we handle this important part with meticulous attention to detail. Customers get full advice and guidance on everything related to selling on Amazon.
          </p>
        </div>
        <div className="ppc-card">
          <img src={require("../EcommerceServices/62.png")} alt="PPC services" />
          <p className="ppc-title">Product Listing / Cataloging</p>
          <p className="ppc-desc">
            The team at kingsman Services takes care of setting up your storefront on Amazon and then filling it with products. Once the Amazon seller is signed in, we take care of photographing each product assigning.
          </p>
        </div>
        <div className="ppc-card">
          <img src={require("../EcommerceServices/63.png")} alt="PPC services" />
          <p className="ppc-title">Search Engine Optimization (SEO)</p>
          <p className="ppc-desc">
            After your Amazon storefront is live after Amazon brand store creation work, we proceed with Amazon SEO services. Our expert, custom Amazon SEO implementation translates to higher visibility, rankings at the top in Google.
          </p>
        </div>
        <div className="ppc-card">
          <img src={require("../EcommerceServices/64.png")} alt="PPC services" />
          <p className="ppc-title">Enhanced Brand Content</p>
          <p className="ppc-desc">
            The content on your storefront on Amazon is the critical touch point that positively engages customers and persuades them to make a purchase. We pay special attention to the products on your storefront on Amazon.
          </p>
        </div>
        <div className="ppc-card">
          <img src={require("../EcommerceServices/65.png")} alt="PPC services" />
          <p className="ppc-title">Product Listing Optimization</p>
          <p className="ppc-desc">
            As your friendly Amazon seller service provider, Digicommerce takes care of product listing management. We integrate many complex factors such as which product to promote and highlight pricing based on demand.
          </p>
        </div>
        <div className="ppc-card">
          <img src={require("../EcommerceServices/66.png")} alt="PPC services" />
          <p className="ppc-title">Product Launch</p>
          <p className="ppc-desc">
            Timing, price, category, and market demand are some of the factors we integrate into product launches as part of our Amazon seller services. This results in a newly launched product.
          </p>
        </div>


      </div>
      <div className="faq">
        <h3 className="team-heading">
          <div class="container">
            <div class="row">
              <div class="col-md-12 text-center">
                <h3 class="animate-charcter"> FREQUENTLY ASKED QUESTIONS</h3>
              </div>
            </div>
          </div>
        </h3>
        <div class="faq-container">
          <Collapse className="acd" accordion={true} defaultActiveKey={["1"]}>
            <Panel header="What are Amazon Account Management Services?" key="1">
              <p className="acd-desc">
                Amazon Account Management Services means an Amazon seller account managed by an experienced Amazon account professional, with full support from account set-up to product customization, branding, and sales support. Amazon offers a dedicated management platform on the marketplace.
              </p>
            </Panel>
          </Collapse>
          <Collapse className="acd" accordion={true}>
            <Panel
              header="What is Amazon Business Advisory (ABA)?"
              key="2"
            >
              <p className="acd-desc">
                Amazon Business Advisory can be termed as Amazon Account Paid Management Service which provides sellers with consulting support with business intelligence, strategic insights, and techniques to increase their sales and revenue.
              </p>
            </Panel>
          </Collapse>
          <Collapse className="acd" accordion={true}>
            <Panel
              header="How do I create an Amazon seller account?"
              key="3"
            >
              <p className="acd-desc">
                Before registering and setting up your seller account, you must have a business model, which fulfillment method is best for you, and which product category to choose. You should go to the 'Seller Central section of the Amazon site. Will help you choose the right tools and optimize your listing in the right way to help you sell on Amazon.
              </p>
            </Panel>
          </Collapse>


        </div>
      </div>
    </>

  )
}

export default AccountManagment