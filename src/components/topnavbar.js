import React from "react";
import { useUserContext } from "../context/userContext";
import "../styles/topnavbar.css";
import logo from "../images/BCONS-plain.png";

const Topnavbar = () => {
  const { user, logoutUser } = useUserContext();

  return (
    <div className="topnavbar">
      <div className="topwrapper">
        <div className="topleft">
          <img className="logo" src={logo} alt="BCONS Logo" />| Admin
        </div>
        <div className="topright">
          <button onClick={logoutUser}>Logout</button>
        </div>
      </div>
    </div>
  );
};

export default Topnavbar;
