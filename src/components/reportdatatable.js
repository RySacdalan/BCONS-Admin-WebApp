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
  const [reportStatus, setreportStatus] = useState("solved");
  const [modalShow, setModalShow] = useState(false);

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
          toast.success("User's Report Updated Successfully!");
        })
        .catch((err) => {
          toast.error("ERROR: Failed to update user!");
          console.log(err);
        });
    }
  }

  return (
    <div className="report-container">
      <div className="table-wrapper">
        <div className="search-input">
          <input type="text" placeholder="Search..." />
          <ion-icon name="search"></ion-icon>
        </div>

        <div className="table-container">
          <LocationModal
            show={modalShow}
            onHide={() => setModalShow(false)}
            data={data}
            reportid={reportId}
          />
          <table>
            <thead>
              <tr>
                <th>Control Reports</th>
                <th>Image Report</th>
                <th>Name</th>
                <th>Type of Report</th>
                <th>Description</th>
                <th>Blood Type</th>
                <th>Date</th>
                <th>Time</th>
                <th>Email</th>
                <th>Age</th>
                <th>Report Status</th>
              </tr>
            </thead>
            <tbody>
              {data.map((report) => {
                if (report.status == "unsolved") {
                  return (
                    <tr key={report.id}>
                      <td>
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
                      </td>
                      <td>
                        <img src={report.image} alt="Profile Image" />
                      </td>
                      <td>{report.name}</td>
                      <td>{report.emergencyTypeOfReport}</td>
                      <td>{report.description}</td>
                      <td>{report.bloodType}</td>
                      <td>{report.date}</td>
                      <td>{report.time}</td>
                      <td>{report.email}</td>
                      <td>{report.age}</td>
                      <td>{report.status}</td>
                    </tr>
                  );
                }
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export { ref };
export default Reportsdatatable;
