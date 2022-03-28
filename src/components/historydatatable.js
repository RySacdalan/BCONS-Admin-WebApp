import React, { useState, useEffect } from "react";
import firebase from "../firebase/firebase.config";
import MyVerticallyCenteredModal from "./MyVerticallyCenteredModal";
import { toast } from "react-toastify";
import "../styles/historydatatable.scss";

//data reference
const ref = firebase.firestore().collection("User historys");
console.log(ref);
const Historydatatable = () => {
  const [data, setData] = useState([]);
  const [historyStatus, sethistoryStatus] = useState("unsolved");
  const [loader, setLoader] = useState(true);
  const [modalShow, setModalShow] = useState(false);

  //Getting all data of historys
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
  function updateStatus(edithistory) {
    console.log(edithistory);
    ref
      .doc(edithistory.id)
      .update(edithistory)
      .then(() => {
        toast.success("User's history Updated Successfully!");
      })
      .catch((err) => {
        toast.error("ERROR: Failed to update user!");
        console.log(err);
      });
  }
  //Deleting a history
  function location(historydoc) {
    console.log(historydoc);
    if (
      window.confirm(
        "Deleting this history will delete all his/her account and history of historys. Are you sure you want to delete this account permanently?"
      )
    ) {
      ref
        .doc(historydoc.uid)
        .delete()
        .then(() => {
          toast.success("Account Deleted Successfully!");
        })
        .catch(() => {
          toast.error("ERROR: Failed to delete history!");
        });
    }
  }

  return (
    <div className="historytable-container">
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
                <th>Type of history</th>
                <th>Description</th>
                <th>Blood Type</th>
                <th>Date</th>
                <th>Time</th>
                <th>Email</th>
                <th>Age</th>
                <th>history Status</th>
              </tr>
            </thead>
            <tbody>
              {data.map((history) => {
                if (history.status == "solved") {
                  return (
                    <tr key={history.id}>
                      <td>
                        <div className="control-wrapper">
                          <button
                            className="location-btn"
                            onClick={() => location(history)}
                          >
                            <ion-icon name="trash"></ion-icon>
                          </button>
                        </div>
                      </td>
                      <td>
                        <img src={history.image} alt="Profile Image" />
                      </td>
                      <td>{history.name}</td>
                      <td>{history.emergencyTypeOfhistory}</td>
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
export { ref };
export default Historydatatable;
