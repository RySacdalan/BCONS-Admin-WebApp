import React from "react";
import "../styles/activityinfo.scss";
import Barchart from "./barchart";
import Piechart from "./piechart";

function Activitychart() {
  return (
    <div className="activity">
      <div style={{ width: 600 }}>
        <Barchart />
      </div>
      <div style={{ width: 300 }}>
        <Piechart />
      </div>
    </div>
  );
}

export default Activitychart;
