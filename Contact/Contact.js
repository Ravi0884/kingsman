import React, { useState } from 'react'
import axios from 'axios'
import '../RateCard/ratecard.css'

function Contact() {
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')
  const [email, setEmail] = useState('')
  const [msg, setMsg] = useState('')
  const [success,setSuccess] = useState(false)
  const [error,setError] = useState(false)
  const handleContact = async (event) => {
    event.preventDefault();
    
    if (email !== "" && number.length===10 && name !== "") {
      setSuccess(true)
      const parsedData = {
        name: name,
        mobile: number,
        email: email,
        message: msg
      }
      await axios.post("http://localhost:8000/api/inquery", parsedData).then((res) => {
      }).catch(function (error) {
        console.log(error);
      })
      setName("")
    setNumber("")
    setEmail("")
    setMsg("")
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
      <div className="contactUs">
        <h3 className="team-heading">
          <div class="container">
            <div class="row">
              <div class="col-md-12 text-center">
                <h3 class="animate-charcter"> CONTACT</h3>
              </div>
            </div>
          </div>
        </h3>
        <div className="contact">
          <img className="contact-img" src={require('../Home/contact.jpg')} alt="contact us" />
          <div className="contact-form newContact">
            <input type="text" placeholder="Your Name.." className="form-control"
              value={name} onChange={(e) => setName(e.target.value)} />
            <input type="number" placeholder="Phone Number.." className="form-control" value={number} onChange={(e) => setNumber(e.target.value)} />
            <input type="email" placeholder="Email Id.." className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input placeholder="Write Somethings..." className="form-control msg" value={msg} onChange={(e) => setMsg(e.target.value)} />
            <button onClick={handleContact} className="price-btn new-btn">Submit</button>
            <p className={error?"error-hide":"error-show"} >Please provide a valid details</p>
          </div>
        </div>
      </div>
     
    </>
  )
}

export default Contact