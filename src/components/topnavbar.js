import React, { useContext } from "react";
import { useUserContext } from "../context/userContext";
import "../styles/topnavbar.scss";
import logo from "../images/BCONS-plain.png";
import Topdropdown from "./topdropdown";
import { ThemeContext } from "../context/themeContext";

const Topnavbar = () => {
  const { user } = useUserContext();
  const [{ theme, isDark }, toggleTheme] = useContext(ThemeContext);
  console.log(theme);

  return (
    <div
      className="topnavbar"
      style={{ backgroundColor: theme.backgroundColor, color: theme.color }}
    >
      <div className="topwrapper">
        <div className="topleft">
          <img className="logo" src={logo} alt="BCONS Logo" />
          <h3>| Admin</h3>
        </div>
        <div></div>
        <div className="topright">
          <div
            className="theme-wrapper"
            style={{ backgroundColor: theme.backgroundColor }}
            onClick={toggleTheme}
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
          >
            <p>{user.email}</p>
            <Topdropdown />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topnavbar;
