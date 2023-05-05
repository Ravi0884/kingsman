import React, { useState } from "react";
import "./career.css";

function Career() {
  const [showDesc1, setShowDesc1] = useState(false);
  const [showDesc2, setShowDesc2] = useState(false);
  const [showDesc3, setShowDesc3] = useState(false);
  const [showDesc4, setShowDesc4] = useState(false);
  const [showDesc5, setShowDesc5] = useState(false);
  const [showDesc6, setShowDesc6] = useState(false);
  return (
    <>
      <div className="contactUs">
        <h3 className="team-heading">
          <div class="container">
            <div class="row">
              <div class="col-md-12 text-center">
                <h3 class="animate-charcter"> CAREER</h3>
              </div>
            </div>
          </div>
        </h3>
        <div className="digital-cards">
          <div className="digital-card career-card">
            <img
              className="digital-card-img"
              src={require("../DigitalMarketing/digital.png")}
              alt="digital marketing"
            />
            <p className="digital-card-title">SEO</p>
            <p className="digital-card-desc">
              We are looking for Sr. SEO Executive profiles. Please find below
              is the JD: Job Description: ● Ensure that all websites and
              internet properties under your influence have been technically
              optimised to attract and engage those visitors that closely match
              the agreed profile of the target audience ● Create the necessary
              technical architecture
              
                ● Build systems and protocols internally that ensure all content
                <span className={showDesc1 ? "show-desc" : "desc-none"}>
                is optimised across all platforms and user experiences
                
                (websites, mobile, social, video, blogs, retail portals etc) ●
                Help set, and work to, performance indicators for SEO that
                everyone understands and which complement overall marketing and
                business objectives ● Promote both offsite and onsite activities
                and also the interactions that build ranking, profile and
                traffic. ● Checking in with the team to see if they have
                completed their assigned tasks and outreach. ● Reporting
                progress to clients. ● Performing keyword research to examine
                new opportunities. ● Overseeing the production of supporting
                content. ● Evaluating web analytics reports to assess strategy
                performance. ● Working in conjunction with the team & coming up
                with comprehensive SEO strategies for new clients. ● Good
                Communication Verbal & Writing Skills Experience: Minimum 2 Year
                Location: Patna Job Type: Full-time Salary: ₹15,000.00 -
                ₹30,000.00 per month Benefits: Flexible schedule Schedule: Day
                shift Supplemental pay types: Performance bonus Ability to
                commute/relocate: Patna
              </span>
            </p>
            <div className="career-apply">
            <a className="career-toggle apply-now" href="/">
              Apply Now
            </a>

            <p className="career-toggle" onClick={() => setShowDesc1(!showDesc1)}>
              {!showDesc1 ? "Show Desc.." : "Hide Desc.."}
            </p>
            </div>
          </div>
          <div className="digital-card career-card">
            <img
              className="digital-card-img"
              src={require("../DigitalMarketing/social-media.png")}
              alt="digital marketing"
            />
            <p className="digital-card-title">PPC Job Description</p>
            <p className="digital-card-desc">
              Full Job Description Kingsman Space & Services Pvt. Ltd. Pvt Ltd
              is looking for a senior Google Ad Campaign Manager with solid
              expertise in Google Ads Campaign Management. The hired candidate
              will be joining our Online Advertising team. We are looking for an
              exceptional individual with a desire for continuous improvement
              and solid experience in digital ad campaign management (PPC
              Campaign management,{" "}
              <span className={showDesc2 ? "show-desc" : "desc-none"}>
                Google Ads management and campaign management). The ability to
                quickly learn the new advertising platforms and take advantage
                of the same by creating effective campaigns on new and upcoming
                platforms beyond Google and Facebook is an essential skill.
                Responsibilities and Duties Discuss with clients and understand
                their business requirements Create and optimise targeted Google
                Ads campaigns Identify, learn and utilise new advertising
                platforms Continuously monitor and tune Ad campaigns on all
                platforms Closely follow the client accounts to ensure they get
                the best value for their advertising budget Follow up with the
                clients to ensure they are happy with the results Qualifications
                and Skills At least 2 years of prior experience in paid campaign
                management on Google Ads and other PPC programs is mandatory.
                Prior experience in a digital marketing agency where you have
                managed PPC campaigns for multiple clients is another mandatory
                requirement. We are looking for a highly experienced campaign
                specialist. People who have just the basic experience in
                campaign management need not apply. Benefits We are a leading
                digital marketing company in India. Real estate & Edtech
                campaign , Ecommerce & Shopping Campaign management will be a
                great advantage. Our salary scale will be on par with the
                industry rates. Also, we offer a fun-filled, informal work
                environment. Schedule: Day shift Supplemental pay types:
                Performance bonus Ability to commute/relocate: Patna Experience:
                Digital Marketing: 3 years (Required) Google Ads: 2 years
                (Required) Facebook Advertising: 2 year (Required) Working in a
                digital marketing agency: 1 years (Required)
              </span>
            </p>
            <div className="career-apply">
            <a className="career-toggle apply-now" href="/">
              Apply Now
            </a>
            <p className="career-toggle" onClick={() => setShowDesc2(!showDesc2)}>
              {!showDesc2 ? "Show Desc.." : "Hide Desc.."}
            </p>
            </div>
          </div>
          <div className="digital-card career-card">
            <img
              className="digital-card-img"
              src={require("../DigitalMarketing/social-media.png")}
              alt="digital marketing"
            />
            <p className="digital-card-title">PPC Job Description</p>
            <p className="digital-card-desc">
              Full Job Description Kingsman Space & Services Pvt. Ltd. Pvt Ltd
              is looking for a senior Google Ad Campaign Manager with solid
              expertise in Google Ads Campaign Management. The hired candidate
              will be joining our Online Advertising team. We are looking for an
              exceptional individual with a desire for continuous improvement
              and solid experience in digital ad campaign management (PPC
              Campaign management,{" "}
              <span className={showDesc3 ? "show-desc" : "desc-none"}>
                Google Ads management and campaign management). The ability to
                quickly learn the new advertising platforms and take advantage
                of the same by creating effective campaigns on new and upcoming
                platforms beyond Google and Facebook is an essential skill.
                Responsibilities and Duties Discuss with clients and understand
                their business requirements Create and optimise targeted Google
                Ads campaigns Identify, learn and utilise new advertising
                platforms Continuously monitor and tune Ad campaigns on all
                platforms Closely follow the client accounts to ensure they get
                the best value for their advertising budget Follow up with the
                clients to ensure they are happy with the results Qualifications
                and Skills At least 2 years of prior experience in paid campaign
                management on Google Ads and other PPC programs is mandatory.
                Prior experience in a digital marketing agency where you have
                managed PPC campaigns for multiple clients is another mandatory
                requirement. We are looking for a highly experienced campaign
                specialist. People who have just the basic experience in
                campaign management need not apply. Benefits We are a leading
                digital marketing company in India. Real estate & Edtech
                campaign , Ecommerce & Shopping Campaign management will be a
                great advantage. Our salary scale will be on par with the
                industry rates. Also, we offer a fun-filled, informal work
                environment. Schedule: Day shift Supplemental pay types:
                Performance bonus Ability to commute/relocate: Patna Experience:
                Digital Marketing: 3 years (Required) Google Ads: 2 years
                (Required) Facebook Advertising: 2 year (Required) Working in a
                digital marketing agency: 1 years (Required)
              </span>
            </p>
            <div className="career-apply">
            <a className="career-toggle apply-now" href="/">
              Apply Now
            </a>
            <p className="career-toggle" onClick={() => setShowDesc3(!showDesc3)}>
              {!showDesc3 ? "Show Desc.." : "Hide Desc.."}
            </p>
            </div>
          </div>
          <div className="digital-card career-card">
            <img
              className="digital-card-img"
              src={require("../DigitalMarketing/social-media.png")}
              alt="digital marketing"
            />
            <p className="digital-card-title">PPC Job Description</p>
            <p className="digital-card-desc">
              Full Job Description Kingsman Space & Services Pvt. Ltd. Pvt Ltd
              is looking for a senior Google Ad Campaign Manager with solid
              expertise in Google Ads Campaign Management. The hired candidate
              will be joining our Online Advertising team. We are looking for an
              exceptional individual with a desire for continuous improvement
              and solid experience in digital ad campaign management (PPC
              Campaign management,{" "}
              <span className={showDesc4 ? "show-desc" : "desc-none"}>
                Google Ads management and campaign management). The ability to
                quickly learn the new advertising platforms and take advantage
                of the same by creating effective campaigns on new and upcoming
                platforms beyond Google and Facebook is an essential skill.
                Responsibilities and Duties Discuss with clients and understand
                their business requirements Create and optimise targeted Google
                Ads campaigns Identify, learn and utilise new advertising
                platforms Continuously monitor and tune Ad campaigns on all
                platforms Closely follow the client accounts to ensure they get
                the best value for their advertising budget Follow up with the
                clients to ensure they are happy with the results Qualifications
                and Skills At least 2 years of prior experience in paid campaign
                management on Google Ads and other PPC programs is mandatory.
                Prior experience in a digital marketing agency where you have
                managed PPC campaigns for multiple clients is another mandatory
                requirement. We are looking for a highly experienced campaign
                specialist. People who have just the basic experience in
                campaign management need not apply. Benefits We are a leading
                digital marketing company in India. Real estate & Edtech
                campaign , Ecommerce & Shopping Campaign management will be a
                great advantage. Our salary scale will be on par with the
                industry rates. Also, we offer a fun-filled, informal work
                environment. Schedule: Day shift Supplemental pay types:
                Performance bonus Ability to commute/relocate: Patna Experience:
                Digital Marketing: 3 years (Required) Google Ads: 2 years
                (Required) Facebook Advertising: 2 year (Required) Working in a
                digital marketing agency: 1 years (Required)
              </span>
            </p>
            <div className="career-apply">
            <a className="career-toggle apply-now" href="/">
              Apply Now
            </a>
            <p className="career-toggle" onClick={() => setShowDesc4(!showDesc4)}>
              {!showDesc4 ? "Show Desc.." : "Hide Desc.."}
            </p>
            </div>
          </div>
          <div className="digital-card career-card">
            <img
              className="digital-card-img"
              src={require("../DigitalMarketing/social-media.png")}
              alt="digital marketing"
            />
            <p className="digital-card-title">PPC Job Description</p>
            <p className="digital-card-desc">
              Full Job Description Kingsman Space & Services Pvt. Ltd. Pvt Ltd
              is looking for a senior Google Ad Campaign Manager with solid
              expertise in Google Ads Campaign Management. The hired candidate
              will be joining our Online Advertising team. We are looking for an
              exceptional individual with a desire for continuous improvement
              and solid experience in digital ad campaign management (PPC
              Campaign management,{" "}
              <span className={showDesc5 ? "show-desc" : "desc-none"}>
                Google Ads management and campaign management). The ability to
                quickly learn the new advertising platforms and take advantage
                of the same by creating effective campaigns on new and upcoming
                platforms beyond Google and Facebook is an essential skill.
                Responsibilities and Duties Discuss with clients and understand
                their business requirements Create and optimise targeted Google
                Ads campaigns Identify, learn and utilise new advertising
                platforms Continuously monitor and tune Ad campaigns on all
                platforms Closely follow the client accounts to ensure they get
                the best value for their advertising budget Follow up with the
                clients to ensure they are happy with the results Qualifications
                and Skills At least 2 years of prior experience in paid campaign
                management on Google Ads and other PPC programs is mandatory.
                Prior experience in a digital marketing agency where you have
                managed PPC campaigns for multiple clients is another mandatory
                requirement. We are looking for a highly experienced campaign
                specialist. People who have just the basic experience in
                campaign management need not apply. Benefits We are a leading
                digital marketing company in India. Real estate & Edtech
                campaign , Ecommerce & Shopping Campaign management will be a
                great advantage. Our salary scale will be on par with the
                industry rates. Also, we offer a fun-filled, informal work
                environment. Schedule: Day shift Supplemental pay types:
                Performance bonus Ability to commute/relocate: Patna Experience:
                Digital Marketing: 3 years (Required) Google Ads: 2 years
                (Required) Facebook Advertising: 2 year (Required) Working in a
                digital marketing agency: 1 years (Required)
              </span>
            </p>
            <div className="career-apply">
            <a className="career-toggle apply-now" href="/">
              Apply Now
            </a>
            <p className="career-toggle" onClick={() => setShowDesc5(!showDesc5)}>
              {!showDesc5 ? "Show Desc.." : "Hide Desc.."}
            </p>
            </div>
          </div>
          <div className="digital-card career-card">
            <img
              className="digital-card-img"
              src={require("../DigitalMarketing/social-media.png")}
              alt="digital marketing"
            />
            <p className="digital-card-title">PPC Job Description</p>
            <p className="digital-card-desc">
              Full Job Description Kingsman Space & Services Pvt. Ltd. Pvt Ltd
              is looking for a senior Google Ad Campaign Manager with solid
              expertise in Google Ads Campaign Management. The hired candidate
              will be joining our Online Advertising team. We are looking for an
              exceptional individual with a desire for continuous improvement
              and solid experience in digital ad campaign management (PPC
              Campaign management,{" "}
              <span className={showDesc6 ? "show-desc" : "desc-none"}>
                Google Ads management and campaign management). The ability to
                quickly learn the new advertising platforms and take advantage
                of the same by creating effective campaigns on new and upcoming
                platforms beyond Google and Facebook is an essential skill.
                Responsibilities and Duties Discuss with clients and understand
                their business requirements Create and optimise targeted Google
                Ads campaigns Identify, learn and utilise new advertising
                platforms Continuously monitor and tune Ad campaigns on all
                platforms Closely follow the client accounts to ensure they get
                the best value for their advertising budget Follow up with the
                clients to ensure they are happy with the results Qualifications
                and Skills At least 2 years of prior experience in paid campaign
                management on Google Ads and other PPC programs is mandatory.
                Prior experience in a digital marketing agency where you have
                managed PPC campaigns for multiple clients is another mandatory
                requirement. We are looking for a highly experienced campaign
                specialist. People who have just the basic experience in
                campaign management need not apply. Benefits We are a leading
                digital marketing company in India. Real estate & Edtech
                campaign , Ecommerce & Shopping Campaign management will be a
                great advantage. Our salary scale will be on par with the
                industry rates. Also, we offer a fun-filled, informal work
                environment. Schedule: Day shift Supplemental pay types:
                Performance bonus Ability to commute/relocate: Patna Experience:
                Digital Marketing: 3 years (Required) Google Ads: 2 years
                (Required) Facebook Advertising: 2 year (Required) Working in a
                digital marketing agency: 1 years (Required)
              </span>
            </p>
            <div className="career-apply">
            <a className="career-toggle apply-now" href="/">
              Apply Now
            </a>
            <p className="career-toggle" onClick={() => setShowDesc6(!showDesc6)}>
              {!showDesc6 ? "Show Desc.." : "Hide Desc.."}
            </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Career;
