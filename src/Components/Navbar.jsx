import React from 'react'
import '../Stylesheets/Navbar.css'

function Navbar() {
  return (
    <div className='nav'>
      <div className="left"></div>
      <div className="middle">
        <img src="https://i.pinimg.com/originals/c7/b6/0d/c7b60d2791dae5f6f38675c75a2eb5fc.png" alt="" className="logo" />
        <div className="siteTitle">Galactic <br />Archives</div>
      </div>
      <div className="right"></div>
    </div>
  )
}

export default Navbar
