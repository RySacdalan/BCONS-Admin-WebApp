import React from "react";
import "../styles/loading.scss";
import bconsImg from "../images/BCONS-main.png";
import { v4 as uuidv4 } from "uuid";

const Loading = () => {
  return (
    <div className="loading-container" key={uuidv4()}>
      <div className="loading-wrapper" key={uuidv4()}>
        <img src={bconsImg} alt="BCONS Logo" key={uuidv4()} />
        <h3>Loading...</h3>
      </div>
    </div>
  );
};

export default Loading;
