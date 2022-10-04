import { useParams } from "react-router-dom";

const ThreeHourForecast = ({data, wholeData}) => {
  const {date} = useParams()
  const newDate = date.slice(0,10)
  const obj = wholeData.list.filter(item => date.includes(item.dt_txt))
  console.log(newDate);  
  console.log(wholeData);
  console.log(obj);
  return (
    <div>
      
    </div>
  );
};

export default ThreeHourForecast;