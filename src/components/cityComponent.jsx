import React from "react";
import { ChooseCityLabel, SearchBox, WelcomeWeatherLogo } from "../styles";

const CityComponent = ({ updateCity, fetchWeather }) => {
  return (
    <>
      <WelcomeWeatherLogo src={"/icons/perfect-day.svg"} />
      <ChooseCityLabel>Find Weather of your city</ChooseCityLabel>
      <SearchBox onSubmit={fetchWeather}>
        <input
          onChange={(e) => updateCity(e.target.value)}
          placeholder="City"
        />
        <button type={"submit"}>Search</button>
      </SearchBox>
    </>
  );
};
export default CityComponent;
