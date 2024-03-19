import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
    function maxTemperature() {
        let temperature = Math.round(props.data.temp.max);
        return `${temperature}°`;
    }

    function minTemperature() {
        let temperature = Math.round(props.data.temp.mix);
        return `${temperature}°`;
    }

    function day() {
        let date = new Date(props.data.dt * 1000);
        let day = date.getDay();

        let days = [
            "Sun", 
            "Mon", 
            "Tue", 
            "Thu", 
            "Fri", 
            "Sat",
        ];

        return days[day];
    }

    return (
        <div>
            <div className="WeatherForecast-Day">{day()}</div>
                    <WeatherIcon code={props.data.weather[0].icon} 
                    size={36} />
                   <div className="WeatherForecast-temperatures">
                    <span className="WeatherForecast-max">
                        {maxTemperature()}°</span>
                    <span className="WeatherForecast-min>">
                        {minTemperature()}°
                    </span>
            </div> 
        </div>
    );
}