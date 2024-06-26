import './App.css';
import {Routes,Route,createBrowserRouter,createRoutesFromElements,RouterProvider, Router} from 'react-router-dom'
import Main from './Pages/Main';
import Bios from './Pages/Bios';
import { useState,useEffect,useContext } from 'react';


function App() {
  const [subject,setSubject] = useState(null)
  const getCategory = async(searchTerm)=>{
    try{
      const response = await fetch(`https://swapi.dev/api/${searchTerm}`);
      const data = await response.json();
      // console.log(data.results)
      setSubject(data.results)
    } catch (e){
      console.error(e)
    }
  }
  useEffect(() => {
    getCategory("films");
  }, []);
// console.log(subject)
  return (
    <div className="App">
      <Routes>
        {subject &&(
          <Route path='/' element={<Main category={getCategory} subject={subject}/>} />
        )}
        <Route path='/Bios' element={<Bios/>} />
      </Routes>
    </div>
  );
}

export default App;
