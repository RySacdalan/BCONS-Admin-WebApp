import React from "react";
import "./history.scss";
import { useUserContext } from "../../context/userContext";
import Loading from "../../components/loading";
import Historydatatable from "../../components/historydatatable";

const History = () => {
  const { loading } = useUserContext();
  return (
    <div className="users">
      <div className="search-bar">
        <h3>Solved Reports</h3>
      </div>
      {loading ? <Loading /> : <Historydatatable />}
    </div>
  );
};

export default History;
