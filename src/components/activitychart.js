import React from "react";
import "../styles/activityinfo.scss";
import Barchart from "./barchart";
import Piechart from "./piechart";

function Activitychart() {
  return (
    <div className="activity">
      <div className="chart-container">
        <Barchart />
      </div>
      <div className="chart-container">
        <Piechart />
      </div>
    </div>
  );
}

export default Activitychart;
