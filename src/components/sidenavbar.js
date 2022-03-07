import React from "react";
import "../styles/sidenavbar.scss";
import { Link } from "react-router-dom";

const Sidenavbar = () => {
  return (
    <div className="sidenavbar">
      <div className="sidenavbar-wrapper">
        <div className="sidenavbar-menu">
          <h3 className="sidenavbar-title">Dashboard</h3>
          <ul className="sidenavbar-list">
            <Link to="/">
              <li className="sidenavbar-listItem active">
                <ion-icon name="home"></ion-icon>
                <p>Home</p>
              </li>
            </Link>
            <Link to="/users">
              <li className="sidenavbar-listItem">
                <ion-icon name="people"></ion-icon>
                <p>Users</p>
              </li>
            </Link>
            <Link to="/reports">
              <li className="sidenavbar-listItem">
                <ion-icon name="alert-circle"></ion-icon>
                <p>Reports</p>
              </li>
            </Link>
            <Link to="/history">
              <li className="sidenavbar-listItem">
                <ion-icon name="time"></ion-icon>
                <p>History</p>
              </li>
            </Link>
            <div className="lower-listItem">
              <Link to="/settings">
                <li className="sidenavbar-listItem">
                  <ion-icon name="settings"></ion-icon>
                  <p>Settings</p>
                </li>
              </Link>
              <Link to="/bcons-information">
                <li className="sidenavbar-listItem">
                  <ion-icon name="information-circle"></ion-icon>
                  <p>BCONS</p>
                </li>
              </Link>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidenavbar;
