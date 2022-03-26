import React, { useRef } from "react";
import { useUserContext } from "../context/userContext";
import { v4 as uuidv4 } from "uuid";

const Signin = () => {
  const emailRef = useRef();
  const psdRef = useRef();

  const { error, signInUser, forgotPassword } = useUserContext();

  const onSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = psdRef.current.value;
    if (email && password) signInUser(email, password);
  };

  const forgotPasswordHandler = () => {
    const email = emailRef.current.value;
    if (email)
      forgotPassword(email).then(() => {
        emailRef.current.value = "";
      });
  };

  return (
    <div className="form" key={uuidv4()}>
      {error && (
        <p className="error" key={uuidv4()}>
          {error}
        </p>
      )}
      <h2>Admin login</h2>
      <form onSubmit={onSubmit} key={uuidv4()}>
        <input placeholder="Email" type="email" ref={emailRef} key={uuidv4()} />
        <input
          placeholder="Password"
          type="password"
          ref={psdRef}
          key={uuidv4()}
        />
        <button type="submit" key={uuidv4()}>
          Sign In
        </button>
        <p onClick={forgotPasswordHandler}>Forgot Password</p>
      </form>
    </div>
  );
};

export default Signin;
