import React, { useState } from "react";
import Signin from "./signin";

const Auth = () => {
  const [index, setIndex] = useState(false);
  return <div className="container">{!index ? <Signin /> : null}</div>;
};

export default Auth;
