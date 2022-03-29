import React, { useState, useEffect } from "react";
import firebase from "../firebase/firebase.config";
import { toast } from "react-toastify";
import "../styles/reportdatatable.scss";
import LocationModal from "./locationModal";

//data reference
const ref = firebase.firestore().collection("User Reports");
console.log(ref);
const Historydatatable = () => {
  const [data, setData] = useState([]);
  const [reportId, setReportId] = useState("");
  const [reportStatus, setreportStatus] = useState("solved");
  const [loader, setLoader] = useState(true);
  const [modalShow, setModalShow] = useState(false);

  //Getting all data of reports
  const getData = () => {
    ref.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setData(items);
      setLoader(false);
    });
  };
  useEffect(() => {
    getData();
  }, []);


  return (
    <div className="history-container">
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
                <th>Status</th>
                <th>Image</th>
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
              {data.map((history) => {
                if (history.status === "solved") {
                  return (
                    
                    <tr key={history.id}>
                      <td>
                        <div className="control-wrapper">
                          <button
                            className="edit-btn"
                            onClick={() => {
                              updateStatus({
                                status: reportStatus,
                                id: history.reportId,
                              });
                            }}
                          >
                            <ion-icon name="create"></ion-icon>
                          </button>
                          <button
                            className="delete-btn"
                            onClick={() => {
                              setModalShow(true);
                              setReportId(history.reportId);
                            }}
                          >
                            <ion-icon name="location"></ion-icon>
                          </button>
                        </div>
                      </td>
                      <td>
                        <img src={history.image} alt="Report Image" />
                      </td>
                      <td>{history.name}</td>
                      <td>{history.emergencyTypeOfReport}</td>
                      <td>{history.description}</td>
                      <td>{history.bloodType}</td>
                      <td>{history.date}</td>
                      <td>{history.time}</td>
                      <td>{history.email}</td>
                      <td>{history.age}</td>
                      <td>{history.status}</td>
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

export default Historydatatable;
