import React, { useRef } from "react";
import { useUserContext } from "../context/userContext";

const Signin = () => {
  const emailRef = useRef();
  const psdRef = useRef();
  const { signInUser, forgotPassword } = useUserContext();

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
    <div className="form">
      <div className="image-icon">
        <img alt="" src="logo.png" width="200" />
        <h6 className="heading">BlockCase</h6>
      </div>
      <div className="form-container">
        <form onSubmit={onSubmit}>
          <h2> Login </h2>
          <input placeholder="Email" type="email" ref={emailRef} />
          <input placeholder="Password" type="password" ref={psdRef} />
          <button type="submit">Sign In</button>
          <button onClick={forgotPasswordHandler}>
            {" "}
            Forgot Password? Click here to reset!
          </button>
        </form>
        <img className="charts-icon" alt="" src="chartsm.svg" />
      </div>
    </div>
  );
};

export default Signin;
