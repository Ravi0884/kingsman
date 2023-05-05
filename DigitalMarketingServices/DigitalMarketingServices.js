import React, { useState } from "react";
import "./digitalmarketingservices.css";
import { Collapse } from "antd";
import axios from "axios"
import RateCard from "../RateCard/RateCard";
import {responsive,posterData} from './data'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";

import { Helmet } from "react-helmet";

function DigitalMarketingServices() {
  function siteClick() {
    window.scrollTo(0, 0);
  }
  const items = posterData.map((item) => (
    <div className="choosing-projec">
          <p className="choose-new-title">{item.title}</p>
          <p className="choose-project-des">
          {item.desc}
          </p>
        </div>
  ));
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [mobile, setMobile] = useState();
  const [error, setError] = useState();
  const [success, setSuccess] = useState();
  const [requirement, setReqirement] = useState();
  const { Panel } = Collapse;
  const handleDigitalServices = async (event) => {
    event.preventDefault();
    
    if (email !== "" && mobile.length===10 && name !== "") {
      setSuccess(true)
      const parsedData = {
        name: name,
        mobile: mobile,
        email: email,
        message: requirement,
        catageroy:"DigitalMarketingServices"
      }
      await axios.post("http://localhost:8000/api/digitalMarketing", parsedData).then((res) => {
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
    <Helmet>
      <title>Best Digital marketing agency in india for B2B companies</title>
    </Helmet>
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
            <h1 className="title">
              Digital Marketing Agency in India - Internet Marketing Services
            </h1>
            
            <p className="description-title">
              Maximize your online business growth with an expert digital marketing agency in India and break all the hurdles of your business in the path of your growth.
            </p>
            <p className="description">
              A strong brand identity helps build brand recognition and loyalty,
              as it allows consumers to identify and connect with a brand or its
              products and services. You can easily achieve that by choosing
              credible digital marketing agency. Either it is generating new
              leads, facilitating your brand’s online presence, or maximizing
              your ROI, digital marketing is the best solution one can look for.
              As a growing digital marketing firm, we make sure that you achieve
              all these goals and more. Strategized by our skilled specialists,
              our digital marketing services assure your brand’s growth to
              another level. We prioritize our customers’ needs and focus on
              giving potential results within time.
            </p>
            <button class="btn">Explore Digital Marketing Packages</button>
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
            <button onClick={handleDigitalServices} class="btn sbmt-btn">Submit</button>
            <p className={error?"error-hide":"error-show"} >Please provide a valid details</p>
          </form>
        </div>
      </div>
      <div class="digital-services-data">
        <p class="digital-data">
          120+
          <br />
          <span class="digital-data-desc">
            {" "}
            Professional digital marketing experts
          </span>
        </p>
        <p class="digital-data">
          $20
          <br />
          <span class="digital-data-desc"> Million Media Spend Managed</span>
        </p>
        <p class="digital-data">
          7000+
          <br />
          <span class="digital-data-desc"> Global Clients</span>
        </p>
      </div>
      <div class="digital-middle-content">
        <div class="digital-middle">
          <h2 className="title">
            A Digital Marketing Agency That Believes in Boundless Possibilities
          </h2>
          <p className="digital-middle-desc">
            To achieve the best possible result our digital marketing firm
            believes in strategy. With our bandwidth we can execute multiple
            experiments and risk-taking. Always looking for new and innovative
            ways to reach and engage with customers is what makes us different
            from others. We understand that the digital marketing landscape is
            constantly evolving, so we are committed to staying up-to-date with
            the latest trends and technologies. This enables us to help our
            clients stay ahead of the curve and capitalize on emerging
            opportunities. We are driven by a passion for innovation,
            creativity, and growth to unlock the brand’s full potential in the
            digital world.
          </p>
        </div>
        <img src={require("./digital.png")} alt="digital pic" />
      </div>
      <div className="digital-growth">
        <h2 className="title growth-title">
          What Growth Can A Digital Marketing Firm Bring to Your
          <br />
          Business?
        </h2>
        <div className="digital-growth-items">
          <div className="digital-growth-item">
            <p className="digital-growth-title">
              <img src={require("./1.png")} alt="Digital Growth" /> &nbsp;Brand
              Building
            </p>
            <p className="digital-growth-desc">
              Our full service digital marketing agency will make sure that your
              brand registers itself on the radar of your target audience. With
              our brand building service, you’ll soon find your products and
              offerings becoming the talk of the town.
            </p>
          </div>
          <div className="digital-growth-item">
            <p className="digital-growth-title">
              <img src={require("./2.png")} alt="Digital Growth" /> &nbsp;Paid
              Social
            </p>
            <p className="digital-growth-desc">
              Tap into the immense potential of social media with our paid&nbsp;
              <Link onClick={siteClick} to="/services/social-media-marketing-agency-in-India">social media marketing in India.</Link> We help boost the visibility and reach of your
              brand by crafting ads that are perfectly in sync with your
              audience’s user profiles.
            </p>
          </div>
          <div className="digital-growth-item">
            <p className="digital-growth-title">
              <img src={require("./3.png")} alt="Digital Growth" /> &nbsp;Drive
              More Traffic
            </p>
            <p className="digital-growth-desc">
              Our Compresive <Link onClick={siteClick} to="/services/seo-services-in-India">SEO Services in India</Link> comes up with
              different strategies that not only effectively boost up sales
              opportunities but also drives greater traffic to your page by
              delivering exceptional user experience and keeping your
              competitors one step behind the curve.
            </p>
          </div>
          <div className="digital-growth-item">
            <p className="digital-growth-title">
              <img src={require("./4.png")} alt="Digital Growth" />{" "}
              &nbsp;Cost-effective
            </p>
            <p className="digital-growth-desc">
              Compared to traditional marketing channels, digital marketing is
              more cost effective and offers a higher return on investment
              (ROI). Our profound strategies by experts can help you get the
              most out of your marketing budget and achieve better results.
            </p>
          </div>
          <div className="digital-growth-item">
            <p className="digital-growth-title">
              <img src={require("./5.png")} alt="Digital Growth" />{" "}
              &nbsp;Real-time results
            </p>
            <p className="digital-growth-desc">
              Digital marketing campaigns can be tracked and analyzed in
              real-time, by making data-driven decisions and optimizing
              marketing efforts we bring out better outcomes. Our services can
              help you leverage data and analytics to improve your marketing
              performance.
            </p>
          </div>
          <div className="digital-growth-item">
            <p className="digital-growth-title">
              <img src={require("./6.png")} alt="Digital Growth" /> &nbsp;Reach
              Targeted Audience
            </p>
            <p className="digital-growth-desc">
              Our full service digital marketing agency can help you target your
              ideal audience with precision and reach them where they spend most
              of their time online. It can help the brand to generate quality
              leads and increase conversions to the fullest.
            </p>
          </div>
          <div className="digital-growth-item">
            <p className="digital-growth-title">
              <img src={require("./7.png")} alt="Digital Growth" />{" "}
              &nbsp;Customer engagement
            </p>
            <p className="digital-growth-desc">
              Our services can help you engage with your customers through
              various digital channels and create personalized experiences that
              resonate with them. This can help you build long-term
              relationships with your customers and increase customer loyalty.
            </p>
          </div>
          <div className="digital-growth-item">
            <p className="digital-growth-title">
              <img src={require("./8.png")} alt="Digital Growth" />{" "}
              &nbsp;Improve Website Performance
            </p>
            <p className="digital-growth-desc">
              As a leading digital marketing agency,we also focus on improving your website performance to reduce bounce rate, increase traffic, website speed through our <Link onClick={siteClick} to="/services/web-development-services">Web Development Services.</Link>
            </p>
          </div>
          <div className="digital-growth-item">
            <p className="digital-growth-title">
              <img src={require("./9.png")} alt="Digital Growth" /> &nbsp;Better
              ROI
            </p>
            <p className="digital-growth-desc">
              By opting our <Link onClick={siteClick} to="/services/ppc-marketing-agency-in-India">PPC services in India</Link>, you can freely track the performance of your
              running campaigns and adjust your strategies accordingly. This way
              we optimize your marketing spend, increase ROI, and grow your
              business more efficiently.
            </p>
          </div>
          <div className="digital-growth-item">
            <p className="digital-growth-title">
              <img src={require("./10.png")} alt="Digital Growth" />{" "}
              &nbsp;Improve Conversions Rates
            </p>
            <p className="digital-growth-desc">
              Now, you can effortlessly convert visitors to customers by using
              our conversion rate optimization services. We optimize your
              landing page, monitor website speed and improve site navigation to
              skyrocket your band’s conversion rates.
            </p>
          </div>
        </div>
        <div className="agency">
          <div className="agency-about">
            <h3 className="agency-title">
              There Are N Number of Online Marketing Agencies, Why
              <br /> Kingsman Services?
            </h3>
            <p className="agency-desc">
              Wondering why our digital marketing company stands out from crowd?
              Why we can
              <br /> guarantee you effective results? Have a look!
            </p>
          </div>
          <img src={require("./why.png")} alt="why pic" />
        </div>
        <div className="bottom">
          <p className="bottom-left">Expertise</p>
          <p className="bottom-middle">&#62;</p>
          <p className="bottom-right">
            As a digital marketing firm we offer specialized expertise in every
            area such as web development, search engine optimization (SEO),
            social media marketing, email marketing, PPC advertising, and
            content creation.
          </p>
       </div>
        <div className="bottom">
          <p className="bottom-left">Resources</p>
          <p className="bottom-middle">&#62;</p>
          <p className="bottom-right">
            We have access to a wide range of tools and resources that brings
            out the best outcome within time. With right set of resources we can
            provide customized solutions to meet business needs and goals.
          </p>
        </div>
        <div className="bottom">
          <p className="bottom-left">Responsive</p>
          <p className="bottom-middle">&#62;</p>
          <p className="bottom-right">
            We monitor the clients’ websites every now and then and our response
            rate is top-notch. We provide an easy way of communication and rapid
            query resolution to our clients.
          </p>
        </div>
        <div className="bottom">
          <p className="bottom-left">Strict NDA</p>
          <p className="bottom-middle">&#62;</p>
          <p className="bottom-right">
            Our company policy is no matter what prioritize the security and
            privacy of the client. We ensure that the integrity of keeping the
            data confidential should be maintained at any cost.
          </p>
        </div>
        <h3 className="title growth-title bottom-title">
          What Points You Should Keep In Mind While Choosing A Digital Marketing
          Agency For Your
          <br /> Project?
        </h3>
        <div className="choosing-project">
          <p className="choose-project-heading">1&nbsp; Services Offered</p>
          <p className="choose-project-desc">
            Identify your specific needs and choose an agency that offers the
            services you require. Before partnering, make sure you are getting
            the services you are approaching and paying to the digital marketing
            company.
          </p>
        </div>
        <div className="choosing-project">
          <p className="choose-project-heading">2&nbsp;Credibility</p>
          <p className="choose-project-desc">
            Read reviews and testimonials from past clients to get an idea of
            the agency's quality of work, communication, and results after
            short-listing the companies.
          </p>
        </div>
        <div className="choosing-project">
          <p className="choose-project-heading">
            3&nbsp;Communication and Collaboration
          </p>
          <p className="choose-project-desc">
            Ensure that the agency has a clear communication plan and is open to
            collaboration. A good marketing company should keep you informed and
            involved throughout the process.
          </p>
        </div>
        <div className="choosing-project">
          <p className="choose-project-heading">4&nbsp;Budget</p>
          <p className="choose-project-desc">
            Determine your budget and ensure that the agency's pricing aligns
            with your financial plan. However, avoid choosing an agency solely
            based on price as it may compromise the quality of work.
          </p>
        </div>
        <div className="choosing-project">
          <p className="choose-project-heading">5&nbsp;Culture and Values</p>
          <p className="choose-project-desc">
            Look for an agency whose culture and values align with yours. The
            agency should understand your brand values and work towards
            achieving your goals. Additionally try to find out how they deal
            with new clients.
          </p>
        </div>
        <div className="choosing-project">
          <p className="choose-project-heading">6&nbsp;Security</p>
          <p className="choose-project-desc">
            When you shake hands with a digital marketing firm, you give access
            to sensitive information. Make sure that they sign a NDA with valid
            terms and conditions to preserve security breaches and data
            mishandling.
          </p>
        </div>
        <div className="signs">
            <div className="signs-container">
          <h4 className="signs-title">
            5 Signs Telling You Need To Heir A Digital Marketing Agency?
          </h4>
          <p className="signs-desc">
            Digital marketing offers tons of benefits in terms of
            business-building and can be a valuable partner in helping you
            achieve your business goals, increase your brand visibility, and
            reach your target audience. However, many brand owners sometimes are
            not able to realize the value it can bring to their businesses.<br/><br/> The
            scope of a digital marketing company is quite broad and can vary
            based on the services offered, target audience, and industry focus.
            Sometimes businesses new in the market tend to have all of the
            benefits by sourcing in-house bandwidth, but in the process of
            trying to manage it all, they bring more bad than good to the
            business.<br/><br/> So, we come with 5 major signs that indicate that you
            might need to hire a digital marketing agency:
          </p>
          </div>
          <Carousel
          className="digitalCarousel"
          showDots={false}
          infinite={true}
          responsive={responsive}
          autoPlay={true}
        >
          {items}
        </Carousel>
        </div>
        <div className="choosing-project">
          <div className="faq">
          <h5 className="team-heading">
            <div class="container">
              <div class="row">
                <div class="col-md-12 text-center">
                  <h5 class="animate-charcter"> FREQUENTLY ASKED QUESTIONS</h5>
                </div>
              </div>
            </div>
          </h5>
          <div class="faq-container">
            
          <Collapse className="acd" accordion={true} defaultActiveKey={["1"]}>
            <Panel header="What’s a full service digital marketing agency?" key="1">
              <p className="acd-desc">A full-service digital marketing agency is a company that provides a comprehensive range of digital marketing services to its clients. They can provide a comprehensive and cohesive marketing strategy for its clients, helping them achieve their business goals in the digital space.</p>
            </Panel>
            </Collapse>
            <Collapse className="acd" accordion={true} >
            <Panel header="How do I choose an online marketing agency?" key="2">
              <p className="acd-desc">Choosing an online marketing agency requires careful consideration and research. Take the time to evaluate your options, ask questions, and choose an agency that can help you achieve your digital marketing goals.</p>
            </Panel>
            </Collapse>
            <Collapse className="acd" accordion={true} >
            <Panel header="What does a creative digital marketing firm do?" key="3">
              <p className="acd-desc">A creative digital marketing firm specializes in developing and executing creative strategies to promote a brand, product or service in the digital space. They combine marketing expertise, digital tools and creative thinking to help businesses reach their target audience, engage with them and convert them into customers.</p>
            </Panel>
            </Collapse>
            <Collapse className="acd" accordion={true} >
            <Panel header="Why Kingsman Services?" key="4">
              <p className="acd-desc">As a reliable partner, our agency provides the guarantee to overcome the solutions within time and budget. We are responsive to the clients, and they are well aware of the tactics and data that we are using. Our report generation technique shows the growth transparently. And most importantly, we have a strict NDA policy.</p>
            </Panel>
            </Collapse>
            <Collapse className="acd" accordion={true} >
            <Panel header="Which online marketing services are best for my business?" key="4">
              <p className="acd-desc">It's important to remember that each business is unique and may require a different mix of online marketing services. It depends on various factors, such as your industry, target audience, budget, and marketing goals. The most effective strategy for your business based on your specific needs and goals.</p>
            </Panel>
            </Collapse>
          </div>
        </div>
        </div>
      </div>
      <RateCard/>
    </>
  );
}

export default DigitalMarketingServices;
