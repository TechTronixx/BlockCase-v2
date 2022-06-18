import React, { useRef } from "react";
import { useUserContext } from "../context/userContext";

const Signup = () => {
  const emailRef = useRef();
  const nameRef = useRef();
  const psdRef = useRef();
  const { registerUser } = useUserContext();

  const onSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const name = nameRef.current.value;
    const password = psdRef.current.value;
    if (email && password && name) registerUser(email, password, name);
  };

  return (
    <div className="form">
      <div className="image-icon">
        <img classname="logox" alt="" src="logo.png" width="100px" />
        <h6 className="heading">Blockcase</h6>
      </div>
      <div className="form-container">
        <form onSubmit={onSubmit}>
          <h2>Sign Up</h2>
          <input placeholder="Email" type="email" ref={emailRef} />
          <input placeholder="Name" type="name" ref={nameRef} />
          <input placeholder="Password" type="password" ref={psdRef} />
          <button type="submit">Register</button>
        </form>
        <img className="charts-icon" alt="" src="chartsm.svg" />
      </div>
    </div>
  );
};

export default Signup;
