import React from 'react'
import Navbar from '../Components/Navbar'
import SearchBar from '../Components/SearchBar'
import Display from '../Components/Display'
import Dropdown from '../Components/Dropdown'
import Hero from '../Components/Hero'

function Main({category,subject}) {
  // console.log(subject)
  return (
    <div>
      <Navbar />
      <Hero category={category}/>
      <Display subject={subject}/>
    </div>
  )
}

export default Main
