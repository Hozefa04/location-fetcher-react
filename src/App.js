import React, { useEffect, useState } from "react";
import "./App.css";
import appLogo from "./images/appicon.png";

function App() {
  const [timeLeft, setTimeLeft] = useState(null);
  const [message, setMessage] = useState("Waiting for location access...");
  // const [latlong, setLatLong] = useState({
  //   lat: "",
  //   long: "",
  // });

  useEffect(() => {
    setTimeLeft(3);

    navigator.geolocation.getCurrentPosition(function (position) {
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);

      // setLatLong({
      //   lat: position.coords.latitude,
      //   long: position.coords.longitude,
      // });

      openInNewTab(position.coords.latitude, position.coords.longitude);
    });
  }, []);

  useEffect(() => {
    if (timeLeft === 0) {
      console.log("TIME LEFT IS 0");
      setTimeLeft(null);
      setMessage("Please switch to Chrome browser for a better experience.");
    }

    // exit early when we reach 0
    if (!timeLeft) return;

    // save intervalId to clear the interval when the
    // component re-renders
    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    // clear interval on re-render to avoid memory leaks
    return () => clearInterval(intervalId);
    // add timeLeft as a dependency to re-rerun the effect
    // when we update it
  }, [timeLeft]);

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
        <p className="note">{message}</p>
      </center>
    </div>
  );
}

export default App;
