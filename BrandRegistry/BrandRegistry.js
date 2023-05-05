import React, { useState } from 'react'
import { Collapse } from "antd";
import axios from 'axios';

function BrandRegistry() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [mobile, setMobile] = useState();
  const [requirement, setReqirement] = useState();
  const { Panel } = Collapse;
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleBrand = async (event) => {
    event.preventDefault();

    if (email !== "" && mobile.length === 10 && name !== "") {
      setSuccess(true)
      const parsedData = {
        name: name,
        mobile: mobile,
        email: email,
        message: requirement,
        catageroy: "Brand Registry"
      }
      await axios.post("http://localhost:8000/api/ecommerce", parsedData).then((res) => {
      }).catch(function (error) {
        console.log(error);
      })
      setName("")
      setMobile("")
      setEmail("")
      setReqirement("")
    } else {
      setError(true)
      setTimeout(() => {
        setError(false)
      }, 2000)
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
            <h1 className="title">Brand Registry & Protection Services</h1>
            <p className="description-title">
              Accurately represent the brand with the Brand Registry and take advantage of advanced analytics and advertising options.
            </p>
            <p className="description">
              The Amazon platform holds immense potential for e-commerce entrepreneurs. Kingsman Services acts as a facilitator to register an Amazon seller account. Our team guarantees to keep all the Amazon seller account prerequisites in mind and avoid mistakes. The person in charge of your account assumes full responsibility for the security of the information provided for the registration process. A well-led Amazon account, modeled on traditional account registration, will drive sales along with reputable customer care.
            </p>
            <button class="btn">Explore Brand Registry Packages</button>
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
            <button onClick={handleBrand} class="btn sbmt-btn">Submit</button>
            <p className={error ? "error-hide" : "error-show"} >Please provide a valid details</p>
          </form>
        </div>
      </div>
      <div class="digital-services-data">
        <p class="digital-data">
          2+
          <br />
          <span class="digital-data-desc">Brand Registry Developers</span>
        </p>
        <p class="digital-data">
          600+
          <br />
          <span class="digital-data-desc">Global Clients</span>
        </p>
        <p class="digital-data">
          300+
          <br />
          <span class="digital-data-desc">Websites Live</span>
        </p>
      </div>
      <div class="digital-middle-content">
        <div class="digital-middle">
          <h2 className="title">
            Brand Registration and Groe your business.
          </h2>
          <p className="digital-middle-desc">
            Brand Registry is a program that helps protect the intellectual property of your brand. Any infringement or IP infringement can be easily detected and reported by Amazon for strict action. In addition to protecting your brand, Brand Registry has a full suite of enhanced search and better conversion features. Registered sellers can get detailed analytics and other relevant information to support their sales and provide a better shopping experience to the customers. As your Amazon expert, we'll manage all of your brand registry needs while helping you protect your brand presence and establish a thriving business on Amazon.
          </p>
        </div>
        <img src={require("./brand-services.png")} alt="digital pic" />
      </div>
      <h2 className="seo-card-title">
        Top Benefits of Amazon Brand Registry
      </h2>
      <div className="ppc-cards">
        <div className="ppc-card">
          <img src={require("./85.png")} alt="PPC services" />
          <p className="ppc-title">A+ Contents</p>
          <p className="ppc-desc">
            With Brand Registry you get access to A+ content, which is an impressive way to showcase your brand and product listings. It allows you to create rich content by adding additional information, interesting modules, charts, lifestyle images, and your unique brand story. A+ content communicates the genuine core of your items and brand and takes precedence over your product description.
          </p>
        </div>
        <div className="ppc-card">
          <img src={require("./86.png")} alt="PPC services" />
          <p className="ppc-title">Brand Store</p>
          <p className="ppc-desc">
            Getting access to and building an Amazon Brand Store is one of the key benefits of a Brand Registry. The Brand Store is a centralized multi-page destination for your brand within Amazon. You can provide your customers with a website-like shopping experience, showcase your products in an organized manner, share your brand story, and increase awareness of your entire range.
          </p>
        </div>
        <div className="ppc-card">
          <img src={require("./87.png")} alt="PPC services" />
          <p className="ppc-title">Sponsored Brand ads</p>
          <p className="ppc-desc">
            Sponsored brand ads appear in prominent placements such as at the top of the Amazon search page, product detail pages, and on the left and bottom of search results, making them highly visible. Sponsored Brand Ads can be used to increase the discoverability and visibility of your products on Amazon.
          </p>
        </div>
        <div className="ppc-card">
          <img src={require("./88.png")} alt="PPC services" />
          <p className="ppc-title">Amazon Posts</p>
          <p className="ppc-desc">
            Amazon Posts is a feature that enables registered brands to promote products using social media feeds within Amazon. Brands that are active on social media platforms can easily repurpose their existing content for Amazon to attract relevant audiences and increase product visibility.
          </p>
        </div>
        <div className="ppc-card">
          <img src={require("./89.png")} alt="PPC services" />
          <p className="ppc-title">Manage Experiments</p>
          <p className="ppc-desc">
            Manage your experiments allowing registered sellers to run tests on their A+ content. By comparing two versions of content side by side, you can experiment and review which performs better. With experiments, you get a fair idea about the improvements that can be made in the content to add appeal to attract more customers, conversions, and sales.
          </p>
        </div>
        <div className="ppc-card">
          <img src={require("./90.png")} alt="PPC services" />
          <p className="ppc-title">Brand Catalog Manager</p>
          <p className="ppc-desc">
            The Brand Catalog Manager tool provides information on who is selling your products, customer brand experience and feedback, and projected product sales opportunities. You can review all sellers, see who is currently listing your products, and provide customers with a better shopping experience. You can also add your offer and description of the sale.
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
            <Panel header="How to protect your brand on Amazon?" key="1">
              <p className="acd-desc">
                There are several ways to protect your brand from unauthorized sellers on Amazon:<br /><br />

                amazon brand registry<br /><br />

                bundle your products<br /><br />

                cease and desist letters<br /><br />

                Awareness of strange product reviews<br /><br />

                custom logo and packaging<br /><br />

                protection of intellectual property<br /><br />

                Using these methods and resources made available to you by Amazon is a great way to get started. Process and maintenance are critical to maintaining the security of your listing, so it's essential to continually monitor for any suspicious activity.
              </p>
            </Panel>
          </Collapse>
        </div>
      </div>
    </>
  )
}

export default BrandRegistry