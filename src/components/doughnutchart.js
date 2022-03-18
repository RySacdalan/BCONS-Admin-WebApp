import React from "react";
import { Doughnut } from "react-chartjs-2";

function DoughnutChart({ chartData, options }) {
  return (
    <div>
      <Doughnut data={chartData} options={options}/>
    </div>
  );
}

export default DoughnutChart;
