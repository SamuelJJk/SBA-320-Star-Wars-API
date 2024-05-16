import React from 'react'
import Navbar from '../Components/Navbar'
import SearchBar from '../Components/SearchBar'

function Main({category}) {
  return (
    <div>
      <Navbar />
      <SearchBar category={category}/>
    </div>
  )
}

export default Main
