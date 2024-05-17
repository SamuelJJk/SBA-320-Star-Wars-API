import React from 'react'
import '../Stylesheets/card.css'

function Card({subject,name}) {
  return (
    <div className='card'>
        <div className="title">{name}</div>
      <div className="imageWindow"></div>
      <div className="textWindow"></div>

    </div>
  )
}

export default Card
