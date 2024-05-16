import React from 'react'
import '../Stylesheets/searchbar.css'

function SearchBar() {
  return (
    <div className='searchbar'>
      <div className="dropdown">
        <select>
          <option value="films">films</option>
          <option value="people">people</option>
          <option value="planets">planets</option>
          <option value="species">species</option>
          <option value="starships">starships</option>
          <option value="vehicles">vehicles</option>
        </select>
      </div>  
      <input className='search' type="text" name="" id="" placeholder='Search' />
    </div>
  )
}

export default SearchBar
