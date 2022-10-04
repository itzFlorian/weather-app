import "../styles/showWeather.css"

const ShowWeather = ({data})=>{
  return (      
    <li>
        <span>{`Es sind gerade ${data.temperatur}°C in ${data.city}, ${data.country}.`}</span><br/>
        <span>{`Das Wetter ist: ${data.description}`}</span> 
    </li>

  )
}

export default ShowWeather