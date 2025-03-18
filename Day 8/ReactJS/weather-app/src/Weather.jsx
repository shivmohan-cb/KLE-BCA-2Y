import { useEffect, useState } from "react";
import WeatherCard from "./WeatherCard";

const API_key = "b1b15e88fa797225412429c1c50c122a1";

const URI = (cityname) =>
  `https://api.openweathermap.org/data/2.5/forecast?q=${cityname}&appid=${API_key}`;

const Weather = () => {
  const [search, setSearch] = useState("");
  const [cityname, setCityname] = useState("New Delhi");
  const [data, setData] = useState(null);

  const handleChange = (e) => {
    const value = e.target.value;
    setSearch(value);
  };
  // console.log(search);

  const handleSumbit = (e) => {
    e.preventDefault();
    setCityname(search);
  };
  // useEffect helps component to run async task even after component mount
  useEffect(() => {
    async function fetchWeather(cityname) {
      try {
        // console.log(URI(cityname,API_key))
        const res = await fetch(URI(cityname));
        //    console.log(res);
        const jsonData = await res.json();
        // console.log(jsonData);
        setData(jsonData);
      } catch (err) {
        console.log(err);
      }
    }
    if (cityname) fetchWeather(cityname);
  }, [cityname]); //dependency array

  // console.log(data);

  return (
    <div className="weather">
      <header>
        <form onSubmit={handleSumbit}>
          <input
            onChange={handleChange}
            type="text"
            value={search}
            placeholder="Search City Name..."
          />
        </form>
      </header>
      <main>
        {data ? (
          data.cod == 200 ? (
            <WeatherCard data={data} />
          ) : (
            <div>
              <h2>{data.message}</h2>
            </div>
          )
        ) : (
          <p>Loading...</p>
        )}
      </main>
    </div>
  );
};

export default Weather;
