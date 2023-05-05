import React, { useState } from "react";
import { Collapse } from "antd";
import axios from 'axios';

function AccountReinstatement() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [mobile, setMobile] = useState();
  const [requirement, setReqirement] = useState();
  const { Panel } = Collapse;
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleReinstatement = async (event) => {
    event.preventDefault();

    if (email !== "" && mobile.length === 10 && name !== "") {
      setSuccess(true)
      const parsedData = {
        name: name,
        mobile: mobile,
        email: email,
        message: requirement,
        catageroy: "Account Reinstatement"
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
            <h1 className="title">Account Reinstatement Services</h1>
            <p className="description-title">
            reinstate your account quickly and resolve the issue.
            </p>
            <p className="description">
            If you're selling on Amazon, account suspension is your biggest hurdle. When you receive a notification that your account has been suspended, you need to act on it. However, considering how tricky suspensions are, you need to restore your account quickly and resolve the issue using the best solution – Kingsman Services is the place to go to fix Amazon accounts unexpected or Amazon account suspensions. helps in solving problems and avoids waste of time, money, and effort.
            </p>
            <button class="btn">Explore Account reinstatement Packages</button>
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
            <button onClick={handleReinstatement} class="btn sbmt-btn">Submit</button>
            <p className={error ? "error-hide" : "error-show"} >Please provide a valid details</p>
          </form>
        </div>
      </div>
      <div class="digital-services-data">
        <p class="digital-data">
        4+
          <br />
          <span class="digital-data-desc">Account Reinstatement Developers</span>
        </p>
        <p class="digital-data">
        900+
          <br />
          <span class="digital-data-desc">Global Clients</span>
        </p>
        <p class="digital-data">
        450+
          <br />
          <span class="digital-data-desc">Websites Live</span>
        </p>
      </div>
      <div class="digital-middle-content">
        <div class="digital-middle">
          <h2 className="title">
          Save, and reactivate your account appeal!
          </h2>
          <p className="digital-middle-desc">
          Your account was suspended due to poor sales or inappropriate practices. Not to worry, Kingsman Services will take care of it. We have the expertise to thoroughly investigate the reasons for your account suspension. Upon a clear understanding of the issues, we take appropriate action and set up two-way communication with Amazon to discuss and bring your account back online. We help you avoid legal and technical issues with Amazon policies and take care of them personally. Our team communicates with Amazon and drafts a proposal for redesigning and making changes to your online store on Amazon. Professionally prepared reporting and prompt action are one of the key features of Kingsman Services.
          </p>
        </div>
        <img src={require("./account-services.png")} alt="digital pic" />
      </div>
      <h2 className="seo-card-title">
      Our Suspension Protection Program
      </h2>
      <div className="ppc-cards">
        <div className="ppc-card">
          <img src={require("./79.png")} alt="PPC services" />
          <p className="ppc-title">Account creation failed</p>
          <p className="ppc-desc">
          Seller accounts can be suspended at the very first stage - during account creation. Allow our team to assist you from getting verified to setting up and listing your account so you can start selling in no time.
          </p>
        </div>
        <div className="ppc-card">
          <img src={require("./80.png")} alt="PPC services" />
          <p className="ppc-title">poor seller performance</p>
          <p className="ppc-desc">
          Amazon puts a lot of focus on customer service, so poor seller performance can get your account suspended. Our team of experts will help you build an effective appeal to Amazon with a plan of action to ensure that your rates remain within acceptable limits.
          </p>
        </div>
        <div className="ppc-card">
          <img src={require("./81.png")} alt="PPC services" />
          <p className="ppc-title">Violation of Amazon Policies</p>
          <p className="ppc-desc">
          Suspensions due to violations of Amazon policies are often vague, so sellers usually don't know how to fix the problem. Get help from our team. Performs a thorough account review to identify issues, develop a corrective action plan, and establish processes that ensure your account remains active.
          </p>
        </div>
        <div className="ppc-card">
          <img src={require("./82.png")} alt="PPC services" />
          <p className="ppc-title">IP Grievance Redressal</p>
          <p className="ppc-desc">
          Copyright, trademark, and patent infringements not only take away your Amazon selling privileges; They also have legal implications. We have a team of knowledgeable IP lawyers who can withdraw the complaint and submit an Amazon legal appeal if you have received a notification from Amazon alleging that your intellectual property rights have been violated, allowing you to regain access to your account.
          </p>
        </div>
        <div className="ppc-card">
          <img src={require("./83.png")} alt="PPC services" />
          <p className="ppc-title">Brand Protection</p>
          <p className="ppc-desc">
          With the rise of counterfeiters and hijackers, it is essential to take all measures to protect your brand. We will help you file copyright, trademark, and patent for your brand. From evaluation to drafting cease and desist letters, filing violation reports, and setting up preventive measures, we'll be with you through the entire process.
          </p>
        </div>
        <div className="ppc-card">
          <img src={require("./84.png")} alt="PPC services" />
          <p className="ppc-title">
          Recovery of Damages
          </p>
          <p className="ppc-desc">
          If you are accused of selling a counterfeit product, Amazon may immediately suspend your listing or your seller account entirely. Our legal experts will help you file legal claims and recover damages from brands that have filed false complaints.
          </p>
        </div>
      </div>
      <div className="digital-growth">
        <p className="seo-title">
        Why choose Kingman Services for Account
        </p>
        <div className="bottom">
          <p className="bottom-left">customized package</p>
          <p className="bottom-middle">&#62;</p>
          <p className="bottom-right">
          Custom packages based on account suspension case, account status and more. Packages tailored to your needs.
          </p>
        </div>
        <div className="bottom">
          <p className="bottom-left">Sure result</p>
          <p className="bottom-middle">&#62;</p>
          <p className="bottom-right">
          We have reinstated 500+ suspended accounts. Our suspension appeal service or reinstatement services will ensure that your suspended account is reinstated quickly.
          </p>
        </div>
        <div className="bottom">
          <p className="bottom-left">Suspension appeal</p>
          <p className="bottom-middle">&#62;</p>
          <p className="bottom-right">
          Has your account been suspended? Don't panic! We'll help you work out the best plan of action for account recovery with a 100% money-back guarantee.
          </p>
        </div>
        <div className="bottom">
          <p className="bottom-left">Effective action plan</p>
          <p className="bottom-middle">&#62;</p>
          <p className="bottom-right">
          The purpose of the appeal letter prepared by our team is to outline the root cause of account suspension and will take relevant steps for reinstatement.
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
            <Panel header="Will Amazon definitely reinstate my account?" key="1">
              <p className="acd-desc">
              We will provide you with an effective action plan and support but unfortunately due to the nature of the business, we cannot promise about the final outcome of the matter.
              </p>
            </Panel>
          </Collapse>
          <Collapse className="acd" accordion={true}>
            <Panel header="How long does it usually take for Amazon to respond to appeals?" key="2">
              <p className="acd-desc">
              The seller performance team usually responds within 1-2 working days but can take up to 1-2 weeks due to large queues.
              </p>
            </Panel>
          </Collapse>
          <Collapse className="acd" accordion={true}>
            <Panel header="What happens if Amazon requests more information?" key="3">
              <p className="acd-desc">
              If Amazon has requested more details, we can review the appeal and examine what exactly Amazon sought to share and we need to share that particular detail.
              </p>
            </Panel>
          </Collapse>
          <Collapse className="acd" accordion={true}>
            <Panel header="If our account will not be restored? What about the refund policy?" key="3">
              <p className="acd-desc">
              It is quite obvious to think of our payment which is stuck due to account suspension but you can be sure that after 90 days the payment will not get stuck, Amazon will transfer the amount to your bank account or if you have not received it You can connect with us for more help.
              </p>
            </Panel>
          </Collapse>
          <Collapse className="acd" accordion={true}>
            <Panel header="Will you direct us to submit the appeal letter in the process?" key="3">
              <p className="acd-desc">
              Yes, on the basis of notification and case, we will definitely instruct that we have to send an action plan on this mail id.
              </p>
            </Panel>
          </Collapse>
        </div>
      </div>
    </>
  );
}

export default AccountReinstatement;
