import React from "react";
import "../styles/userdatatable.scss";

const Userdatatable = ({ data }) => {
  return (
    <div className="table-wrapper">
      <div className="table-container">
        <table>
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
                    <button className="edit-btn">Edit</button>
                    <button className="delete-btn">Delete</button>
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
