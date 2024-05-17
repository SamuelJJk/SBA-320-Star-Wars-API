import React from 'react'
import Navbar from '../Components/Navbar'
import SearchBar from '../Components/SearchBar'
import Display from '../Components/Display'

function Main({category,subject}) {
  return (
    <div>
      <Navbar />
      <SearchBar category={category}/>
      <Display subject={subject}/>
    </div>
  )
}

export default Main
