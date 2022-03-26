import React, { useContext } from "react";
import { useUserContext } from "../context/userContext";
import "../styles/topnavbar.scss";
import logo from "../images/BCONS-plain.png";
import Topdropdown from "./topdropdown";
import { ThemeContext } from "../context/themeContext";
import { v4 as uuidv4 } from "uuid";

const Topnavbar = () => {
  const { user } = useUserContext();
  const [{ theme, isDark }, toggleTheme] = useContext(ThemeContext);
  console.log(theme);

  return (
    <div
      className="topnavbar"
      style={{ backgroundColor: theme.backgroundColor, color: theme.color }}
      key={uuidv4()}
    >
      <div className="topwrapper" key={uuidv4()}>
        <div className="topleft" key={uuidv4()}>
          <img className="logo" src={logo} alt="BCONS Logo" key={uuidv4()} />
          <h3>| Admin</h3> {/*eslint-disable-line */}
        </div>
        <div className="topright" key={uuidv4()}>
          <div
            className="theme-wrapper"
            style={{ backgroundColor: theme.backgroundColor }}
            onClick={toggleTheme}
            key={uuidv4()}
          >
            {isDark ? (
              <ion-icon name="moon"></ion-icon>
            ) : (
              <ion-icon name="sunny"></ion-icon>
            )}
          </div>
          <div
            className="topright_content"
            style={{ backgroundColor: theme.backgroundColor }}
            key={uuidv4()}
          >
            <p>{user.email}</p> {/*eslint-disable-line */}
            <Topdropdown key={uuidv4()} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topnavbar;
