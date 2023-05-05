import React, { useState } from 'react'
import { Collapse } from "antd";
import axios from 'axios';

function CategoryApproval() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [mobile, setMobile] = useState();
  const [requirement, setReqirement] = useState();
  const { Panel } = Collapse;
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleCategory = async (event) => {
    event.preventDefault();

    if (email !== "" && mobile.length === 10 && name !== "") {
      setSuccess(true)
      const parsedData = {
        name: name,
        mobile: mobile,
        email: email,
        message: requirement,
        catageroy: "Category Approval"
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
              <h1 className="title">Category Approval Services</h1>
             
              <p className="description">
              Category approval is confusing to many sellers who are new to the Amazon marketplace. To sell a product, you must submit a request to sell. Products sold through the Marketplace must meet specified certification standards as per Amazon's policies. Amazon requires different levels of approval if you are trying to sell the product on the ecommerce platform. We have the experience to guide you through every step of the process with our Amazon Category Approval Services.
              </p>
              <button class="btn">Explore Brand Registry Management Packages</button>
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
            <button onClick={handleCategory} class="btn sbmt-btn">Submit</button>
            <p className={error ? "error-hide" : "error-show"} >Please provide a valid details</p>
          </form>
          </div>
        </div>
        <div class="digital-services-data">
          <p class="digital-data">
            2+
            <br />
            <span class="digital-data-desc">Category Approval Developers</span>
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
            <h2 className="title">Brand Category Endorsement Specialist</h2>
            <p className="digital-middle-desc">
            There is so much to learn about Amazon brand approval that it is a good idea to hire an expert in this area. At Evolved Commerce, our Amazon Category Consultants are among the best in the industry and can help you get ready to sell on Amazon in a safe and secure way. We are sourcing and selling products on Amazon. After gaining experience selling in different categories and finding what worked, we started helping other brands get category approvals.
            </p>
          </div>
          <img src={require("./category-services.png")} alt="digital pic" />
        </div>
        
       
        <div className="digital-growth">
        <p className="seo-title">
        Why choose our Categories Approval Service?
        </p>
        <div className="bottom">
          <p className="bottom-left">How we help you</p>
          <p className="bottom-middle">&#62;</p>
          <p className="bottom-right">
          The only thing we do here helps you get approved in Amazon-restricted categories and brands, and we are very good at it.
          </p>
        </div>
        <div className="bottom">
          <p className="bottom-left">Money Back Guarantee</p>
          <p className="bottom-middle">&#62;</p>
          <p className="bottom-right">
          No Acceptance? no pay! It's that simple. You pay when your category is approved by the eCommerce store.
          </p>
        </div>
        <div className="bottom">
          <p className="bottom-left">Experience</p>
          <p className="bottom-middle">&#62;</p>
          <p className="bottom-right">
          Kingsman Services started accepting Amazon Categories as it struggled for years to integrate for its account. Finally decoding the exact needs of what Amazon is looking for, they have engaged in helping other Amazon sellers. Message us now and let our highly experienced team assist you with any account approval needs you may have.
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
              <Panel header="Why do I need to get approved to sell my products on Amazon?" key="1">
                <p className="acd-desc">
                Having access to sell in some of the more lucrative categories within the Amazon Marketplace could be a game-changer for you and your business. By opening more departments to sell it, you are increasing your customer base as well as product exposure. But, getting the required approvals to start earning profits in the category of your choice can be an uphill battle.
                </p>
              </Panel>
            </Collapse>
            <Collapse className="acd" accordion={true}>
              <Panel header="How to get approval from amazon?" key="2">
                <p className="acd-desc">
                Amazon has an approval process that in some cases involves clearing some difficult hurdles. Each part of the application process can be a nightmare with all the document requirements and detailed information requested. We're familiar with Amazon's approval process and can tell you exactly what you need to do to increase your chances of getting approved.
                </p>
              </Panel>
            </Collapse>
            <Collapse className="acd" accordion={true}>
              <Panel header="Can you also allow banned brands?" key="3">
                <p className="acd-desc">
                Sure! As well as gated product categories, we can approve any Amazon gated brand for any market!
                </p>
              </Panel>
            </Collapse>
          </div>
        </div>
      </>
  )
}

export default CategoryApproval