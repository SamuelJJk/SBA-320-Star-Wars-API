import './App.css';

function App() {
  const getStarWarsData = async()=>{
    const response = await fetch('https://swapi.dev/api');
    const data = await response.json();
    console.log(data)
  }
  getStarWarsData();
  return (
    <div className="App">
    </div>
  );
}

export default App;
