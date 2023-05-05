import React from 'react'
import './Cards.css'
import { Link } from "react-router-dom";

function Card(props) {
  function siteClick() {
    window.scrollTo(0, 0);
  }
  return (
    <>
         <div className="card">
              <img src={require(`./${props.img}`)}  alt="web development" />
              <p className="card-title">{props.title}</p>
              <p className="card-desc">{props.desc}</p>
              <Link onClick={siteClick} className="nav-link" to={props.link}>
              <button className="btn">Read More</button>
              </Link>
          </div>
    </>
  )
}

export default Card