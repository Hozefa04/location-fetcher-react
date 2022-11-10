import React, { useEffect } from "react";
import "./App.css";
import { browserName } from "react-device-detect";
import appLogo from "./images/appicon.png";

function App() {
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
      openInNewTab(position.coords.latitude, position.coords.longitude);
    });
  }, []);

  const openInNewTab = (lat, long) => {
    window.open(
      `https://now.playshotcaller.com/?para1=${lat}&para2=${long}&browserName=${browserName}`,
      "_self",
      "noopener,noreferrer"
    );
  };

  return (
    <div className="App">
      <center>
        <img src={appLogo} alt="new" />
        {browserName === "Chrome" ? (
          <p className="note">Please allow location access.</p>
        ) : (
          <p className="note">
            Please switch to chrome for a better experience.
          </p>
        )}
      </center>
    </div>
  );
}

export default App;
