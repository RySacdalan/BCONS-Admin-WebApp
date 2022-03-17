import React from "react";
import { useState } from "react";
import LineChart from "./linechart";
import DoughnutChart from "./doughnutchart";
import { UserData } from "./data";
import "../styles/activityinfo.scss";
import { Chart as ChartJS } from 'chart.js/auto';

  
function Activitychart  ()  {
  const [lineData, setLineData] = useState({
    
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Reports per Day",
        data: UserData.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#f3ba2f",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 1,
        lineTension : .6,
      },
    ],
  },
  );
  const [userData, setUserData] = useState({
    
    labels: UserData.map((data) => data.report),
    datasets: [
      {
        label: "Reports per Day",
        data: UserData.map((data) => data.userGain),
        backgroundColor: [
          "#795644",
          "#CD001A",
          "#50AF95",
          "#FF4F00",
          "#2a9df4",
        ],
        borderColor: "black",
        borderWidth: 1,
        
      },
    ]
  },);
    const options = {
      animation: false,
  cutoutPercentage: 80,
  layout: { padding: 0 },
  legend: {
   display: false
  },
  maintainAspectRatio: false,
  responsive: true,
  tooltips: {
   backgroundColor: 'black',
   bodyFontColor: 'blue',
   borderColor: 'red',
   borderWidth: 1,
   enabled: true,
   footerFontColor: 'yellow',
   intersect: false,
   mode: 'index',
   titleFontColor: 'white'
  }
    };
  return (
    <div className="activity">
      <div style={{ width: 700 }}>
        <LineChart chartData={lineData} options={{options}}/>
      </div>
      <div style={{ width:300 }}>
        <DoughnutChart chartData={userData} options={{options}} />
      </div>
    </div>
    
  );
}

export default Activitychart;
