import React from "react";

const Userdatatable = ({ data }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Lastname</th>
          <th>Firstname</th>
          <th>Email</th>
          <th>Contact</th>
        </tr>
      </thead>
      <tbody>
        {data.map((user) => (
          <tr>
            <td>{user.uid}</td>
            <td>{user.lastName}</td>
            <td>{user.firstName}</td>
            <td>{user.email}</td>
            <td>{user.contactNumber}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Userdatatable;
