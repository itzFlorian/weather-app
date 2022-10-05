import { useParams } from "react-router-dom";

const ThreeHourForecast = ({data, wholeData}) => {
  const {date} = useParams()
  const newDate = date.slice(0,10)
  const dayList = wholeData.list.filter(item => item.dt_txt.includes(newDate))
  console.log("",dayList);
  console.log(newDate);  
  console.log(wholeData);
  return (
    <>
      {dayList.map(day => {
        return (    
          <div className="weather-element">
            <div className="date">{`${day.dt_txt}`}</div>
            <img src={`https://www.openweathermap.org/img/w/${day.weather[0].icon}.png`} alt="weather-img" />
            <div className="temp">{`${day.main.temp}°C`}</div>
            <div className="feel-temp">{`gefühlt(${day.feelsLike})`}</div>  
          </div>         
        )
      })}
    </>
  );
};

export default ThreeHourForecast;