import React, { useEffect, useState } from "react";
import "./users.scss";
import { collection, getFirestore, getDocs } from "firebase/firestore";
import Userdatatable from "../../components/userdatatable";

const Users = () => {
  const [allUsers, setAllUsers] = useState([]);
  const [searchName, setSearchName] = useState("");

  const getAllUsers = async () => {
    //initialize service
    const db = getFirestore();
    //collection reference
    const colRef = collection(db, "Users");

    //get data from collections
    const querySnapshot = await getDocs(colRef);
    const data = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    setAllUsers(data);
  };

  function search(rows) {
    return rows.filter(
      (row) =>
        row.firstName.toLowerCase().indexOf(searchName) > -1 ||
        row.lastName.toLowerCase().indexOf(searchName) > -1
    );
  }

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <div className="users">
      <h3>List of users</h3>
      <div className="search-bar">
        <input
          type="text"
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
        />
      </div>
      <Userdatatable data={search(allUsers)} />
    </div>
  );
};

export default Users;
