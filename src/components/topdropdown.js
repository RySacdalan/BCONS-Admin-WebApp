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
          <div className="dropdown-item" onClick={logoutUser}>
            <p>Logout</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Topdropdown;
