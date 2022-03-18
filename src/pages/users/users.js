import React, { useEffect, useState } from "react";
import "./users.scss";
import Userdatatable from "../../components/userdatatable";
import { useUserContext } from "../../context/userContext";
import Loading from "../../components/loading";

const Users = () => {
  const { loading } = useUserContext();

  return (
    <div className="users">
      <div className="search-bar">
        <h3>List of users</h3>
      </div>
      {loading ? <Loading /> : <Userdatatable />}
    </div>
  );
};

export default Users;
