import React from "react";
import Activitychart from "../../components/activitychart";
import Activityinfo from "../../components/activityinfo";
import "./home.scss";
import { v4 as uuidv4 } from "uuid";

const Home = () => {
  return (
    <div className="home" key={uuidv4()}>
      <h3>Activity</h3> {/*eslint-disable-line */}
      <Activityinfo key={uuidv4()} />
      <h3>Report Statistics</h3> {/*eslint-disable-line */}
      <Activitychart key={uuidv4()} />
    </div>
  );
};

export default Home;
