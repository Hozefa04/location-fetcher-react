import React, { useEffect } from "react";
import "./App.css";
import { browserName } from "react-device-detect";
import appLogo from "./images/appicon.png";
import appBg from "./images/bg.png";
import appStoreLogo from "./images/appstore.png";
import playStoreLogo from "./images/play.png";

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

  /**
   * Determine the mobile operating system.
   * This function returns one of 'iOS', 'Android', 'Windows Phone', or 'unknown'.
   *
   * @returns {String}
   */
  function getMobileOperatingSystem() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    if (/windows phone/i.test(userAgent)) {
      return "Windows Phone";
    }

    if (/android/i.test(userAgent)) {
      return "Android";
    }

    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      return "iOS";
    }

    return "unknown";
  }

  const openInNewTab = (lat, long, popup) => {
    window.open(
      `https://now.playshotcaller.com/?para1=${lat}&para2=${long}&browserName=${browserName}&isPopupBlocked=${popup}`,
      "_self",
      "noopener,noreferrer"
    );
  };

  return (
    <div className="App">
      <div className="background">
        {/* <div className="storeLogo"> */}
        <img className="bg" src={appBg} alt="store" />
        {getMobileOperatingSystem() === "iOS" ? (
          <a href="https://apps.apple.com/in/app/shotcaller-make-sports-picks/id1558033440">
            <span className="allow-text">Please allow access to load local contests</span>
            <img className="logo" src={appLogo} alt="" />
            <img className="store" src={appStoreLogo} alt="" />
            <span className="download-text">Download the app for best experience</span>
            
          </a>
        ) : (
          <a href="https://play.google.com/store/apps/details?id=com.app.shotcaller">
            <span className="allow-text">Please allow access to load local contests</span>
            <img className="logo" src={appLogo} alt="" />
            <img className="store" src={playStoreLogo} alt="" />
            <span className="download-text">Download the app for best experience</span>
          </a>
        )}

        {/* </div> */}
      </div>
    </div>
  );
}

export default App;
