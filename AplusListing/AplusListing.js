import React, { useState } from "react";
import { Collapse } from "antd";
import axios from 'axios';

function AplusListing() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [mobile, setMobile] = useState();
  const [requirement, setReqirement] = useState();
  const { Panel } = Collapse;
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleAplus = async (event) => {
    event.preventDefault();

    if (email !== "" && mobile.length === 10 && name !== "") {
      setSuccess(true)
      const parsedData = {
        name: name,
        mobile: mobile,
        email: email,
        message: requirement,
        catageroy: "Aplus Listing"
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
            <h1 className="title">A+ Listing services for Amazon</h1>
            <p className="description-title">
              A+ content helps increase the overall sales of a product.
            </p>
            <p className="description">
              Amazon A+ Listing is a unique tool inside Seller Central that
              allows brand owners to create beautifully designed Amazon product
              descriptions for their Amazon listings. Formally known as Enhanced
              Brand Listing, A+ Listing is available for brand-registered
              third-party sellers and all vendors.
            </p>
            <button class="btn">Explore A+ Listing Packages</button>
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
            <button onClick={handleAplus} class="btn sbmt-btn">Submit</button>
            <p className={error ? "error-hide" : "error-show"} >Please provide a valid details</p>
          </form>
        </div>
      </div>
      <div class="digital-services-data">
        <p class="digital-data">
          5+
          <br />
          <span class="digital-data-desc">A+ Listing Developers</span>
        </p>
        <p class="digital-data">
          600+
          <br />
          <span class="digital-data-desc">Global Clients</span>
        </p>
        <p class="digital-data">
          350+
          <br />
          <span class="digital-data-desc">Websites Live</span>
        </p>
      </div>
      <div class="digital-middle-content">
        <div class="digital-middle">
          <h2 className="title">What is Amazon A+ Listing?</h2>
          <p className="digital-middle-desc">
            Amazon A+ listing refers to a listing product description, which
            helps sellers to share their brand story with enhanced image and
            video content features. Using such sellers can change the product
            description of their branded Amazon Standard Identification Number
            with the help of rich text and video embedded in the product
            description.
            <br />
            <br />
            Using A+ Listings, you can dive into features with additional rich
            content including technical specifications, comparative product
            information, and images, videos, or product setups. You can also run
            A/B tests to optimize for conversions using our Manage Your
            Experiments tool.
          </p>
        </div>
        <img src={require("./listing-services.png")} alt="digital pic" />
      </div>
      <h2 className="seo-card-title">Benefits of A+ listing</h2>
      <div className="ppc-cards">
        <div className="ppc-card">
          <img src={require("./97.png")} alt="PPC services" />
          <p className="ppc-title">Tell your brand story</p>
          <p className="ppc-desc">
            This type of unique content gives you the opportunity to sell the
            customer not only your product but also your brand. Coming across as
            a genuine brand people can trust can help you build a loyal customer
            base to encourage repeat business.
          </p>
        </div>
        <div className="ppc-card">
          <img src={require("./98.png")} alt="PPC services" />
          <p className="ppc-title">Minimize Returns and Negative Reviews</p>
          <p className="ppc-desc">
            A+ listings also give you the opportunity to talk about your product
            in more detail, and adding images and infographics to your
            description will give customers a better understanding of what your
            product is, how it works, and how it can benefit them. Will happen.
          </p>
        </div>
        <div className="ppc-card">
          <img src={require("./99.png")} alt="PPC services" />
          <p className="ppc-title">Show product with customizable modules</p>
          <p className="ppc-desc">
            Amazon allows you to add multiple images and modules to your
            description which really helps you stand out from the crowd. 17
            different module options allow you to showcase your product from
            every possible angle.
          </p>
        </div>
        <div className="ppc-card">
          <img src={require("./100.png")} alt="PPC services" />
          <p className="ppc-title">increase your conversion rate</p>
          <p className="ppc-desc">
            According to a study conducted by Amazon, the average conversion
            rate increases by 5 to 6% when using an A+ content description.
            Let's say 10% of people convert from each visit to your product
            catalog.
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
            <Panel header="What is Amazon A+ Listing?" key="1">
              <p className="acd-desc">
                A+ Content is a premium option that allows sellers to customize
                the product description of their branded ASINs by including rich
                text, video, and images. The purpose of integrating rich
                multimedia content is to improve the user experience, which
                leads to higher conversions and more traffic to the listing.
              </p>
            </Panel>
          </Collapse>
          <Collapse className="acd" accordion={true} defaultActiveKey={["1"]}>
            <Panel header="Why is A+ listing important?" key="1">
              <p className="acd-desc">
                A+listing helps you capture the attention of your customers.
                Provides a complete digital shopping experience A+ ingredients
                act as digital sales and customer service staff. Better content
                increases consumer confidence, lowers returns, and keeps
                customers satisfied.
              </p>
            </Panel>
          </Collapse>
          <Collapse className="acd" accordion={true} defaultActiveKey={["1"]}>
            <Panel header="How much does Amazon A+ listing cost?" key="1">
              <p className="acd-desc">
                A+ materials have no direct cost. This is a facility offered to
                professional sellers who have registered as brand owners under
                the Amazon Brand Registry.
              </p>
            </Panel>
          </Collapse>
          <Collapse className="acd" accordion={true} defaultActiveKey={["1"]}>
            <Panel
              header="What are the restrictions while creating an A+ listing?"
              key="1"
            >
              <p className="acd-desc">
                Affirmatively we do! We work as real partners and are there
                whenever support or any kind of maintenance is requiredThere are
                some restrictions and some guidelines for A+ listing:
                <br />
                <br />
                Avoid using blurry and low-quality images
                <br />
                <br />
                Avoid any promotional references or words like "Giveaway",
                "Bonus", "Freebies" etc.
                <br />
                <br />
                Do not use any link that redirects customers outside of the
                Amazon Marketplace.
                <br />
                <br />
                Always make sure you check grammar and spelling
              </p>
            </Panel>
          </Collapse>
        </div>
      </div>
    </>
  );
}

export default AplusListing;
