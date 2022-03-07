import React from "react";
import "../styles/dashboard.scss";
import Topnavbar from "./topnavbar";
import Sidenavbar from "./sidenavbar";
import Home from "../pages/home/home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Users from "../pages/users/users";

const Dashboard = () => {
  return (
    <Router className="dashboard">
      <div className="dashboard_wrapper">
        <Topnavbar />
        <div className="sidenav-container">
          <Sidenavbar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/users">
              <Users />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default Dashboard;
