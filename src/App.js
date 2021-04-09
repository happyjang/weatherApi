import { useState, useEffect } from 'react';
import './App.css';

function App() {
  // https://openweathermap.org/api
  const [clicked, setClicked] = useState(false);
  const [zip, setZip] = useState('90502')
  const apiAdress = 'https///api.openweathermap.org/data/2.5/weather?zip=${zip}$units=imperial&appid=${key}'
  
  useEffect(()=>{
    const fecthTodaysWeather = async () => {
      const result = await axious(apiAdress)
      console.log(results);
    };
    fecthTodaysWeather();
  }, []);

  return (
    <div className="Weather">
      <div className="fetchTodaysWeather__container"></div>
      <button onClick={() => setClicked(clicked)}>Click</button>
      <input
        onChange={(e) => {
          setZip(e.target.value);
        }}
        ></input>
        value={zip}
      
      
    </div>
  );
}

export default App;
