import React from "react";
import { useUserContext } from "../context/userContext";
import Topnavbar from "./topnavbar";
import "../styles/dashboard.css";

const Dashboard = () => {
  const { user, logoutUser } = useUserContext();
  return (
    <div className="dashboard">
      <div className="dashboard_wrapper">
        <Topnavbar />
        <h1>Dashboard </h1>
        <h2>Name : {(user.displayName = "BCONS Admin")}</h2>
        <h2>Email : {user.email}</h2>
        <button onClick={logoutUser}>Log out</button>
      </div>
    </div>
  );
};

export default Dashboard;
