import "../styles/weatherForecast.css"
const Weatherforecast = ({data})=>{
  const date = data.date.slice(0,10).split("-").reverse().join(".")

  return (
    // <li>      
    //   <p>{`die Temperatur in ${data.city} am ${date} ist ${data.temp} °C (gefühlt ${data.feelsLike} °C)`}</p>
    //   <p>{`insgesamt kann man das Wetter als ${data.description} bezeichnen! `}</p>
    //   <img src={data.icon} alt="wettericon" />
    // </li>
    <>
    <div className="weather-element">
      <div className="date">{date}</div>
      <img src={data.icon} alt="weather-img" />
      <div className="temp">{`${data.temp}°C`}</div>
      <div className="feel-temp">{`gefühlt(${data.feelsLike})`}</div>
    </div>    
    </>
  )
}

export default Weatherforecast







