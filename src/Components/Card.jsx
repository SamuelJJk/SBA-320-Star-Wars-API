import React from 'react'
import '../Stylesheets/card.css'

function Card({item}) {
  console.log(item)
  return (
    <div className='card'>
        <div className="title">{item.title || item.name}</div>
      <div className="imageWindow"></div>
      <div className="textWindow"></div>

    </div>
  )
}

export default Card
