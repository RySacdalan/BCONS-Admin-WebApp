import React, { useContext } from "react";
import { Bar } from "react-chartjs-2";
import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";
import { ReportContext } from "../context/reportContext";

const Barchart = () => {
  Chart.defaults.plugins.legend.position = "top";
  Chart.register(CategoryScale);

  //Reports from context
  const { reports, nearbyReports } = useContext(ReportContext);

  //Fire reports
  const fire = reports.filter((report) => {
    return report.emergencyTypeOfReport === "Fire";
  });

  //Flood reports
  const flood = reports.filter((report) => {
    return report.emergencyTypeOfReport === "Flood";
  });

  //Crime reports
  const crime = reports.filter((report) => {
    return report.emergencyTypeOfReport === "Crime";
  });

  //Accident reports
  const accident = reports.filter((report) => {
    return report.emergencyTypeOfReport === "Accident";
  });

  //Earthquake reports
  const earthquake = reports.filter((report) => {
    return report.emergencyTypeOfReport === "Earthquake";
  });

  //Health emergency reports
  const health = reports.filter((report) => {
    return report.emergencyTypeOfReport === "Health Emergency";
  });

  //REPORTS FROM NEARBY REPORTS
  //Fire reports
  const fireNearby = nearbyReports.filter((nearby) => {
    return nearby.emergencyTypeOfReport === "Fire";
  });

  //Flood reports
  const floodNearby = nearbyReports.filter((nearby) => {
    return nearby.emergencyTypeOfReport === "Flood";
  });

  //Crime reports
  const crimeNearby = nearbyReports.filter((nearby) => {
    return nearby.emergencyTypeOfReport === "Crime";
  });

  //Accident reports
  const accidentNearby = nearbyReports.filter((nearby) => {
    return nearby.emergencyTypeOfReport === "Accident";
  });

  //Earthquake reports
  const earthquakeNearby = nearbyReports.filter((nearby) => {
    return nearby.emergencyTypeOfReport === "Earthquake";
  });

  //Health emergency reports
  const healthNearby = nearbyReports.filter((nearby) => {
    return nearby.emergencyTypeOfReport === "Health Emergency";
  });

  return (
    <div className="bar-container">
      <Bar
        data={{
          labels: [
            "Fire",
            "Flood",
            "Crime ",
            "Earthquake",
            "Accident",
            "Health Reports",
          ],
          datasets: [
            {
              label: "Number of Reports",
              data: [
                fire.length + fireNearby.length,
                flood.length + floodNearby.length,
                crime.length + crimeNearby.length,
                earthquake.length + earthquakeNearby.length,
                accident.length + accidentNearby.length,
                health.length + healthNearby.length,
              ],
              backgroundColor: [
                "#d42929",
                "#f04242",
                "#ff8787",
                "#9cdb97",
                "#67bf67",
                "#36a35f",
              ],
            },
          ],
        }}
        options={{
          maintainAspectRatio: false,
          plugins: {
            title: {
              display: true,
              text: "Total Reports by Emergencies",
            },
          },
        }}
        height={312}
        width={612}
      />
    </div>
  );
};

export default Barchart;
