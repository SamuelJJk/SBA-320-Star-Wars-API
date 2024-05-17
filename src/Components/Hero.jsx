import React from 'react'
import '../Stylesheets/hero.css'
import Dropdown from './Dropdown'

function Hero({category}) {
  return (
    <div className='hero'>
    <div class="heading-container">
        <div class="heading">Welcome to the Star Wars collections</div>
        <div class="subheading">Choose a Category to view list.</div>
    </div>
      <Dropdown category={category}/>
    </div>
  )
}

export default Hero
