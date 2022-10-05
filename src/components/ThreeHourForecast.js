import { useParams } from "react-router-dom";

const ThreeHourForecast = ({data, wholeData}) => {
  const {date} = useParams()
  const newDate = date.slice(0,10)
  const dayList = wholeData.list.filter(item => item.dt_txt.includes(newDate))
  const week = ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"]
  const dateToday = new Date(dayList[0].dt_txt)
  const day = dateToday.getDay()
  const today = week[day] 
  const dateNow = dayList[0].dt_txt.slice(0,10).split("-").reverse().join(".")
  console.log(dayList);

  return (
    <>
    <h2 id="block">{`${today}, ${dateNow}`}</h2>
    <div className="weather-container">
      {dayList.map(day => {
        return (    
          <div className="weather-element">
            <div className="date center-txt">{`${day.dt_txt.slice(11, -3)} Uhr`}</div>
            <img src={`https://www.openweathermap.org/img/w/${day.weather[0].icon}.png`} alt="weather-img" />
            <div className="temp">{`${day.main.temp}°C`}</div>
            <div className="feel-temp">{`(${day.main.feels_like}°C)`}</div>  
          </div>         
        )
      })}
    </div>
    </>
  );
};

export default ThreeHourForecast;