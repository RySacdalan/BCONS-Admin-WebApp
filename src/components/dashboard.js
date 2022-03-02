import React from "react";
import "../styles/dashboard.scss";
import Topnavbar from "./topnavbar";
import Sidenavbar from "./sidenavbar";
import Home from "../pages/home/home";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard_wrapper">
        <Topnavbar />
        <div className="sidenav-container">
          <Sidenavbar />
          <Home />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
