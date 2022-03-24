import React, { useState, useEffect } from "react";
import "./usertable.scss";
import firebase from "../../firebase/firebase.config";
import MyVerticallyCenteredModal from "../../components/MyVerticallyCenteredModal";
import { toast } from "react-toastify";

//data reference
const ref = firebase.firestore().collection("Users");

const UserTable = () => {
  const [data, setData] = useState([]);
  const [userId, setUserId] = useState("");
  const [loader, setLoader] = useState(true);
  const [modalShow, setModalShow] = useState(false);

  //Getting all data of users
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

  //Deleting a user
  function deleteDoc(userdoc) {
    console.log(userdoc);
    if (
      window.confirm(
        "Deleting this user will delete all his/her account and history of reports. Are you sure you want to delete this account permanently?"
      )
    ) {
      ref
        .doc(userdoc.uid)
        .delete()
        .then(() => {
          toast.success("Account Deleted Successfully!");
        })
        .catch(() => {
          toast.error("ERROR: Failed to delete user!");
        });
    }
  }

  return (
    <div className="usertable-container">
      <h3>User Data Table</h3>

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
            userid={userId}
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
              {data.map((user) => (
                <tr key={user.uid}>
                  <td>
                    <img src={user.image} alt="Profile Image" />
                  </td>
                  <td>{user.lastName}</td>
                  <td>{user.firstName}</td>
                  <td>{user.middleInitial}</td>
                  <td>{user.bloodType}</td>
                  <td>{user.gender}</td>
                  <td>{user.age}</td>
                  <td>{user.birthday}</td>
                  <td>{user.email}</td>
                  <td>{user.contactNumber}</td>
                  <td>{user.street}</td>
                  <td>{user.brgy}</td>
                  <td>{user.municipality}</td>
                  <td>{user.province}</td>
                  <td>
                    <div className="control-wrapper">
                      <button
                        className="edit-btn"
                        onClick={() => {
                          setModalShow(true);
                          setUserId(user.uid);
                        }}
                      >
                        <ion-icon name="create"></ion-icon>
                      </button>
                      <button
                        className="delete-btn"
                        onClick={() => deleteDoc(user)}
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
export default UserTable;
