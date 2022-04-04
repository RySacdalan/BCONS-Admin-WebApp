import React, { useState } from "react";
import Signin from "./signin";
import { v4 as uuidv4 } from "uuid";

const Auth = () => {
  const [index, setIndex] = useState(false);
  return (
    <div className="container" key={uuidv4()}>
      {!index ? <Signin /> : setIndex(false)}
    </div>
  );
};

export default Auth;
