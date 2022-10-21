import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [latlong, setLatLong] = useState({
    lat: "",
    long: "",
  });
  const [error, setError] = useState("");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);

      setLatLong({
        lat: position.coords.latitude,
        long: position.coords.longitude,
      });

      openInNewTab(position.coords.latitude, position.coords.longitude);
    });
  }, []);

  const openInNewTab = (lat, long) => {
    window.open(
      `https://shotcaller-d66e3.firebaseapp.com/?para1=${lat}&para2=${long}`,
      "_self",
      "noopener,noreferrer"
    );
  };

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
