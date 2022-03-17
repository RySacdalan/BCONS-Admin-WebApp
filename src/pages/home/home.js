import React from "react";
import Activitychart from "../../components/activitychart";
import Activityinfo from "../../components/activityinfo";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <h3>Activity</h3>
      <Activityinfo />
      <h3>Report Statistics</h3>
      <Activitychart/>
    </div>
  );
};

export default Home;
