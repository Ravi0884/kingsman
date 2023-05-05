import React, { useState } from "react";
import { Collapse } from "antd";
import axios from 'axios';

function AccountLaunch() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [mobile, setMobile] = useState();
  const [requirement, setReqirement] = useState();
  const { Panel } = Collapse;
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleLaunch = async (event) => {
    event.preventDefault();

    if (email !== "" && mobile.length === 10 && name !== "") {
      setSuccess(true)
      const parsedData = {
        name: name,
        mobile: mobile,
        email: email,
        message: requirement,
        catageroy: "Account Launch"
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
        <img className="success-image" src={require("../RateCard/thanks.png")} alt="Kingsman-Services" />
        <div className="success-desc">
          <p className="success-title">Check your mailbox, please.</p>
          <p className="success-title2">You might have received the mail with the subject line - <span className="success-bold">“ Kingsman Services ”</span></p>
          <p className="success-title2">We will keep your information safe. Feel free to contact us with any questions at<br /><span className="success-bold">info@kingsman.services</span> </p>
        </div>
      </div>
      <div className="services-div">
        <div className="digital-services">
          <div className="about-digital-services">
            <h1 className="title">Account Launch and grow your business</h1>
            <p className="description-title">
              Accurately represent brands with Account Lunch and promote your
              business.
            </p>
            <p className="description">
              Are you looking to launch your seller account on India's leading
              e-commerce platform? Want a hassle-free way to list your products
              and start selling on the platform? So account launch service can
              help.
              <br />
              <br />
              Our team of experienced professionals will handle all the details
              for you, from setting up your seller account to making your
              products live on the platform. We know the e-commerce system and
              can make sure your account is set up correctly from the start.
              This saves you time and effort, so you can focus on what matters
              most.
            </p>
            <button class="btn">Explore Account Launch Packages</button>
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
            <button onClick={handleLaunch} class="btn sbmt-btn">Submit</button>
            <p className={error ? "error-hide" : "error-show"} >Please provide a valid details</p>
          </form>
        </div>
      </div>
      <div class="digital-services-data">
        <p class="digital-data">
          3+
          <br />
          <span class="digital-data-desc">Account Launch Developers</span>
        </p>
        <p class="digital-data">
          700+
          <br />
          <span class="digital-data-desc">Global Clients</span>
        </p>
        <p class="digital-data">
          500+
          <br />
          <span class="digital-data-desc">Websites Live</span>
        </p>
      </div>
      <div class="digital-middle-content">
        <div class="digital-middle">
          <h2 className="title">
            Account Lunching services for Ecommerce Store.
          </h2>
          <p className="digital-middle-desc">
            Our group of experienced experts will deal with every one of the
            subtleties for you, from setting up your vendor record to making
            your items live on the stage. We know the online business framework
            and can ensure your record is set up accurately all along. This
            recovery you time and exertion, so you can zero in on what makes the
            biggest difference.
            <br />
            <br />
            But the benefits of using our Account Launch service do not end
            there. We also provide ongoing support to help you succeed on the
            platform. From customizing your listing to handling customer
            inquiries, we've got you covered.
            <br />
            <br />
            An important aspect of launching your own account on Flipkart is
            getting a brand endorsement. Our team can help you with this
            process, ensuring that your brand is approved as quickly as
            possible.
          </p>
        </div>
        <img src={require("./accountlaunch-services.png")} alt="digital-Kingsman-Services" />
      </div>
      <h2 className="seo-card-title">
        What are the benefits of hiring professionals for account launch
        services?
      </h2>
      <div className="ppc-cards">
        <div className="ppc-card">
          <img src={require("./91.png")} alt="EKingsman-Services" />
          <p className="ppc-title">Expertise</p>
          <p className="ppc-desc">
            Professional service providers have extensive knowledge and
            experience in launching and managing accounts. They can help you
            navigate the process smoothly and ensure that your account is set up
            correctly.
          </p>
        </div>
        <div className="ppc-card">
          <img src={require("./92.png")} alt="PPC services" />
          <p className="ppc-title">Time-saving</p>
          <p className="ppc-desc">
            Opening an account can be a time-consuming process, especially if
            you're new to e-commerce. Hiring professionals can save you time and
            allow you to focus on other aspects of your business.
          </p>
        </div>
        <div className="ppc-card">
          <img src={require("./93.png")} alt="PPC services" />
          <p className="ppc-title">Professional presentation</p>
          <p className="ppc-desc">
            Professional service providers can help you create a
            professional-looking listing and profile on the e-commerce store,
            which can help increase your chances of success on the platform.
          </p>
        </div>
        <div className="ppc-card">
          <img src={require("./94.png")} alt="PPC services" />
          <p className="ppc-title">Customized Solutions</p>
          <p className="ppc-desc">
            Professional service providers can provide customized solutions to
            meet your specific requirements. They can help you identify the best
            products to sell on an e-commerce store and guide you through the
            process of listing and promoting your products.
          </p>
        </div>
        <div className="ppc-card">
          <img src={require("./95.png")} alt="PPC services" />
          <p className="ppc-title">Increases Your Chances of Success</p>
          <p className="ppc-desc">
            Working with a professional service provider can increase your
            chances of success on Amazon. They can provide valuable insight and
            advice on how to optimize your listing and promote your products
            effectively.
          </p>
        </div>
        <div className="ppc-card">
          <img src={require("./96.png")} alt="PPC services" />
          <p className="ppc-title">Continuous Support</p>
          <p className="ppc-desc">
            Professional service providers can provide continuous support and
            assistance to grow your business on Flipkart, and Amazon. This can
            be especially useful if you're new to e-commerce and need guidance
            and support as you learn the ropes.
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
            <Panel header="How do I lunch a new account?" key="1">
              <p className="acd-desc">
                Open the website Seller Central.amazon.in and you will see
                onscreen instructions and steps to follow to register as a
                seller on Amazon and open your account. You will be required to
                submit your name and email address as the primary step to start
                the process.
              </p>
            </Panel>
          </Collapse>
        </div>
      </div>
    </>
  );
}

export default AccountLaunch;
