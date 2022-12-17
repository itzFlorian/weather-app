const ShowWeather = ({data, wholeData})=>{
const week = ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"]
const date = new Date()
const day = date.getDay()
const today = week[day]

  return (  
    <>
    <div className="weather-element-container">
      <div className="weather-ele1">
        <h2 className="date center-txt">{`${today}, aktuell`}</h2>
        <div>{data.description}</div>
        <img src={data.icon} alt="weather-img" />
        <div>
          <div className="temp">{`${data.temp}°C`}</div>
          <div className="feel-temp">{`gefühlt(${data.feelsLike}°C)`}</div>
        </div>
      </div>
      <div className="weather-ele2">
        <p>{`Höchsttemperatur: ${data.tempMax}°C`}</p>
        <p>{`Mindesttemperatur: ${data.tempMin}°C`}</p>
        <p>{`Windgeschwindigkeit: ${data.windSpeed}km/h`}</p>
      </div>
    </div>
    <div>
      <div>{}</div>
    </div>  
    
    </>    

  )
}

export default ShowWeather