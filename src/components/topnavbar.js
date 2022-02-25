import React from "react";
import { useUserContext } from "../context/userContext";
import "../styles/topnavbar.scss";
import logo from "../images/BCONS-plain.png";

const Topnavbar = () => {
  const { user, logoutUser } = useUserContext();

  return (
    <div className="topnavbar">
      <div className="topwrapper">
        <div className="topleft">
          <img className="logo" src={logo} alt="BCONS Logo" />
          <h3>| Admin</h3>
        </div>
        <div className="topright">
          <button onClick={logoutUser}>Logout</button>
        </div>
      </div>
    </div>
  );
};

export default Topnavbar;
