import React from "react";
import { useUserContext } from "../context/userContext";
import "../styles/topnavbar.scss";
import logo from "../images/BCONS-plain.png";
import { v4 as uuidv4 } from "uuid";

const Topnavbar = () => {
  const { user } = useUserContext();

  return (
    <div className="topnavbar" key={uuidv4()}>
      <div className="topwrapper" key={uuidv4()}>
        <div className="topleft" key={uuidv4()}>
          <img className="logo" src={logo} alt="BCONS Logo" key={uuidv4()} />
          <h3>| Admin</h3> {/*eslint-disable-line */}
        </div>
        <div className="topright" key={uuidv4()}>
          <div key={uuidv4()}>
            <p>{user.email}</p> {/*eslint-disable-line */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topnavbar;
