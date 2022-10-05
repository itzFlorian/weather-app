import "../styles/weatherForecast.css"
import { Link } from "react-router-dom"

const Weatherforecast = ({data})=>{
  const dateToString = data.date.slice(0,10).split("-").reverse().join(".")
  const week = ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"]
  const date = new Date(data.date)
  const day = date.getDay()
  const today = week[day] 
  return (
      <div className="weather-element">
        <Link to={`/${data.date}`}><div className="date">{`${today}, ${dateToString}`}</div></Link> 
        <img src={data.icon} alt="weather-img" />
        <div className="temp">{`${data.temp}°C`}</div>
        <div className="feel-temp">{`gefühlt(${data.feelsLike})`}</div>
      </div>      

  )
}

export default Weatherforecast







