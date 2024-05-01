import React from "react";
import { WeatherIcons, WeatherInfoIcons } from "./icons";
import { Condition, InfoContainer, InfoIcon, InfoLabel, Location, WeatherContainer, WeatherIcon, WeatherInfoContainer, WeatherInfoLabel } from "../styles";


const WeatherInfoComponent = ({name, value} ) => {
    return (
        <InfoContainer>
            <InfoIcon src={WeatherInfoIcons[name]}/>
            <InfoLabel>
                {value}
                <span>{name}</span>
            </InfoLabel>
        </InfoContainer>
    );
};

const WeatherComponent = ({weather}) => {
    const isDay = weather?.weather[0].icon?.includes('d')
    const getTime = (timeStamp) => {
        return `${new Date(timeStamp * 1000).getHours()} : ${new Date(timeStamp * 1000).getMinutes()}`
    }

    return (
        <>
            <WeatherContainer>
                <Condition>
                    <span>{`${Math.floor(weather?.main?.temp - 273)}°C`}</span>
                    {`  |  ${weather?.weather?.[0]?.description}`}
                </Condition>
                <WeatherIcon src={WeatherIcons[weather?.weather?.[0]?.icon]}/>
            </WeatherContainer>
            <Location>{`${weather?.name}, ${weather?.sys?.country}`}</Location>

            <WeatherInfoLabel>Weather Info</WeatherInfoLabel>
            <WeatherInfoContainer>
                <WeatherInfoComponent name={isDay ? "sunset" : "sunrise"}
                                      value={`${getTime(weather?.sys[isDay ? "sunset" : "sunrise"])}`}/>
                <WeatherInfoComponent name={"humidity"} value={weather?.main?.humidity}/>
                <WeatherInfoComponent name={"wind"} value={weather?.wind?.speed}/>
            </WeatherInfoContainer>
        </>
    );
};

export default WeatherComponent;
