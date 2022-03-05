import React, { useEffect, useState } from "react";
import "./users.scss";
import { collection, getFirestore, getDocs } from "firebase/firestore";

const Users = () => {
  const [allUsers, setAllUsers] = useState([]);

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
  console.log(allUsers);

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <div className="users">
      <h3>List of All users</h3>
      <div>
        {allUsers.map((user) => {
          return (
            <div>
              <p>{user.email}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Users;
