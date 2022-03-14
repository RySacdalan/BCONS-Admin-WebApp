import React from "react";
import "../styles/sidenavbar.scss";
import { NavLink } from "react-router-dom";

const Sidenavbar = () => {
  return (
    <div className="sidenavbar">
      <div className="sidenavbar-wrapper">
        <div className="sidenavbar-menu">
          <h3 className="sidenavbar-title">Dashboard</h3>
          <ul className="sidenavbar-list">
            <NavLink exact to="/">
              <ion-icon name="home"></ion-icon>
              <p>Home</p>
            </NavLink>
            <NavLink exact to="/users">
              <ion-icon name="people"></ion-icon>
              <p>Users</p>
            </NavLink>
            <NavLink exact to="/reports">
              <ion-icon name="alert-circle"></ion-icon>
              <p>Reports</p>
            </NavLink>
            <NavLink exact to="/history">
              <ion-icon name="time"></ion-icon>
              <p>History</p>
            </NavLink>
            <div className="lower-listItem">
              <NavLink exact to="/settings">
                <ion-icon name="settings"></ion-icon>
                <p>Settings</p>
              </NavLink>
              <NavLink exact to="/bcons-information">
                <ion-icon name="information-circle"></ion-icon>
                <p>BCONS</p>
              </NavLink>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidenavbar;
