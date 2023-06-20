import { useState, useEffect } from "react";
import axios from "axios";

const Country = ({ country }) => {
  const [weatherData, setWeatherData] = useState(null);
  let keys = Object.keys(country.languages);
  const api_key = import.meta.env.VITE_APP_API_KEY;
  const [lat, lng] = country.latlng;
  const baseUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=${api_key}`;
  let weather_data;
  useEffect(() => {
    axios.get(baseUrl).then((response) => {
      console.log(response.data);
      setWeatherData(response.data);
    });
  }, []);

  if (weatherData) {
    return (
      <>
        <h1>{country.name.common}</h1>
        {country.capital ? <p>capital {country.capital} </p> : null}
        <p>area {country.area}</p>
        <h2>languages:</h2>
        <ul>
          {keys.map((key) => (
            <li key={country.languages[key]}>{country.languages[key]}</li>
          ))}
        </ul>
        <img
          style={{ width: "175px", height: "auto" }}
          src={`${country.flags.svg}`}
          alt={`Flag of ${country.name.common}`}
        />
        <h2>{`Weather in ${country.name.common}`}</h2>
        <p>temperature {weatherData.main.temp} celsius</p>
        <img
          src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
          alt="Picture representing weather"
        ></img>
        <p>wind {weatherData.wind.speed} m/s</p>
      </>
    );
  }
};

export default Country;
