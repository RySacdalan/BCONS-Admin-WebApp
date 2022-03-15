import React from "react";
import "../styles/activityinfo.scss";
import { useUserContext } from "../context/userContext";

const Activityinfo = () => {
  const { allUsers } = useUserContext();
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
          <h1>{allUsers.length}</h1>
        </div>
      </div>
    </div>
  );
};

export default Activityinfo;
