import React, { useState } from "react";
import { useUserContext } from "../context/userContext";
import "../styles/topdropdown.scss";

const Topdropdown = () => {
  const { logoutUser } = useUserContext();
  const [active, setIsActive] = useState(false);

  return (
    <div className="dropdown">
      <div
        className="dropdown-btn"
        onClick={(e) => {
          setIsActive(!active);
        }}
      >
        <ion-icon name="chevron-down-outline"></ion-icon>
      </div>
      {active && (
        <div className="dropdown-content">
          <div className="dropdown-item" onClick={(e) => setIsActive(false)}>
            <h3>Darkmode</h3>
          </div>
          <div className="dropdown-item" onClick={logoutUser}>
            <h3>Logout</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default Topdropdown;
