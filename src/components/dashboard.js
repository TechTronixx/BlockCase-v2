import React from "react";
import "./dashboard.css";
import { useUserContext } from "../context/userContext";

const Dashboard = () => {
  //use user(destructured) later
  const { logoutUser } = useUserContext();

  return (
    <div>
      <div className="nav-bar">
        <button className="logout-btn" onClick={logoutUser}>
          Log out
        </button>
      </div>
      <div className="side-bar"></div>

      <div className="dashboard-container">
        {/* <h1>BlockCase Dashboard </h1>
      <h1>Profile </h1>
      <h2>Name : {user.displayName}</h2>
      <h2>Email : {user.email}</h2> */}
        {/* */}
        <div className="card-container">
          <div className="Cardnavbar">
            <h3>My Assets</h3>

            <button className="btn-addcard">Add Card</button>
          </div>
          <div className="card-body">
            <div className="card-item1"></div>
            <div className="card-item2"></div>

            <div className="card-item1"></div>
            <div className="card-item2"></div>
          </div>
        </div>

        <div className="bottom-container">
          <div className="pie-container"></div>

          {/* 4 Component Bottom Right */}
          <div className="overall-container">
            <div className="overall-item1">
              <div className="asset-container balance"></div>
              <div className="asset-container spending"></div>
            </div>

            <div className="overall-item2">
              <div className="asset-container saved"></div>
              <div className="asset-container netgross"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
