import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
var geolocation = require("geolocation");

function App() {
  const [latlong, setLatLong] = useState({
    lat: "",
    long: "",
  });
  const [error, setError] = useState("");

  useEffect(() => {
    geolocation.getCurrentPosition(function (err, position) {
      if (err) {
        setError(
          "You have denied location access. Please turn on location from settings"
        );
        throw err;
      }
      console.log(position);
      setLatLong({
        lat: position.coords.latitude,
        long: position.coords.longitude,
      });
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {latlong.lat === "" && error === "" ? (
          <p>Provide location access</p>
        ) : error !== "" ? (
          <p> {error}</p>
        ) : (
          <>
            <p>Lat: {latlong.lat} </p>
            <p>Long: {latlong.long} </p>
          </>
        )}
      </header>
    </div>
  );
}

export default App;
