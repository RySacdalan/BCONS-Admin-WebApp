import React, { useContext } from "react";
import { Pie } from "react-chartjs-2";
import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";
import { ReportContext } from "../context/reportContext";

const Piechart = () => {
  Chart.register(CategoryScale);

  //All report from context
  const { reports } = useContext(ReportContext);

  //Get number of manual reports
  const manual = reports.filter((report) => {
    return report.autoOrManual === "manual";
  });

  //Get number of automatic reports
  const automatic = reports.filter((report) => {
    return report.autoOrManual === "automated";
  });

  return (
    <div className="bar-container">
      <Pie
        data={{
          labels: ["Manual", "Automated"],
          datasets: [
            {
              label: "Number of Reports",
              data: [manual.length, automatic.length],
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
