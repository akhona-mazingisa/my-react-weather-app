import React from "react";
import Weather from "./Weather";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <Weather defaultCity="Umzimkulu" />
      <footer>
        This project was created by {" "} <a href="https://github.com/akhona-mazingisa" target="_blank" rel="noreferrer">
          Akhona Mazingisa
          </a> {" "}
          and is {" "}
      <a href="https://github.com/akhona-mazingisa/my-react-weather-app" target="_blank" rel="noreferrer"> 
      open-sourced on GitHub </a>
      </footer>
      </div>
      </div>
      );
}


