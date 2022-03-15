import React, { useEffect, useState } from "react";
import "./users.scss";
import Userdatatable from "../../components/userdatatable";
import { useUserContext } from "../../context/userContext";
import Loading from "../../components/loading";

const Users = () => {
  const [searchName, setSearchName] = useState("");
  const { loading, allUsers } = useUserContext();

  //user table search filter
  function search(rows) {
    return rows.filter(
      (row) =>
        row.firstName.toLowerCase().indexOf(searchName) > -1 ||
        row.lastName.toLowerCase().indexOf(searchName) > -1 ||
        row.email.toLowerCase().indexOf(searchName) > -1 ||
        row.contactNumber.toLowerCase().indexOf(searchName) > -1 ||
        row.brgy.toLowerCase().indexOf(searchName) > -1 ||
        row.municipality.toLowerCase().indexOf(searchName) > -1
    );
  }

  return (
    <div className="users">
      <div className="search-bar">
        <h3>List of users</h3>
        <div className="search-input">
          <input
            type="text"
            placeholder="Search"
            value={searchName}
            onChange={(e) => setSearchName(e.target.value)}
          />
          <ion-icon name="search"></ion-icon>
        </div>
      </div>
      {loading ? <Loading /> : <Userdatatable data={search(allUsers)} />}
    </div>
  );
};

export default Users;
