import React, { useState, useEffect } from "react";
import firebase from "../firebase/firebase.config";
import LocationModal from "./locationModal";
import "../styles/historydatatable.scss";

//data reference
const ref = firebase.firestore().collection("User Reports");
console.log(ref);

const Historydatatable = () => {
  const [reportHistory, setReportHistory] = useState([]);
  const [reportId, setReportId] = useState("");
  const [modalShow, setModalShow] = useState(false);

  //Getting all data of reports
  const getData = () => {
    ref.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setReportHistory(items);
    });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="report-container">
      <div className="table-wrapper">
        <div className="report-list-container">
          <LocationModal
            show={modalShow}
            onHide={() => setModalShow(false)}
            data={reportHistory}
            reportid={reportId}
          />
          {reportHistory.map((report) => {
            if (report.status === "Solved") {
              return (
                <div className="report-list-wrapper">
                  <div className="report-image">
                    <img src={report.image} alt="Report Image" />
                  </div>
                  <div className="report-details">
                    <p>
                      <span>Emergency:</span> {report.emergencyTypeOfReport}
                    </p>
                    <div className="report-time">
                      <p>
                        <span>Status:</span> {report.status}
                      </p>
                      <p>
                        <span>Time:</span> {report.time} <span>| </span>
                        <span>Date:</span> {report.date}
                      </p>
                      <p>
                        <span>Report by:</span> {report.name}
                      </p>
                      <p>
                        <span>BloodType:</span> {report.bloodType}
                      </p>
                      <p>
                        <span>Email:</span> {report.email}
                      </p>
                      <div className="control-wrapper">
                        <button className="update-btn" disabled>
                          <div className="report-btn-wrapper">
                            <ion-icon name="checkmark-circle-outline"></ion-icon>
                            <p>Solved!</p>
                          </div>
                        </button>
                        <button
                          className="location-btn"
                          onClick={() => {
                            setModalShow(true);
                            setReportId(report.reportId);
                          }}
                        >
                          <div className="report-btn-wrapper">
                            <ion-icon name="location-sharp"></ion-icon>
                            <p>See Location</p>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="report-description">
                    <p>
                      <span>Report Description:</span>
                    </p>
                    <div className="description-container">
                      <p>{report.description}</p>
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default Historydatatable;
