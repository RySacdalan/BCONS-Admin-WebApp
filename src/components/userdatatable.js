import React, { useState } from "react";
import "../styles/userdatatable.scss";
import MyVerticallyCenteredModal from "./updateuser";

const Userdatatable = ({ data }) => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <div className="table-wrapper">
      <div className="table-container">
        <table>
          <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
          <thead>
            <tr>
              <th>Image</th>
              <th>Lastname</th>
              <th>Firstname</th>
              <th>Middle Initial</th>
              <th>Gender</th>
              <th>Email</th>
              <th>Contact</th>
              <th>Birthday</th>
              <th>Street</th>
              <th>Barangay</th>
              <th>Municipality</th>
              <th>Province</th>
              <th>Id</th>
              <th>Control</th>
            </tr>
          </thead>
          <tbody>
            {data.map((user) => (
              <tr>
                <td>
                  <img src={user.image} alt="UserImage" />
                </td>
                <td>{user.lastName}</td>
                <td>{user.firstName}</td>
                <td>{user.middleInitial}</td>
                <td>{user.gender}</td>
                <td>{user.email}</td>
                <td>{user.contactNumber}</td>
                <td>{user.birthday}</td>
                <td>{user.street}</td>
                <td>{user.brgy}</td>
                <td>{user.municipality}</td>
                <td>{user.province}</td>
                <td>{user.uid}</td>
                <td>
                  <div className="control-wrapper">
                    <button
                      className="edit-btn"
                      onClick={() => setModalShow(true)}
                    >
                      <ion-icon name="create"></ion-icon>
                    </button>
                    <button className="delete-btn">
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
  );
};

export default Userdatatable;
