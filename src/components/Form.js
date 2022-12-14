import "../styles/form.css"

const Form = ({weatherSubmitHandler, input, setInput, weatherForecastHandler, inputForecast, setInputForecast})=>{
  return (
    <>
  <div>
    <form onSubmit={weatherSubmitHandler}>
      <input
        placeholder="your City"
        type="text"
        onChange={(event) => setInput(event.target.value)}
        value={input} />
      <button>Wetterdaten anzeigen</button>
    </form>
  </div>

  {/* <div>
    <form onSubmit={weatherForecastHandler}>
      <input
        placeholder="your city"
        type="text"
        onChange={(event) => setInputForecast(event.target.value)}
        value={inputForecast} /> 
      <button>Wetterdaten 5 Tage anzeigen</button>
    </form>
  </div> */}
    </>

  )
}

export default Form