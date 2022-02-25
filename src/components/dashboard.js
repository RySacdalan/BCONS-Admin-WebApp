import React from "react";
import Topnavbar from "./topnavbar";
import "../styles/dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard_wrapper">
        <Topnavbar />
        <h1>Dashboard </h1>
      </div>
    </div>
  );
};

export default Dashboard;
