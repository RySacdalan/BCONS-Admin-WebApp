import React from "react";
import "../styles/activityinfo.scss";

const Activityinfo = () => {
  return (
    <div className="activity">
      <div className="activity-item total-report">
        <span className="activity-title">
          <ion-icon name="alert-circle"></ion-icon>
          Total reports
        </span>
        <div className="reports">
          <h1>18</h1>
        </div>
      </div>
      <div className="activity-item unsolve-report">
        <span className="activity-title">
          <ion-icon name="alert-circle"></ion-icon>
          Unsolve reports
        </span>
        <div className="reports">
          <h1>4</h1>
        </div>
      </div>
      <div className="activity-item total-users">
        <span className="activity-title">
          <ion-icon name="alert-circle"></ion-icon>
          Total users
        </span>
        <div className="reports">
          <h1>152</h1>
        </div>
      </div>
    </div>
  );
};

export default Activityinfo;
