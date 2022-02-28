import React from "react";
import "../styles/sidenavbar.scss";

const Sidenavbar = () => {
  return (
    <div className="sidenavbar">
      <div className="sidenavbar-wrapper">
        <div className="sidenavbar-menu">
          <h3 className="sidenavbar-title">Dashboard</h3>
          <ul className="sidenavbar-list">
            <li className="sidenavbar-listItem">
              <ion-icon name="home"></ion-icon>
              Home
            </li>
            <li className="sidenavbar-listItem">
              <ion-icon name="people"></ion-icon>
              Users
            </li>
            <li className="sidenavbar-listItem">
              <ion-icon name="alert-circle"></ion-icon>
              Reports
            </li>
            <li className="sidenavbar-listItem">
              <ion-icon name="time-outline"></ion-icon>
              History
            </li>
            <div className="lower-listItem">
              <li className="sidenavbar-listItem">
                <ion-icon name="settings-outline"></ion-icon>
                Settings
              </li>
              <li className="sidenavbar-listItem">
                <ion-icon name="information-circle"></ion-icon>
                About BCONS
              </li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidenavbar;
