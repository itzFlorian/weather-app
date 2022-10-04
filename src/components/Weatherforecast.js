import "../styles/weatherForecast.css"
const Weatherforecast = ({data})=>{
  const dateToString = data.date.slice(0,10).split("-").reverse().join(".")
  const week = ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"]
  const date = new Date(data.date)
  const day = date.getDay()
  const today = week[day] 
  return (
    // <li>      
    //   <p>{`die Temperatur in ${data.city} am ${date} ist ${data.temp} °C (gefühlt ${data.feelsLike} °C)`}</p>
    //   <p>{`insgesamt kann man das Wetter als ${data.description} bezeichnen! `}</p>
    //   <img src={data.icon} alt="wettericon" />
    // </li>
    <>
    <div className="weather-element">
      <div className="date">{`${today}, ${dateToString}`}</div>
      <img src={data.icon} alt="weather-img" />
      <div className="temp">{`${data.temp}°C`}</div>
      <div className="feel-temp">{`gefühlt(${data.feelsLike})`}</div>
    </div>    
    </>
  )
}

export default Weatherforecast







