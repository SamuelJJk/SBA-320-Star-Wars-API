import React from 'react'
import '../Stylesheets/display.css'
import Card from './Card'

function Display({subject}) {
    // console.log(subject)
  return (
    <div className='display'>
      <div className="catTitle">Genre</div> 
      <div className="cardContainer"> 
        {subject.map((item)=>{
            return <Card subject={subject}/>
        })}
      </div> 
    </div>
  )
}

export default Display
