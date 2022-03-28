import React from "react";
import { Pie } from "react-chartjs-2";
import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";

const Piechart = () => {
  Chart.register(CategoryScale);

  return (
    <div className="bar-container">
      <Pie
        data={{
          labels: ["Manual", "Automatic"],
          datasets: [
            {
              label: "Number of Reports",
              data: [12, 8],
              backgroundColor: ["#d42929", "#ff8787"],
            },
          ],
        }}
        options={{
          maintainAspectRatio: false,
          plugins: {
            title: {
              display: true,
              text: "Type of Reports",
            },
            legend: {
              position: "top",
            },
          },
        }}
        height={312}
        width={312}
      />
    </div>
  );
};

export default Piechart;
