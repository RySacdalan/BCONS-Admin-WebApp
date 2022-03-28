import React from "react";
import "./reports.scss";
import Reportsdatatable from "../../components/reportdatatable";
import { useUserContext } from "../../context/userContext";
import Loading from "../../components/loading";

const Reports = () => {
  const { loading } = useUserContext();
  return (
    <div className="reports-container">
      <div className="search-bar">
        <h3>Unsolved Reports</h3>
      </div>
      {loading ? <Loading /> : <Reportsdatatable />}
    </div>
  );
};

export default Reports;
