/* eslint-disable */
import React from "react";
import "../styles/activityinfo.scss";
import Barchart from "./barchart";
import Piechart from "./piechart";
import { v4 as uuidv4 } from "uuid";

function Activitychart() {
  return (
    <div className="activity" key={uuidv4()}>
      <div className="chart-container" key={uuidv4()}>
        <Barchart />
      </div>
      <div className="chart-container" key={uuidv4()}>
        <Piechart />
      </div>
    </div>
  );
}

export default Activitychart;
