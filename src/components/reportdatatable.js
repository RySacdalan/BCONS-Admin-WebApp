import React, { useState, useEffect } from "react";
import firebase from "../firebase/firebase.config";
import MyVerticallyCenteredModal from "./MyVerticallyCenteredModal";
import { toast } from "react-toastify";

//data reference
const ref = firebase.firestore().collection("User Reports");
console.log(ref);
const Reportsdatatable = () => {
  const [data, setData] = useState([]);
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
  function updateStatus(editReport) {
    console.log(editReport);
    ref
      .doc(editReport.id)
      .update(editReport)
      .then(() => {
        toast.success("User Updated Successfully!");
      })
      .catch((err) => {
        toast.error("ERROR: Failed to update user!");
        console.log(err);
      });
  }
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
              {data.map((report) => {
                if(report.status=="unsolved"){
                  
                  return (<tr key={report.id}>
                    
                  <td>
                    <div className="control-wrapper">
                      <button
                        className="edit-btn"
                        onClick={() => {
                          
                          updateStatus({
                            status:reportStatus,
                            id: report.reportId,
                          });
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
                  )}})}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export { ref };
export default Reportsdatatable;
