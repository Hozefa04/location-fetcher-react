import React, { useEffect, useState } from "react";
import "./App.css";
import appLogo from "./images/appicon.png";

function App() {
  // const [latlong, setLatLong] = useState({
  //   lat: "",
  //   long: "",
  // });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);

      // setLatLong({
      //   lat: position.coords.latitude,
      //   long: position.coords.longitude,
      // });

      // openInNewTab(position.coords.latitude, position.coords.longitude);
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
      <center>
        <img src={appLogo} alt="new" />
        <p className="note">Please switch to Chrome browser for a better experience.</p>
      </center>
    </div>
  );
}

export default App;
