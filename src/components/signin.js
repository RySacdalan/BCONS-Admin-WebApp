import React, { useRef } from "react";

const Signin = () => {
  const emailRef = useRef();
  const psdRef = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = psdRef.current.value;
  };

  const forgotPassword = () => {
    const email = emailRef.current.value;
  };

  return (
    <div className="form">
      <h2>Login</h2>
      <form onSubmit={onSubmit}>
        <input placeholder="Email" type="email" ref={emailRef} />
        <input placeholder="Password" type="password" ref={psdRef} />
        <button type="submit">Sign In</button>
        <p onClick={forgotPassword}>Forgot Password</p>
      </form>
    </div>
  );
};

export default Signin;
