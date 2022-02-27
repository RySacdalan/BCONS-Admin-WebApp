import React from "react";
import Topnavbar from "./topnavbar";
import "../styles/dashboard.scss";
import Sidenavbar from "./sidenavbar";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard_wrapper">
        <Topnavbar />
        <div className="sidenav-container">
          <Sidenavbar />
          <div className="sample">Web app widgets</div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
