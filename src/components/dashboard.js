import React from "react";
import "../styles/dashboard.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Topnavbar from "./topnavbar";
import Sidenavbar from "./sidenavbar";
import Home from "../pages/home/home";
import Users from "../pages/users/users";
import Reports from "../pages/reports/reports";
import History from "../pages/history/history";
import Settings from "../pages/settings/settings";
import About from "../pages/about/about";

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
            <Route path="/reports">
              <Reports />
            </Route>
            <Route path="/history">
              <History />
            </Route>
            <Route path="/settings">
              <Settings />
            </Route>
            <Route path="/bcons-information">
              <About />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default Dashboard;
