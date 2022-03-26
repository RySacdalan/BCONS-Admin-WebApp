import React from "react";
import "../styles/activityinfo.scss";
import { useUserContext } from "../context/userContext";
import { v4 as uuidv4 } from "uuid";

const Activityinfo = () => {
  const { allUsers } = useUserContext();
  return (
    <div className="activity" key={uuidv4()}>
      <div className="activity-item total-report" key={uuidv4()}>
        <span className="activity-title" key={uuidv4()}>
          <ion-icon name="alert-circle"></ion-icon>
          Total reports
        </span>
        <div className="reports" key={uuidv4()}>
          <h1>18</h1>
        </div>
      </div>
      <div className="activity-item unsolve-report" key={uuidv4()}>
        <span className="activity-title" key={uuidv4()}>
          <ion-icon name="alert-circle"></ion-icon>
          Unsolve reports
        </span>
        <div className="reports" key={uuidv4()}>
          <h1>4</h1>
        </div>
      </div>
      <div className="activity-item total-users" key={uuidv4()}>
        <span className="activity-title" key={uuidv4()}>
          <ion-icon name="alert-circle"></ion-icon>
          Total users
        </span>
        <div className="reports" key={uuidv4()}>
          <h1>{allUsers.length}</h1>
        </div>
      </div>
    </div>
  );
};

export default Activityinfo;
