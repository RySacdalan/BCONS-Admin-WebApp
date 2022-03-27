import React from "react";
import { Doughnut } from "react-chartjs-2";
import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";

const Piechart = () => {
  Chart.register(CategoryScale);

  return (
    <div className="bar-container">
      <Doughnut
        data={{
          labels: [
            "Fire",
            "Flood",
            "Crime",
            "Earthquake",
            "Accident",
            "Health Emergency",
          ],
          datasets: [
            {
              label: "Number of Reports",
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor: [
                "#d42929",
                "#f04242",
                "#ff8787",
                "#9cdb97",
                "#67bf67",
                "#36a35f",
              ],
              borderColor: "black",
              borderWidth: 1,
            },
          ],
        }}
        options={{
          maintainAspectRatio: false,
        }}
        height={400}
        width={600}
      />
    </div>
  );
};

export default Piechart;
