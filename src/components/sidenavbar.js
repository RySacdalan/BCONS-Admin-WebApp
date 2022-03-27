import React from "react";
import "../styles/sidenavbar.scss";
import { NavLink } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const Sidenavbar = () => {
  return (
    <div className="sidenavbar" key={uuidv4()}>
      <div className="sidenavbar-wrapper" key={uuidv4()}>
        <div className="sidenavbar-menu" key={uuidv4()}>
          <h3 className="sidenavbar-title" key={uuidv4()}>
            Dashboard
          </h3>
          <ul className="sidenavbar-list" key={uuidv4()}>
            <NavLink exact to="/" key={uuidv4()}>
              <ion-icon name="home"></ion-icon>
              <p>Home</p>
            </NavLink>
            <NavLink exact to="/users" key={uuidv4()}>
              <ion-icon name="people"></ion-icon>
              <p>Users</p>
            </NavLink>
            <NavLink exact to="/reports" key={uuidv4()}>
              <ion-icon name="alert-circle"></ion-icon>
              <p>Reports</p>
            </NavLink>
            <NavLink exact to="/history" key={uuidv4()}>
              <ion-icon name="time"></ion-icon>
              <p>History</p>
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidenavbar;
