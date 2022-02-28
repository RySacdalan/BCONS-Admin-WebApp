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
              <p>Home</p>
            </li>
            <li className="sidenavbar-listItem">
              <ion-icon name="people"></ion-icon>
              <p>Users</p>
            </li>
            <li className="sidenavbar-listItem">
              <ion-icon name="alert-circle"></ion-icon>
              <p>Reports</p>
            </li>
            <li className="sidenavbar-listItem">
              <ion-icon name="time-outline"></ion-icon>
              <p>History</p>
            </li>
            <div className="lower-listItem">
              <li className="sidenavbar-listItem">
                <ion-icon name="settings-outline"></ion-icon>
                <p>Settings</p>
              </li>
              <li className="sidenavbar-listItem">
                <ion-icon name="information-circle"></ion-icon>
                <p>BCONS</p>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidenavbar;
