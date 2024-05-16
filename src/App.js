import './App.css';
import {Routes,Route,createBrowserRouter,createRoutesFromElements,RouterProvider, Router} from 'react-router-dom'
import Main from './Pages/Main';
import Bios from './Pages/Bios';


function App() {
  const getStarWarsData = async()=>{
    const response = await fetch('https://swapi.dev/api');
    const data = await response.json();
    console.log(data)
  }
  getStarWarsData();
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
