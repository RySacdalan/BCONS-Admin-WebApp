import React from "react";
import "../styles/sidenavbar.scss";
import { NavLink } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { useUserContext } from "../context/userContext";
import { Link } from "react-router-dom";

const Sidenavbar = () => {
  const { logoutUser } = useUserContext();

  return (
    <div className="sidenavbar" key={uuidv4()}>
      <div className="sidenavbar-wrapper" key={uuidv4()}>
        <div className="sidenavbar-menu" key={uuidv4()}>
          <h3 className="sidenavbar-title" key={uuidv4()}>
            Dashboard
          </h3>
          <div className="link-container">
            <ul className="sidenavbar-list" key={uuidv4()}>
              <div className="upper-navlink-wrapper">
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
              </div>
              <div className="lower-navlink-wrapper">
                <Link to="/" key={uuidv4()} onClick={logoutUser}>
                  <ion-icon name="log-out"></ion-icon>
                  <p>Logout</p>
                </Link>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidenavbar;
