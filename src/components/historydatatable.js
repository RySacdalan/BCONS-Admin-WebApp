/* eslint-disable */
import React, { useState, useEffect } from "react";
import firebase from "../firebase/firebase.config";
import LocationModal from "./locationModal";
import "../styles/historydatatable.scss";
import { v4 as uuidv4 } from "uuid";

//data reference
const ref = firebase.firestore().collection("User Reports");
console.log(ref);

const Historydatatable = () => {
  const [reportHistory, setReportHistory] = useState([]);
  const [reportId, setReportId] = useState("");
  const [modalShow, setModalShow] = useState(false);
  const [search, setSearch] = useState("");

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
    <div className="report-container" key={uuidv4()}>
      <div className="table-wrapper" key={uuidv4()}>
        <div className="search-input" key={uuidv4()}>
          <input
            type="text"
            placeholder="Search emergency here..."
            onChange={(e) => setSearch(e.target.value)}
          />
          <ion-icon name="search"></ion-icon>
        </div>
        <div className="report-list-container" key={uuidv4()}>
          <LocationModal
            show={modalShow}
            onHide={() => setModalShow(false)}
            data={reportHistory}
            reportid={reportId}
          />
          {reportHistory
            .filter((emergency) => {
              //search keyword
              if (emergency.status === "Solved") {
                return emergency.emergencyTypeOfReport
                  .toLowerCase()
                  .includes(search);
              }
            })
            .map((report) => {
              if (report.status === "Solved") {
                return (
                  <div className="report-list-wrapper" key={uuidv4()}>
                    <div className="report-image" key={uuidv4()}>
                      <img src={report.image} alt="Report Image" />
                    </div>
                    <div className="report-details" key={uuidv4()}>
                      <p>
                        <span>Emergency:</span> {report.emergencyTypeOfReport}
                      </p>
                      <div className="report-time" key={uuidv4()}>
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
                        <div className="control-wrapper" key={uuidv4()}>
                          <button
                            className="update-btn"
                            disabled
                            key={uuidv4()}
                          >
                            <div className="report-btn-wrapper" key={uuidv4()}>
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
                    <div className="report-description" key={uuidv4()}>
                      <p>
                        <span>Report Description:</span>
                      </p>
                      <div className="description-container" key={uuidv4()}>
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
