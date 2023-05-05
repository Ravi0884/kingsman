import React, { useEffect} from "react";
import "./aboutus.css";
import AOS from "aos";
import 'aos/dist/aos.css' 
import { Helmet } from "react-helmet";

function AboutUs() {
  useEffect(()=>{
    AOS.init({duration:2000})
  },[])
  // const [name, setName] = useState();
  // const [number, setNumber] = useState();
  // const [email, setEmail] = useState();
  return (
    <>
    <Helmet>
      <title>Kingsman Services-About and Our Story</title>
    </Helmet>
      <div className="about">
        <p className="team-heading abt-cont">
          <div class="container ">
            <div class="row">
              <div class="col-md-12 text-center">
                <p class="animate-charcter">OUR STORY</p>
              </div>
            </div>
          </div>
        </p>
        <div className="about-container">
          <img src={require("../Home/about.png")} alt="about us-Kingsman-Services" />
          <div className="about-desc">
            <h1 className="about-title">Our Stories</h1>
            <p className="about-description">
              We are an armed force of skilled, talented, creative, and
              well-experienced specialists dedicated to deliver high-quality
              results within the timeline. Our main objective is to be there for
              our client at every point of the hindrance.
              <br />
              <br />
              From web development to digital marketing, we handle all the
              assignments with a breeze. Whether you are looking for short-term
              projects or long-term assignments, we are here to deal with all of
              them. Our services cover digital marketing, web development, and
              e-commerce assistance.
              <br />
              <br />
              Our agreement is fully flexible and designed to suit your
              requirements. With no hidden charges, you only need to pay for
              what you have hired us for. We dedicatedly focus on delivering
              high-quality services at a fractional cost. Get connected with us
              to know more.
            </p>
          </div>
        </div>
        {/* <div className="about-container">
          <div className="about-desc about-services-desc">
            <h2 className="about-title ">Services by Kingsman</h2>
            <p className="about-description ">
              <div className="footer-item services-desc">
                <p className="footer-link services-link">
                  ⇢&nbsp; Digital Marketing
                </p>
                <p className="footer-link services-link">
                  ⇢&nbsp; Web Development
                </p>
                <p className="footer-link services-link">
                  ⇢&nbsp; Ecommerce Services
                </p>
                <p className="footer-link services-link">
                  ⇢&nbsp; Pay Per Click
                </p>
                <p className="footer-link services-link">
                  ⇢&nbsp; Social Media Marketing
                </p>
              </div>
            </p>
          </div>
          <div className="contact-form newContact newsletter">
            <p className="newsletter-title">Newsletter Signup</p>
            <input
              placeholder="Your Name.."
              className="form-control"
              value={name}
              onchange={(e) => setName(e.target.value)}
            />
            <input
              placeholder="Phone Number.."
              className="form-control"
              value={number}
              onchange={(e) => setNumber(e.target.value)}
            />
            <input
              placeholder="Email Id.."
              className="form-control"
              value={email}
              onchange={(e) => setEmail(e.target.value)}
            />
            <button className="price-btn new-btn">Submit</button>
          </div>
        </div> */}
        <div className="founder-container">
          <h2 className="founder">Meet Our Founder</h2>
          <img src={require("../Cards/male.png")} alt="Founder pic-Kingsman-Services" />
          <p className="founder-talk" data-aos="fade-up">
            <span className="comma">❝</span>
            Our agreement is fully flexible and designed to suit your
            requirements. With no hidden charges, you only need to pay for what
            you have hired us for. We dedicatedly focus on delivering
            high-quality services at a fractional cost. Get connected with us to
            know more.<span className="comma">❞</span>
          </p>
        </div>
        <div className="provides">
          <h3 className="provider-heading">How Kingsman Services Work</h3>
          <div className="provider-card">
            <div className="provider" data-aos="zoom-in">
              <h4 className="provider-title">UNKNOT</h4>
              <p className="provider-desc">
              Unknotting is one of the toughest tasks to master, and we have a lot of questions. Asking probing questions that help clarify all the essentials of your business will help establish a clear position for your brand. Our thorough examination may provide new insight, direction, and business growth.
              </p>
            </div>
            <div className="provider" data-aos="zoom-in">
              <h4 className="provider-title">ALIGN</h4>
              <p className="provider-desc">
              Your unique position should align with the market that you rely on to succeed. Alignment is the acceptance of working in the same direction to meet all your business development needs.
              </p>
            </div>
            <div className="provider" data-aos="zoom-in">
              <h4 className="provider-title">MARKET</h4>
              <p className="provider-desc">
              Market with an image that is loved by your customers and a plan to get them through the noise. Kingsman Services integrates the right strategies that are based on customer needs, data-driven, and technologically adept.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
