import React, { useEffect } from "react";
import "./App.css";
import { browserName } from "react-device-detect";
import appLogo from "./images/appicon.png";

function App() {
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);

      var windowName = "popup check";
      var popUp = window.open(
        "http://www.google.in",
        windowName,
        "width=1, height=1, left=0, top=0"
      );
      if (popUp == null || typeof popUp == "undefined") {
        openInNewTab(position.coords.latitude, position.coords.longitude, true);
      } else {
        popUp.close();
        openInNewTab(
          position.coords.latitude,
          position.coords.longitude,
          false
        );
      }
    });
  }, []);

  const openInNewTab = (lat, long, popup) => {
    window.open(
      `https://now.playshotcaller.com/?para1=${lat}&para2=${long}&browserName=${browserName}&isPopupBlocked=${popup}`,
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
