import "./styles/app.css"

import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import ShowWeather from "./components/ShowWeather";
import Form from "./components/Form";
import Weatherforecast from "./components/Weatherforecast";
import ThreeHourForecast from "./components/ThreeHourForecast";


const MY_KEY = "92cb5c99eca6dbce0543fae8e9d3b704";

function App() {
  const [input, setInput] = useState("");
  const [weatherData, setWeatherData] = useState([]);
  const [inputForecast, setInputForecast] = useState("");
  const [weatherDataForecast, setWeatherDataForecast] = useState([]);
  const [wholeData, setWholeData] = useState([])
    
  const weatherSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${input}&appid=${MY_KEY}&lang=de&units=metric`
      );      
      const data = await response.json();
      setWholeData(data)
      const newData = data.list.filter(item=> item.dt_txt.includes("12:00:00"))
      const fiveDayData = newData.map(item=>{
        return {"city":data.city.name, "country":data.city.country, "temp": item.main.temp, "feelsLike":item.main.feels_like, "date": item.dt_txt, "description":item.weather[0].description, "icon": `https://www.openweathermap.org/img/w/${item.weather[0].icon}.png`}
      })
      setWeatherDataForecast(fiveDayData)
      localStorage.setItem("forecast", JSON.stringify(fiveDayData))
      setInputForecast("")

      const response2 = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${MY_KEY}&units=metric&lang=de`
        );
        const data2 = await response2.json();
        console.log("data1:", fiveDayData);
        const temp = data2.main.temp;
        const tempMax = data2.main.temp_max
        const tempMin = data2.main.temp_min
        const feelsLike = data2.main.feels_like
        const description = data2.weather[0].description
        const windSpeed = data2.wind.speed
        const icon = `https://www.openweathermap.org/img/w/${data2.weather[0].icon}.png`
        const obj = { temp, tempMax, tempMin, feelsLike, description, icon, windSpeed }
        const newWeather = [obj]        
        setWeatherData(newWeather)
        localStorage.setItem("weather", JSON.stringify(newWeather))
        console.log(weatherData);
      
    } catch (error) {
      console.log(error);
    }
  };
  
  useEffect(() => {
    const weather = JSON.parse(localStorage.getItem("weather"))
    const weatherCast = JSON.parse(localStorage.getItem("forecast"))
    if(weather !== null){
      setWeatherData(weather)
    }
    if(weatherCast !== null){
      setWeatherDataForecast(weatherCast)
    }
  },[])
  console.log(wholeData);
  return (
    <div className="App">    
        <div>
          <Form weatherSubmitHandler={weatherSubmitHandler} input={input} setInput={setInput} inputForecast={inputForecast} setInputForecast={setInputForecast} />
        </div>  


      <h1>{weatherDataForecast.length ? weatherDataForecast[0].city : null}</h1>
      <div className="weather-container">
        {weatherData.map((data)=><ShowWeather data={data}/>)}
      </div>
      <div className="weather-container">
        <Routes>
          <Route path="/" element={weatherDataForecast.map((data)=><Weatherforecast data={data} weatherDataForecast={weatherDataForecast}/>)}/>          
          <Route path="/:date" element={<ThreeHourForecast wholeData={wholeData}/>}/>
        </Routes>
      </div>

    </div>
  );
}

export default App;