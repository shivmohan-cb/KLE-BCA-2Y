import { KtoC } from "./utils";

const weatherIcon = (iconName, zoom) =>
  `https://openweathermap.org/img/wn/${iconName}${zoom ? "@" + zoom : ""}.png`; //zomm valid values : 2x or 4x

const WeatherCard = ({ data }) => {
  let { city, list} = data;
  let { dt_txt, main, weather } = list[0];
  
  let date = new Date(dt_txt).toString().slice(0,16);
  return (
    <div className="weather-card">
      <h2>{`${city.name}, ${city.country}`}</h2>
      <img src={weatherIcon(weather[0].icon,"2x")} alt="weather icon" />
      <h3>{KtoC(main.temp)} <sup>o</sup>C</h3>
      <p>{date}</p>
    </div>
  );
};

export default WeatherCard;