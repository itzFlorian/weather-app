import { useState, useEffect } from "react";
import "./styles/app.css"
import ShowWeather from "./components/ShowWeather";
import Form from "./components/Form";
import Weatherforecast from "./components/Weatherforecast";


const MY_KEY = "92cb5c99eca6dbce0543fae8e9d3b704";

function App() {
  const [input, setInput] = useState("");
  const [weatherData, setWeatherData] = useState([]);
  const [inputForecast, setInputForecast] = useState("");
  const [weatherDataForecast, setWeatherDataForecast] = useState([]);
  
  const weatherSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${MY_KEY}&units=metric&lang=de`
        );
        const data = await response.json();
        console.log(data);
        const temperatur = data.main.temp;
        const city = data.name;
        const feelsLike = data.main.feels_like
        const description = data.weather[0].description
        const country = data.sys.country
        const obj = { temperatur, city, feelsLike, description, country }
        const newWeather = [...weatherData, obj]
        setWeatherData(newWeather)
        localStorage.setItem("weather", JSON.stringify(newWeather))
        
      setInput("")
    } catch (error) {
      console.log(error);
    }
  };
  
  const weatherForecastHandler = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${inputForecast}&appid=${MY_KEY}&lang=de&units=metric`);      
      const data = await response.json();
      // console.log(data);
      const newData = data.list.filter(item=> item.dt_txt.includes("12:00:00"))
      const fiveDayData = newData.map(item=>{
        const icon = `https://www.openweathermap.org/img/w/${item.weather[0].icon}.png`
        return {"city":data.city.name, "country":data.city.country, "temp": item.main.temp, "feelsLike":item.main.feels_like, "date": item.dt_txt, "description":item.weather[0].description, "icon": `https://www.openweathermap.org/img/w/${item.weather[0].icon}.png`}
      })
      setWeatherDataForecast(fiveDayData)
      localStorage.setItem("forecast", JSON.stringify(fiveDayData))
      setInputForecast("")
      
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
  
  if(weatherData.length >= 6){
    setWeatherData(weatherData.slice(1)) 
  }

  return (
    <div className="App">    
        <div>
          <Form weatherSubmitHandler={weatherSubmitHandler} input={input} setInput={setInput} weatherForecastHandler={weatherForecastHandler} inputForecast={inputForecast} setInputForecast={setInputForecast} />
        </div>  


      {weatherData.length ? <h1>Aktuelles Wetter</h1> : null}
      <div className="show-weather-ul">
        {weatherData.map((data)=><ShowWeather data={data}/>)}
      </div>

{/* {weatherDataForecast.length ? <h1>{`Vorhersage der nächsten 4 Tage`}</h1> : null} */}
      {console.log(weatherDataForecast)};
      <h1>{weatherDataForecast.length ? weatherDataForecast[0].city : null}</h1>
      <div className="weather-container">
        {weatherDataForecast.map((data)=><Weatherforecast data={data}/>)}
      </div>

    </div>
  );
}

export default App;