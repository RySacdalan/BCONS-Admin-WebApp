import React, { useState, useEffect } from "react";
import firebase from "../firebase/firebase.config";
import { toast } from "react-toastify";
import "../styles/reportdatatable.scss";
import LocationModal from "./locationModal";

//data reference
const ref = firebase.firestore().collection("User Reports");

const Reportsdatatable = () => {
  const [data, setData] = useState([]);
  const [reportId, setReportId] = useState("");
  const [reportStatus, setreportStatus] = useState("Solved");
  const [modalShow, setModalShow] = useState(false);
  const [search, setSearch] = useState("");

  //Getting all data of reports
  const getData = () => {
    ref.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setData(items);
    });
  };
  useEffect(() => {
    getData();
  }, []);

  //function for updating report to solved
  function updateStatus(editReport) {
    console.log(editReport.id);
    if (
      window.confirm(
        "Updating this report will be permanent and can be only seen in the history of reports. Are you sure you want to mark this report as solved permanently?"
      )
    ) {
      ref
        .doc(editReport.id)
        .update(editReport)
        .then(() => {
          toast.success("Report Updated As Solved Successfully!");
        })
        .catch((err) => {
          toast.error("ERROR: Failed to update the report!");
          console.log(err);
        });
    }
  }

  return (
    <div className="report-container">
      <div className="table-wrapper">
        <div className="search-input">
          <input
            type="text"
            placeholder="Search emergency here..."
            onChange={(e) => setSearch(e.target.value)}
          />
          <ion-icon name="search"></ion-icon>
        </div>
        <div className="report-list-container">
          <LocationModal
            show={modalShow}
            onHide={() => setModalShow(false)}
            data={data}
            reportid={reportId}
          />
          {data
            .filter((emergency) => {
              //search keyword
              if (emergency.status === "Unsolved") {
                return emergency.emergencyTypeOfReport
                  .toLowerCase()
                  .includes(search);
              }
            })
            .map((report) => {
              if (report.status === "Unsolved") {
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
                          <span>Contact:</span> {report.contactNumber}
                        </p>
                        <div className="control-wrapper">
                          <button
                            className="update-btn"
                            onClick={() => {
                              updateStatus({
                                status: reportStatus,
                                id: report.reportId,
                              });
                            }}
                          >
                            <div className="report-btn-wrapper">
                              <ion-icon name="checkmark-circle-outline"></ion-icon>
                              <p>Mark Solved</p>
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
                        <p>
                          {report.description == ""
                            ? "No description available"
                            : report.description}
                        </p>
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
export { ref };
export default Reportsdatatable;
