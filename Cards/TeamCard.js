import React from 'react'
import './team.css'
function TeamCard(props) {
  return (
   <>
   <div className="teamCard">
              <img src={require(`./${props.img}`)}  alt="web development" />
              <p className="card-title">{props.name}</p>
              <p className="card-desc">{props.desi}</p>
   </div>
   </>
  )
}

export default TeamCard