import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

    useEffect(() => {
     setLoaded(false);
    }, [props.coordinates]);
    
    function handleResponse(response) {
       setForecast(response.data.daily);
       setLoaded(true);
    }

    function load() {
        let apiKey = "ab1cebc3634c669b08986492dfeea71f";
        let longitude = props.coordinates.lon;
        let latitude = props.coordinates.lat;
        let apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
        
        axios.get(apiUrl).then(handleResponse);
    }

    if (loaded) {
        return (
            <div className="WeatherForecast">
                <div className="row">
                    {forecast.map(function (dailyForecast, index) {
                        if (index < 5) {
                        return (
                            <div className="col" key={index}>
                            <WeatherForecastDay data={forecast[0]} />
                            </div>
                        );
                        } else {
                            return null;
                        }
                    })}
                </div>
            </div>
        );
    } else {
        load();

        return null;
    }
}