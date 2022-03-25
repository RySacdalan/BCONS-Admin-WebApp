import React, { useState, useEffect } from "react";

import firebase from "../firebase/firebase.config";
import MyVerticallyCenteredModal from "./MyVerticallyCenteredModal";
import { toast } from "react-toastify";

//data reference
const ref = firebase.firestore().collection("User Reports");

const Reportsdatatable = () => {
  const [data, setData] = useState([]);
  const [reportId, setreportId] = useState("");
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

  //Deleting a report
  function deleteDoc(reportdoc) {
    console.log(reportdoc);
    if (
      window.confirm(
        "Deleting this report will delete all his/her account and history of reports. Are you sure you want to delete this account permanently?"
      )
    ) {
      ref
        .doc(reportdoc.uid)
        .delete()
        .then(() => {
          toast.success("Account Deleted Successfully!");
        })
        .catch(() => {
          toast.error("ERROR: Failed to delete report!");
        });
    }
  }

  return (
    <div className="reporttable-container">
      

      <div className="table-wrapper">
        <div className="search-input">
          <input type="text" placeholder="Search..." />
          <ion-icon name="search"></ion-icon>
        </div>

        <div className="table-container">
          <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
            data={data}
            reportid={reportId}
          />
          <table>
            <thead>
              <tr>
                <th>Image</th>
                <th>Lastname</th>
                <th>Firstname</th>
                <th>Middle Initial</th>
                <th>Blood Type</th>
                <th>Gender</th>
                <th>Age</th>
                <th>Birthday</th>
                <th>Email</th>
                <th>Contact number</th>
                <th>Street</th>
                <th>Barangay</th>
                <th>Municipality</th>
                <th>Province</th>
                <th>Control</th>
              </tr>
            </thead>
            <tbody>
              {data.map((report) => (
                <tr key={report.id}>
                  <td>
                    <img src={report.image} alt="Profile Image" />
                  </td>
                  <td>{report.lastName}</td>
                  <td>{report.firstName}</td>
                  <td>{report.middleInitial}</td>
                  <td>{report.bloodType}</td>
                  <td>{report.gender}</td>
                  <td>{report.age}</td>
                  <td>{report.birthday}</td>
                  <td>{report.email}</td>
                  <td>{report.contactNumber}</td>
                  <td>{report.street}</td>
                  <td>{report.brgy}</td>
                  <td>{report.municipality}</td>
                  <td>{report.province}</td>
                  <td>
                    <div className="control-wrapper">
                      <button
                        className="edit-btn"
                        onClick={() => {
                          setModalShow(true);
                          setreportId(report.uid);
                        }}
                      >
                        <ion-icon name="create"></ion-icon>
                      </button>
                      <button
                        className="delete-btn"
                        onClick={() => deleteDoc(report)}
                      >
                        <ion-icon name="trash"></ion-icon>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export { ref };
export default Reportsdatatable;
