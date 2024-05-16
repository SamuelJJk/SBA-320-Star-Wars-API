import './App.css';
import {Routes,Route,createBrowserRouter,createRoutesFromElements,RouterProvider, Router} from 'react-router-dom'
import Main from './Pages/Main';
import Bios from './Pages/Bios';
import { useState,useEffect } from 'react';


function App() {
  const [subject,setSubject] = useState(null)

  const getStarWarsData = async(searchTerm)=>{
    try{
      const response = await fetch(`https://swapi.dev/api/${searchTerm}`);
      const data = await response.json();
      console.log(data)
      setSubject(data)
    } catch (e){
      console.error(e)
    }
  }

  useEffect(() => {
    getStarWarsData("films");
  }, []);

  
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main/>} />
        <Route path='/Bios' element={<Bios/>} />
      </Routes>
    </div>
  );
}

export default App;
