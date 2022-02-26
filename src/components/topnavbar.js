import React from "react";
import { useUserContext } from "../context/userContext";
import "../styles/topnavbar.scss";
import logo from "../images/BCONS-plain.png";
import Topdropdown from "./topdropdown";

const Topnavbar = () => {
  const { user } = useUserContext();

  return (
    <div className="topnavbar">
      <div className="topwrapper">
        <div className="topleft">
          <img className="logo" src={logo} alt="BCONS Logo" />
          <h3>| Admin</h3>
        </div>
        <div className="topright">
          <div className="topright_content">
            <h3>{user.email}</h3>
            <Topdropdown />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topnavbar;
