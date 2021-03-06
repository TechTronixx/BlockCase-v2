import React, { useState } from "react";
import Signin from "./signin";
import Signup from "./signup";

const Auth = () => {
  const [index, setIndex] = useState(false);
  const toggleIndex = () => {
    setIndex((prevState) => !prevState);
  };
  return (
    <div className="container">
      {!index ? <Signin /> : <Signup />}
      <p onClick={toggleIndex}>
        {!index
          ? "Dont have an account? Click here to Signup! "
          : "Already have an acount? Click here to Signin!"}
      </p>
    </div>
  );
};

export default Auth;
