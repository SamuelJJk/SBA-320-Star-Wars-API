import React,{useState} from 'react'
import '../Stylesheets/dropdown.css'

function Dropdown({category}) {
    const [selectedCategory, setSelectedCategory] = useState(''); 
    const handleCategoryChange = (event) => {
      const selectedValue = event.target.value;
      setSelectedCategory(selectedValue);
      category(selectedValue); 
    };
  return (
    <div className='dropdownList'>
      <select className='selections'value={selectedCategory} onChange={handleCategoryChange}>
          <option value="films">Films</option>
          <option value="people">People</option>
          <option value="planets">Planets</option>
          <option value="species">Species</option>
          <option value="starships">Starships</option>
          <option value="vehicles">Vehicles</option>
      </select>
    </div>
  )
}

export default Dropdown
