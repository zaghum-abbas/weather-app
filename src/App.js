import React, { useState } from "react";
import Axios from "axios";
import WeatherComponent from "./components/weatherInfoComponent";
import CityComponent from "./components/cityComponent";
import { AppLabel, Container } from "./styles";
import toast from "react-hot-toast";
const App = () => {
  const [city, updateCity] = useState();
  const [weather, updateWeather] = useState();
  const fetchWeather = async (e) => {
    try {
      e.preventDefault();
      const response = await Axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fe4feefa8543e06d4f3c66d92c61b69c`
      );
      if (response.status === 200) {
       
        updateWeather(response.data);
      } else {
        throw new Error();
      }
    } catch ({response:{data:{message}}}) {
      toast.error(message)
     
    }
  };
  return (
    <Container>
      <AppLabel>React Weather App</AppLabel>
      {city && weather ? (
        <WeatherComponent weather={weather} city={city} />
      ) : (
        <CityComponent updateCity={updateCity} fetchWeather={fetchWeather} />
      )}
    </Container>
  );
};

export default App;
