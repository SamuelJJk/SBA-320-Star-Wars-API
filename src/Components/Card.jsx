import React from 'react'
import '../Stylesheets/card.css'

function Card({item}) {
  console.log(item)
  return (
    <div className='card'>
        <div className="title">{item.title || item.name}</div>

    </div>
  )
}

export default Card
