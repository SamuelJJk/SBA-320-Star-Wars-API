import React from 'react'
import '../Stylesheets/display.css'
import Card from './Card'

function Display({subject}) {
    // console.log(subject)
  return (
    <div className='display'>
      <div className="cardContainer"> 
        {subject.map((item,index)=>{
            return <Card item={item}/>
        })}
      </div> 
    </div>
  )
}

export default Display
