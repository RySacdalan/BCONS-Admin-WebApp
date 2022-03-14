import React from "react";
import "../styles/loading.scss";
import bconsImg from "../images/BCONS-main.png";

const Loading = () => {
  return (
    <div className="loading-container">
      <div className="loading-wrapper">
        <img src={bconsImg} alt="BCONS Logo" />
        <h3>Loading...</h3>
      </div>
    </div>
  );
};

export default Loading;
