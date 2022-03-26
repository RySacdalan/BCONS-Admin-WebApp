import React, { useState } from "react";
import { useUserContext } from "../context/userContext";
import "../styles/topdropdown.scss";
import { v4 as uuidv4 } from "uuid";

const Topdropdown = () => {
  const { logoutUser } = useUserContext();
  const [active, setIsActive] = useState(false);

  return (
    <div className="dropdown" key={uuidv4()}>
      <div
        className="dropdown-btn"
        onClick={() => {
          setIsActive(!active);
        }}
        key={uuidv4()}
      >
        <ion-icon name="chevron-down-outline" /> {/*eslint-disable-line */}
      </div>
      {active && (
        <div className="dropdown-content" key={uuidv4()}>
          <div className="dropdown-item" onClick={logoutUser} key={uuidv4()}>
            <p>Logout</p> {/*eslint-disable-line */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Topdropdown;
