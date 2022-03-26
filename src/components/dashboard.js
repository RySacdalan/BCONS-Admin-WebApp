import React from "react";
import "../styles/dashboard.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Topnavbar from "./topnavbar";
import Sidenavbar from "./sidenavbar";
import Home from "../pages/home/home";
//import Users from "../pages/users/users";
import Reports from "../pages/reports/reports";
import History from "../pages/history/history";
import Settings from "../pages/settings/settings";
import About from "../pages/about/about";
import UserTable from "../pages/users/usertable";
import { v4 as uuidv4 } from "uuid";

const Dashboard = () => {
  return (
    <Router className="dashboard" key={uuidv4()}>
      <div className="dashboard_wrapper" key={uuidv4()}>
        <Topnavbar key={uuidv4()} />
        <div className="sidenav-container" key={uuidv4()}>
          <Sidenavbar key={uuidv4()} />
          <Switch key={uuidv4()}>
            <Route exact path="/" key={uuidv4()}>
              <Home />
            </Route>
            <Route path="/users" key={uuidv4()}>
              <UserTable />
            </Route>
            <Route path="/reports" key={uuidv4()}>
              <Reports />
            </Route>
            <Route path="/history" key={uuidv4()}>
              <History />
            </Route>
            <Route path="/settings" key={uuidv4()}>
              <Settings />
            </Route>
            <Route path="/bcons-information" key={uuidv4()}>
              <About />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default Dashboard;
